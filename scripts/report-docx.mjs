#!/usr/bin/env node
// Weekly report → .docx generator.
//
// What it does: takes a weekNN/ directory, converts its markdown into a single
// client-ready Word document — cover page, the strategy report, then the change
// log and new-page index as appendices.
//
// Why it exists: the weekly deliverable is markdown committed to the repo, but
// the client receives a document. That conversion was previously done ad hoc and
// not kept, so every cycle re-invented it. This script makes it repeatable and
// keeps the formatting consistent between cycles.
//
// Usage:
//   node scripts/report-docx.mjs week24
//   node scripts/report-docx.mjs week24 --out /some/path.docx
//
// Reads, in order:
//   <week>/<week>_seo_report.md   the strategy narrative (required)
//   <week>/changes/*.md           appended as an appendix
//   <week>/pages/*.md             appended as an appendix

import fs from "node:fs";
import path from "node:path";
import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  ExternalHyperlink, Header, Footer, PageNumber, PageBreak,
} from "docx";

// ── Brand ────────────────────────────────────────────────────────────────
// Sourced from the site's own tokens so the document matches the product:
// gold #C9A84C is the hero glow accent; a darker #96762A is used for text so it
// stays legible on white. Word-safe faces only — Playfair/Inter are web fonts
// and would silently fall back on the client's machine.
const GOLD = "96762A";
const GOLD_LIGHT = "C9A84C";
const INK = "1A1814";
const MUTED = "6A6353";
const RULE = "DED6C5";
const WASH = "F5F1E8";
const CRITICAL = "A2372B";

const SERIF = "Georgia";
const SANS = "Calibri";
const MONO = "Consolas";

const sz = (pt) => pt * 2; // docx sizes are half-points

// ── Inline markdown → TextRun[] ──────────────────────────────────────────
const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*\n]+\*|\[[^\]]+\]\([^)]+\))/g;

function inline(text, base = {}) {
  const runs = [];
  let last = 0;
  let m;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) runs.push(new TextRun({ ...base, text: text.slice(last, m.index) }));
    const t = m[0];
    if (t.startsWith("**")) {
      runs.push(new TextRun({ ...base, text: t.slice(2, -2), bold: true }));
    } else if (t.startsWith("`")) {
      runs.push(new TextRun({ ...base, text: t.slice(1, -1), font: MONO, color: GOLD, size: (base.size ?? sz(10.5)) - 2 }));
    } else if (t.startsWith("[")) {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(t);
      runs.push(new ExternalHyperlink({
        children: [new TextRun({ ...base, text: mm[1], color: "1155CC", underline: {} })],
        link: mm[2].startsWith("http") ? mm[2] : `https://www.nyaysevak.com/${mm[2].replace(/^\.\//, "")}`,
      }));
    } else {
      runs.push(new TextRun({ ...base, text: t.slice(1, -1), italics: true }));
    }
    last = m.index + t.length;
  }
  if (last < text.length) runs.push(new TextRun({ ...base, text: text.slice(last) }));
  return runs.length ? runs : [new TextRun({ ...base, text: "" })];
}

