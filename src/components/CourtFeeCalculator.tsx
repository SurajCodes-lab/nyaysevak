"use client";

import { useMemo, useState } from "react";
import { Calculator, AlertCircle } from "lucide-react";
import { computeCourtFee, courtFeeSchedules } from "@/data/court-fee-schedule";

const states = Object.keys(courtFeeSchedules);

export default function CourtFeeCalculator() {
  const [stateKey, setStateKey] = useState("delhi");
  const [suitValueInput, setSuitValueInput] = useState("100000");

  const suitValue = useMemo(() => {
    const n = Number(suitValueInput.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [suitValueInput]);

  const result = useMemo(() => {
    if (suitValue <= 0) return null;
    return computeCourtFee(suitValue, stateKey);
  }, [suitValue, stateKey]);

  return (
    <div className="rounded-2xl border border-gold/20 bg-dark p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl icon-gold">
          <Calculator className="h-5 w-5 text-black" strokeWidth={1.5} />
        </span>
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
          Court Fee Calculator (India)
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="state" className="block text-xs uppercase tracking-wider text-gold/70 font-semibold mb-2">
            State / Jurisdiction
          </label>
          <select
            id="state"
            value={stateKey}
            onChange={(e) => setStateKey(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white focus:border-gold/40 focus:outline-none"
          >
            {states.map((k) => (
              <option key={k} value={k} className="bg-dark-deep text-white">
                {courtFeeSchedules[k].state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="suit-value" className="block text-xs uppercase tracking-wider text-gold/70 font-semibold mb-2">
            Suit Value (₹)
          </label>
          <input
            id="suit-value"
            type="text"
            inputMode="numeric"
            value={suitValueInput}
            onChange={(e) => setSuitValueInput(e.target.value)}
            placeholder="e.g. 1,00,000"
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold/40 focus:outline-none"
          />
        </div>
      </div>

      {result && (
        <div className="mt-8 rounded-xl border border-gold/15 bg-gold/[0.04] p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-widest text-gold/60 font-semibold mb-2">
            Estimated Court Fee
          </p>
          <p className="text-3xl sm:text-4xl font-heading font-bold stat-gradient">
            ₹{result.fee.toLocaleString("en-IN")}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
            On a suit value of <span className="text-gold/80 font-semibold">₹{suitValue.toLocaleString("en-IN")}</span> in {result.schedule.state}. {result.capped && (
              <span className="text-gold">Fee capped at the maximum permitted under the local schedule.</span>
            )}
          </p>
          <p className="mt-3 text-[11px] text-gray-500 leading-relaxed">
            {result.schedule.notes}
          </p>
        </div>
      )}

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4">
        <AlertCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" strokeWidth={1.5} />
        <p className="text-[11px] sm:text-xs text-amber-200/80 leading-relaxed">
          <span className="font-semibold text-amber-300">Indicative only.</span> Actual court fee is computed by the court's e-filing system or local Nazir as per the latest state Court Fees Act and notifications. Use this calculator for planning and not for final filing.
        </p>
      </div>
    </div>
  );
}
