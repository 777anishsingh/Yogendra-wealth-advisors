"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS, PLAN_TYPES } from "@/lib/constants";
import { calculateEMI, estimateLICPremium, formatINR } from "@/lib/calculatorUtils";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CHART_COLORS = ["#C9922A", "#003F7F"];

function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(60);

  const result = useMemo(
    () => calculateEMI(principal, rate, tenure),
    [principal, rate, tenure]
  );

  const chartData = [
    { name: "Principal", value: principal },
    { name: "Interest", value: result.totalInterest },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Inputs */}
      <div className="space-y-8">
        <div>
          <Label className="text-cream/70 mb-3 flex justify-between">
            <span>Principal Amount</span>
            <span className="text-gold font-bold">{formatINR(principal)}</span>
          </Label>
          <Slider
            value={[principal]}
            onValueChange={(v) => setPrincipal(Array.isArray(v) ? v[0] : v)}
            min={10000}
            max={5000000}
            step={10000}
            className="mt-3"
          />
        </div>
        <div>
          <Label className="text-cream/70 mb-3 flex justify-between">
            <span>Annual Interest Rate</span>
            <span className="text-gold font-bold">{rate}%</span>
          </Label>
          <Slider
            value={[rate]}
            onValueChange={(v) => setRate(Array.isArray(v) ? v[0] : v)}
            min={6}
            max={24}
            step={0.5}
            className="mt-3"
          />
        </div>
        <div>
          <Label className="text-cream/70 mb-3 flex justify-between">
            <span>Loan Tenure</span>
            <span className="text-gold font-bold">{tenure} months</span>
          </Label>
          <Slider
            value={[tenure]}
            onValueChange={(v) => setTenure(Array.isArray(v) ? v[0] : v)}
            min={6}
            max={360}
            step={6}
            className="mt-3"
          />
        </div>
      </div>

      {/* Results */}
      <div className="glass-card rounded-2xl p-8">
        <div className="flex justify-center mb-6">
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => formatINR(Number(value))}
                  contentStyle={{
                    background: "#131d35",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "#F8F5EE",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gold" />
            <span className="text-cream/60">Principal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lic-blue" />
            <span className="text-cream/60">Interest</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-cream/60 text-sm">Monthly EMI</span>
            <motion.span
              key={result.emi}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-bold text-xl"
            >
              {formatINR(result.emi)}
            </motion.span>
          </div>
          <div className="h-px bg-white/5" />
          <div className="flex justify-between items-center">
            <span className="text-cream/60 text-sm">Total Interest</span>
            <span className="text-cream font-semibold">
              {formatINR(result.totalInterest)}
            </span>
          </div>
          <div className="h-px bg-white/5" />
          <div className="flex justify-between items-center">
            <span className="text-cream/60 text-sm">Total Payable</span>
            <span className="text-cream font-semibold">
              {formatINR(result.totalPayable)}
            </span>
          </div>
        </div>

        <p className="text-cream/30 text-xs mt-6 text-center">
          Get a personalized insurance + investment plan to pay this loan faster →
        </p>
      </div>
    </div>
  );
}

function LICCalculator() {
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [planType, setPlanType] = useState("endowment");

  const result = useMemo(
    () => estimateLICPremium(age, sumAssured, term, planType),
    [age, sumAssured, term, planType]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Inputs */}
      <div className="space-y-8">
        <div>
          <Label className="text-cream/70 mb-3 flex justify-between">
            <span>Your Age</span>
            <span className="text-gold font-bold">{age} years</span>
          </Label>
          <Slider
            value={[age]}
            onValueChange={(v) => setAge(Array.isArray(v) ? v[0] : v)}
            min={18}
            max={65}
            step={1}
            className="mt-3"
          />
        </div>
        <div>
          <Label className="text-cream/70 mb-3 flex justify-between">
            <span>Sum Assured</span>
            <span className="text-gold font-bold">{formatINR(sumAssured)}</span>
          </Label>
          <Slider
            value={[sumAssured]}
            onValueChange={(v) => setSumAssured(Array.isArray(v) ? v[0] : v)}
            min={100000}
            max={10000000}
            step={100000}
            className="mt-3"
          />
        </div>
        <div>
          <Label className="text-cream/70 mb-3 flex justify-between">
            <span>Policy Term</span>
            <span className="text-gold font-bold">{term} years</span>
          </Label>
          <Slider
            value={[term]}
            onValueChange={(v) => setTerm(Array.isArray(v) ? v[0] : v)}
            min={10}
            max={30}
            step={1}
            className="mt-3"
          />
        </div>
        <div>
          <Label className="text-cream/70 mb-2 block">Plan Type</Label>
          <Select value={planType} onValueChange={(v: unknown) => v && setPlanType(String(v))}>
            <SelectTrigger className="bg-navy-lighter border-white/10 text-cream">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-navy-light border-white/10">
              {PLAN_TYPES.map((pt) => (
                <SelectItem
                  key={pt.value}
                  value={pt.value}
                  className="text-cream hover:bg-white/5"
                >
                  {pt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="glass-card rounded-2xl p-8">
        <div className="space-y-5">
          <div className="text-center mb-6">
            <p className="text-cream/50 text-sm">Estimated Annual Premium</p>
            <motion.p
              key={result.annualPremium}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-gold font-extrabold text-4xl mt-2"
            >
              {formatINR(result.annualPremium)}
            </motion.p>
          </div>

          <div className="h-px bg-white/5" />

          <div className="flex justify-between items-center">
            <span className="text-cream/60 text-sm">
              Total Premium ({term} yrs)
            </span>
            <span className="text-cream font-semibold">
              {formatINR(result.totalPremium)}
            </span>
          </div>

          {result.hasMaturity && (
            <>
              <div className="h-px bg-white/5" />
              <div className="flex justify-between items-center">
                <span className="text-cream/60 text-sm">
                  Est. Maturity Benefit
                </span>
                <span className="text-green-400 font-semibold">
                  {formatINR(result.maturityBenefit)}
                </span>
              </div>
            </>
          )}
        </div>

        <p className="text-cream/30 text-xs mt-8 text-center italic">
          Figures are illustrative & indicative only. Contact Yogendra Ji for
          official LIC quotes.
        </p>

        <a
          href={`tel:${BUSINESS.phone1}`}
          className={cn(buttonVariants(), "w-full mt-6 bg-gold hover:bg-gold-light text-navy font-bold rounded-full gap-2 flex items-center justify-center")}
        >
          <Phone className="w-4 h-4" />
          Get Exact Quote — Call {BUSINESS.phone1}
        </a>
      </div>
    </div>
  );
}

export default function Calculators() {
  return (
    <section id="calculators" className="py-20 sm:py-28 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-playfair)] text-cream">
            Financial Calculators
          </h2>
          <p className="text-xl text-gold/70 font-[var(--font-baloo)] mt-2">
            वित्तीय कैलकुलेटर
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="emi" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-navy-lighter mb-10 rounded-full p-1">
              <TabsTrigger
                value="emi"
                className="rounded-full data-[state=active]:bg-gold data-[state=active]:text-navy font-semibold"
              >
                Loan / EMI Calculator
              </TabsTrigger>
              <TabsTrigger
                value="lic"
                className="rounded-full data-[state=active]:bg-gold data-[state=active]:text-navy font-semibold"
              >
                LIC Premium Estimator
              </TabsTrigger>
            </TabsList>
            <TabsContent value="emi">
              <EMICalculator />
            </TabsContent>
            <TabsContent value="lic">
              <LICCalculator />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