const stripInline = (s) => s.replace(/\*\*/g, "").replace(/`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

// ── Block builders ───────────────────────────────────────────────────────
const body = (children, opts = {}) =>
  new Paragraph({ children, spacing: { after: 140, line: 276 }, ...opts });

function heading(text, level) {
  const spec = {
    1: { size: sz(20), color: GOLD, font: SERIF, before: 0,   after: 200, heading: HeadingLevel.HEADING_1 },
    2: { size: sz(15), color: GOLD, font: SERIF, before: 340, after: 160, heading: HeadingLevel.HEADING_2 },
    3: { size: sz(12), color: INK,  font: SANS,  before: 260, after: 120, heading: HeadingLevel.HEADING_3 },
    4: { size: sz(10), color: MUTED, font: SANS, before: 220, after: 100, heading: HeadingLevel.HEADING_4 },
  }[level];
  return new Paragraph({
    heading: spec.heading,
    spacing: { before: spec.before, after: spec.after },
    ...(level <= 2 ? { border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } } } : {}),
    children: [new TextRun({
      text: stripInline(text),
      bold: true,
      font: spec.font,
      size: spec.size,
      color: spec.color,
      ...(level === 4 ? { allCaps: true, characterSpacing: 20 } : {}),
    })],
  });
}

function table(rows) {
  const [head, ...rest] = rows;
  const mk = (cells, isHead) =>
    new TableRow({
      tableHeader: isHead,
      children: cells.map((c) => new TableCell({
        margins: { top: 90, bottom: 90, left: 130, right: 130 },
        shading: isHead ? { type: ShadingType.CLEAR, fill: WASH } : undefined,
        borders: {
          top:    { style: BorderStyle.SINGLE, size: 2, color: RULE },
          bottom: { style: BorderStyle.SINGLE, size: 2, color: RULE },
          left:   { style: BorderStyle.SINGLE, size: 2, color: RULE },
          right:  { style: BorderStyle.SINGLE, size: 2, color: RULE },
        },
        children: [new Paragraph({
          spacing: { after: 0, line: 250 },
          children: inline(c, { font: SANS, size: sz(8.5), bold: isHead, color: isHead ? INK : MUTED }),
        })],
      })),
    });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [mk(head, true), ...rest.map((r) => mk(r, false))],
  });
}

function listItem(text, ordered, index) {
  return new Paragraph({
    spacing: { after: 100, line: 276 },
    indent: { left: 420, hanging: 240 },
    children: [
      new TextRun({ text: ordered ? `${index}.  ` : "•   ", bold: ordered, color: GOLD, font: SANS, size: sz(10.5) }),
      ...inline(text, { font: SANS, size: sz(10.5), color: INK }),
    ],
  });
}

// ── Markdown → docx blocks ───────────────────────────────────────────────
function convert(md) {
  const out = [];
  const lines = md.split(/\r?\n/);
  let i = 0;
  let ordinal = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { i++; ordinal = 0; continue; }

    // fenced code
    if (trimmed.startsWith("```")) {
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) buf.push(lines[i++]);
      i++;
      out.push(new Paragraph({
        spacing: { before: 120, after: 160 },
        shading: { type: ShadingType.CLEAR, fill: "F2EFE7" },
        border: {
          top:    { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 },
          left:   { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 },
          right:  { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 },
        },
        children: buf.flatMap((l, n) => [
          ...(n ? [new TextRun({ break: 1 })] : []),
          new TextRun({ text: l, font: MONO, size: sz(8.5), color: MUTED }),
        ]),
      }));
      continue;
    }

    // heading
    const h = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (h) { out.push(heading(h[2], Math.min(h[1].length, 4))); i++; ordinal = 0; continue; }

    // horizontal rule
    if (/^([-*_])\1{2,}$/.test(trimmed)) {
      out.push(new Paragraph({
        spacing: { before: 200, after: 200 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 1 } },
        children: [new TextRun("")],
      }));
      i++; continue;
    }

    // table
    if (trimmed.startsWith("|") && /^\|[\s:|-]+\|$/.test((lines[i + 1] ?? "").trim())) {
      const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const rows = [cells(trimmed)];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(cells(lines[i++]));
      out.push(table(rows));
      out.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun("")] }));
      continue;
    }

    // blockquote
    if (trimmed.startsWith(">")) {
      const buf = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) buf.push(lines[i++].trim().replace(/^>\s?/, ""));
      out.push(new Paragraph({
        spacing: { before: 120, after: 180, line: 276 },
        indent: { left: 320 },
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: GOLD_LIGHT, space: 12 } },
        children: inline(buf.join(" "), { font: SANS, size: sz(10), color: MUTED, italics: true }),
      }));
      continue;
    }

    // lists
    const ul = /^[-*+]\s+(.*)$/.exec(trimmed);
    const ol = /^(\d+)[.)]\s+(.*)$/.exec(trimmed);
    if (ul) { ordinal = 0; out.push(listItem(ul[1], false)); i++; continue; }
    if (ol) { ordinal++; out.push(listItem(ol[2], true, ordinal)); i++; continue; }

    // paragraph (join soft-wrapped lines)
    const buf = [trimmed];
    i++;
    while (i < lines.length) {
      const nxt = lines[i].trim();
      if (!nxt || /^(#{1,6}\s|[-*+]\s|\d+[.)]\s|>|\||```)/.test(nxt) || /^([-*_])\1{2,}$/.test(nxt)) break;
      buf.push(nxt); i++;
    }
    out.push(body(inline(buf.join(" "), { font: SANS, size: sz(10.5), color: INK })));
    ordinal = 0;
  }
  return out;
}

