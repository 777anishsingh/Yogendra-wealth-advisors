/**
 * EMI Calculator
 * Formula: EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]
 * P = Principal, r = monthly interest rate, n = number of months
 */
export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): { emi: number; totalInterest: number; totalPayable: number } {
  if (principal <= 0 || annualRate <= 0 || tenureMonths <= 0) {
    return { emi: 0, totalInterest: 0, totalPayable: 0 };
  }

  const monthlyRate = annualRate / 12 / 100;
  const power = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * power) / (power - 1);
  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - principal;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
  };
}

/**
 * LIC Premium Estimator (indicative only)
 * Uses simplified lookup-style logic based on age, sum assured, term and plan type
 * Actual premiums vary — this is for illustration only
 */
export function estimateLICPremium(
  age: number,
  sumAssured: number,
  term: number,
  planType: string
): {
  annualPremium: number;
  totalPremium: number;
  maturityBenefit: number;
  hasMaturity: boolean;
} {
  // Base rate per 1000 sum assured — varies by plan type
  let baseRate: number;
  let hasMaturity = true;

  switch (planType) {
    case "term":
      // Term plans are cheapest — pure protection
      baseRate = 3.5 + age * 0.15;
      hasMaturity = false;
      break;
    case "endowment":
      // Endowment — moderate premium, returns at maturity
      baseRate = 45 + age * 0.5;
      break;
    case "moneyback":
      // Money back — periodic payouts
      baseRate = 50 + age * 0.55;
      break;
    case "ulip":
      // ULIP — market-linked
      baseRate = 40 + age * 0.4;
      break;
    default:
      baseRate = 45 + age * 0.5;
  }

  // Adjust for term length — shorter terms cost more per year
  const termFactor = term <= 15 ? 1.15 : term <= 20 ? 1.0 : 0.92;

  // Calculate annual premium
  const annualPremium = Math.round(
    (sumAssured / 1000) * baseRate * termFactor
  );

  // Total premium paid over the full term
  const totalPremium = annualPremium * term;

  // Maturity benefit (approximate)
  let maturityBenefit = 0;
  if (hasMaturity) {
    const bonusRate = planType === "ulip" ? 0.08 : 0.045; // assumed annual return rate
    maturityBenefit = Math.round(
      sumAssured + annualPremium * ((Math.pow(1 + bonusRate, term) - 1) / bonusRate) * 0.5
    );
  }

  return {
    annualPremium,
    totalPremium,
    maturityBenefit,
    hasMaturity,
  };
}

/**
 * Format number to Indian currency format
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
