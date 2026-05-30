// Court fees in India are governed by the central Court Fees Act, 1870 and
// every state has its own amendment / schedule. The values below are the
// ad-valorem rates for money / valuation suits as of 2026 — they are
// indicative and should not be relied on for actual filing; final fee is
// computed by the court's e-filing system or the local Nazir.
//
// Structure: every state lists tax slabs with an upper limit (`upTo`),
// the fee on the slab (`fee`), and any per-slab incremental rate
// (`incrementOn`, `incrementPer`, `incrementAmount`). For practical use
// the computation function below applies the standard ad-valorem schedule.

export type FeeSlab = {
  upTo: number; // INR — suit value upper limit for this slab (Infinity for last)
  base: number; // INR — fixed fee at the start of this slab
  rate: number; // % — additional ad-valorem above the previous slab's upTo
};

export type StateSchedule = {
  state: string;
  notes: string;
  slabs: FeeSlab[];
  maxCap?: number; // INR — many states cap court fee at this amount
};

// Schedules below are simplified illustrative averages drawn from publicly
// available Court Fees Acts / state amendments. They cover the four most-
// litigated states + a national fallback. Real-world filing requires
// verification with the local court's current fee table.
export const courtFeeSchedules: Record<string, StateSchedule> = {
  delhi: {
    state: "Delhi",
    notes: "Court Fees (Delhi Amendment) Act schedules. Maximum ad-valorem fee capped per Delhi notification.",
    slabs: [
      { upTo: 5_000, base: 0, rate: 5.0 },
      { upTo: 10_000, base: 250, rate: 5.0 },
      { upTo: 20_000, base: 500, rate: 5.0 },
      { upTo: 50_000, base: 1_000, rate: 5.0 },
      { upTo: 100_000, base: 2_500, rate: 5.0 },
      { upTo: 500_000, base: 5_000, rate: 4.0 },
      { upTo: 1_000_000, base: 21_000, rate: 3.0 },
      { upTo: Infinity, base: 36_000, rate: 1.0 },
    ],
    maxCap: 200_000,
  },
  maharashtra: {
    state: "Maharashtra (incl. Mumbai)",
    notes: "Maharashtra Court Fees Act, 1959 — Schedule I, Article 1.",
    slabs: [
      { upTo: 5_000, base: 0, rate: 6.0 },
      { upTo: 10_000, base: 300, rate: 6.0 },
      { upTo: 50_000, base: 600, rate: 6.0 },
      { upTo: 100_000, base: 3_000, rate: 6.0 },
      { upTo: 500_000, base: 6_000, rate: 5.0 },
      { upTo: 1_000_000, base: 26_000, rate: 4.0 },
      { upTo: Infinity, base: 46_000, rate: 1.0 },
    ],
    maxCap: 300_000,
  },
  karnataka: {
    state: "Karnataka",
    notes: "Karnataka Court Fees and Suits Valuation Act, 1958 — Schedule I.",
    slabs: [
      { upTo: 5_000, base: 0, rate: 7.5 },
      { upTo: 10_000, base: 375, rate: 7.5 },
      { upTo: 50_000, base: 750, rate: 7.5 },
      { upTo: 100_000, base: 3_750, rate: 7.5 },
      { upTo: 500_000, base: 7_500, rate: 6.0 },
      { upTo: 1_000_000, base: 31_500, rate: 5.0 },
      { upTo: Infinity, base: 56_500, rate: 2.0 },
    ],
    maxCap: 250_000,
  },
  "tamil-nadu": {
    state: "Tamil Nadu",
    notes: "Tamil Nadu Court Fees and Suits Valuation Act, 1955.",
    slabs: [
      { upTo: 5_000, base: 0, rate: 7.5 },
      { upTo: 50_000, base: 375, rate: 7.5 },
      { upTo: 100_000, base: 3_750, rate: 7.5 },
      { upTo: 500_000, base: 7_500, rate: 5.0 },
      { upTo: 1_000_000, base: 27_500, rate: 4.0 },
      { upTo: Infinity, base: 47_500, rate: 1.0 },
    ],
    maxCap: 200_000,
  },
  "uttar-pradesh": {
    state: "Uttar Pradesh",
    notes: "U.P. Court Fees (Amendment) Act with state-specific slabs.",
    slabs: [
      { upTo: 5_000, base: 0, rate: 7.5 },
      { upTo: 25_000, base: 375, rate: 7.5 },
      { upTo: 100_000, base: 1_875, rate: 6.0 },
      { upTo: 500_000, base: 6_375, rate: 5.0 },
      { upTo: 1_000_000, base: 26_375, rate: 4.0 },
      { upTo: Infinity, base: 46_375, rate: 1.0 },
    ],
    maxCap: 200_000,
  },
  default: {
    state: "Other states (Central Court Fees Act, 1870)",
    notes: "Default Central Schedule I where state has no specific amendment.",
    slabs: [
      { upTo: 5_000, base: 0, rate: 5.0 },
      { upTo: 50_000, base: 250, rate: 5.0 },
      { upTo: 100_000, base: 2_500, rate: 5.0 },
      { upTo: 500_000, base: 5_000, rate: 4.0 },
      { upTo: 1_000_000, base: 21_000, rate: 3.0 },
      { upTo: Infinity, base: 36_000, rate: 1.0 },
    ],
    maxCap: 150_000,
  },
};

// Compute court fee for a given suit value in a given state.
// Slabs are applied progressively: base fee at the start of the slab plus
// the slab's `rate`% applied to the portion of value above the previous
// slab's upper limit. The result is capped at `maxCap` where applicable.
export function computeCourtFee(suitValueInr: number, stateKey: string): {
  schedule: StateSchedule;
  fee: number;
  capped: boolean;
  breakdown: { slabUpTo: number; base: number; rate: number; portion: number; portionFee: number }[];
} {
  const schedule = courtFeeSchedules[stateKey] ?? courtFeeSchedules.default;
  let remaining = Math.max(0, suitValueInr);
  let previousUpper = 0;
  let fee = 0;
  const breakdown: { slabUpTo: number; base: number; rate: number; portion: number; portionFee: number }[] = [];

  for (const slab of schedule.slabs) {
    if (remaining <= 0) break;
    const slabCap = slab.upTo - previousUpper;
    const portion = Math.min(remaining, slabCap);
    const portionFee = (portion * slab.rate) / 100;
    fee += portionFee;
    breakdown.push({
      slabUpTo: slab.upTo,
      base: slab.base,
      rate: slab.rate,
      portion,
      portionFee,
    });
    remaining -= portion;
    previousUpper = slab.upTo;
  }

  const capped = schedule.maxCap !== undefined && fee > schedule.maxCap;
  if (capped) fee = schedule.maxCap!;

  return { schedule, fee: Math.round(fee), capped, breakdown };
}