// ── Cover page ───────────────────────────────────────────────────────────
function cover(meta) {
  const line = (text, o = {}) => new Paragraph({ spacing: { after: o.after ?? 120 }, alignment: o.align, children: [new TextRun({ text, font: o.font ?? SANS, size: o.size ?? sz(10.5), color: o.color ?? INK, bold: o.bold, allCaps: o.caps, characterSpacing: o.caps ? 40 : undefined })] });
  return [
    new Paragraph({ spacing: { before: 2600, after: 0 }, children: [new TextRun({ text: "NYAYSEVAK", font: SANS, size: sz(10), color: GOLD, bold: true, characterSpacing: 60 })] }),
    new Paragraph({ spacing: { after: 420 }, children: [new TextRun({ text: "SEO & GROWTH REPORT", font: SANS, size: sz(9), color: MUTED, characterSpacing: 40 })] }),
    new Paragraph({
      spacing: { after: 200 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD_LIGHT, space: 14 } },
      children: [new TextRun({ text: meta.title, font: SERIF, size: sz(30), color: INK, bold: true })],
    }),
    new Paragraph({ spacing: { before: 220, after: meta.sub ? 140 : 700 }, children: [new TextRun({ text: meta.deck, font: SERIF, size: sz(13), color: MUTED, italics: true })] }),
    ...(meta.sub ? [new Paragraph({ spacing: { after: 700 }, children: [new TextRun({ text: meta.sub, font: SANS, size: sz(9.5), color: MUTED })] })] : []),
    line("DATE", { caps: true, size: sz(8), color: GOLD, after: 40 }),
    line(meta.date, { after: 220 }),
    line("PREPARED BY", { caps: true, size: sz(8), color: GOLD, after: 40 }),
    line(meta.by, { after: 220 }),
    line("STATUS", { caps: true, size: sz(8), color: GOLD, after: 40 }),
    line(meta.status, { after: 700 }),
    new Paragraph({
      border: { top: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 10 } },
      spacing: { before: 200 },
      children: [new TextRun({ text: "CONFIDENTIAL", font: SANS, size: sz(8), color: CRITICAL, bold: true, characterSpacing: 40 })],
    }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

function appendixDivider(title, blurb) {
  return [
    new Paragraph({ children: [new PageBreak()] }),
    new Paragraph({ spacing: { before: 200, after: 60 }, children: [new TextRun({ text: "APPENDIX", font: SANS, size: sz(9), color: GOLD, bold: true, characterSpacing: 40 })] }),
    new Paragraph({
      spacing: { after: 140 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD_LIGHT, space: 10 } },
      children: [new TextRun({ text: title, font: SERIF, size: sz(20), color: INK, bold: true })],
    }),
    new Paragraph({ spacing: { before: 160, after: 300 }, children: [new TextRun({ text: blurb, font: SANS, size: sz(10), color: MUTED, italics: true })] }),
  ];
}

// ── Main ─────────────────────────────────────────────────────────────────
const week = process.argv[2];
if (!week) {
  console.error("usage: node scripts/report-docx.mjs <weekNN> [--out file.docx]");
  process.exit(1);
}
const outIdx = process.argv.indexOf("--out");
const dir = path.resolve(week);
const reportPath = path.join(dir, `${week}_seo_report.md`);
if (!fs.existsSync(reportPath)) {
  console.error(`not found: ${reportPath}`);
  process.exit(1);
}

const md = fs.readFileSync(reportPath, "utf8");

// Pull cover metadata out of the report's own front-matter lines. The title
// comes from the directory name rather than the H1, because the H1 repeats the
// brand and document type that the cover already prints above it — "Week 24" is
// the name; "NyaySevak — SEO & Growth Report" is the letterhead.
const allLines = md.split(/\r?\n/);
const dateIdx = allLines.findIndex((l) => /^\*\*Date:\*\*/.test(l.trim()));
const deckIdx = allLines.findIndex((l, n) => n > 0 && /^\*\*.+\*\*\s*$/.test(l.trim()));
const dateM = /\*\*Date:\*\*\s*([0-9-]+)/.exec(md);
const byM = /\*\*Prepared by:\*\*\s*([^·\n]+)/.exec(md);

const meta = {
  title: week.replace(/^week/i, "Week "),
  deck: deckIdx > -1 ? allLines[deckIdx].replace(/\*/g, "").trim() : "",
  sub: deckIdx > -1 ? (allLines[deckIdx + 1] ?? "").trim() : "",
  date: dateM?.[1] ?? new Date().toISOString().slice(0, 10),
  by: (byM?.[1] ?? "SEO Architecture Team").trim(),
  status: "Committed, not deployed",
};

// Body starts after the byline, so the title, deck and metadata printed on the
// cover are not repeated immediately underneath it.
const reportBody = allLines.slice(dateIdx > -1 ? dateIdx + 1 : 1).join("\n");

const children = [...cover(meta), ...convert(reportBody)];

const readAll = (sub) => {
  const p = path.join(dir, sub);
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter((f) => f.endsWith(".md")).sort()
    .map((f) => ({ name: f, md: fs.readFileSync(path.join(p, f), "utf8") }));
};

const changes = readAll("changes");
if (changes.length) {
  children.push(...appendixDivider("Change Log", `One entry per site-wide change shipped this cycle (${changes.length} total). Each records what was wrong, what changed, why it helps, and how it was verified.`));
  changes.forEach((c, n) => {
    if (n) children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(...convert(c.md));
  });
}

const pages = readAll("pages");
if (pages.length) {
  children.push(...appendixDivider("New Page Index", `One entry per page created this cycle (${pages.length} total), with its URL, target keywords, coverage, courts, schema, internal links, and measured depth.`));
  pages.forEach((p) => children.push(...convert(p.md)));
}

const doc = new Document({
  creator: "NyaySevak — SEO Architecture Team",
  title: meta.title,
  description: meta.deck,
  styles: { default: { document: { run: { font: SANS, size: sz(10.5), color: INK } } } },
  sections: [{
    properties: { page: { margin: { top: 1100, bottom: 1100, left: 1100, right: 1100 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 200 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } },
        children: [new TextRun({ text: `NyaySevak · ${meta.title} · Confidential`, font: SANS, size: sz(7.5), color: MUTED })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], font: SANS, size: sz(8), color: MUTED })],
      })] }),
    },
    children,
  }],
});

const out = outIdx > -1 ? process.argv[outIdx + 1]
  : path.join(dir, `NyaySevak-${week.replace(/^week/, "Week-")}-SEO-Report.docx`);

const buf = await Packer.toBuffer(doc);
fs.writeFileSync(out, buf);
console.log(`✓ ${out}`);
console.log(`  ${(buf.length / 1024).toFixed(0)} KB · report + ${changes.length} change docs + ${pages.length} page docs`);
