"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Leaf, Clock, TrendingDown } from "lucide-react";

const buildingTypes = ["singleFamily", "multiUnit", "commercial", "superstructure"] as const;
const insulationTypes = ["standard", "premium", "eco"] as const;
const finishingLevels = ["shell", "developer", "turnkey"] as const;

// Pricing constants (in PLN)
const BASE_COST_PER_M2 = 2600;
const TRADITIONAL_COST_PER_M2 = 4800;
const CO2_COMBSTRUCT = 150; // kg per m²
const CO2_TRADITIONAL = 675; // kg per m² (average)

// Modifiers
const BUILDING_TYPE_MODIFIERS: Record<string, number> = {
  singleFamily: 0,
  multiUnit: 0.05,
  commercial: 0.08,
  superstructure: 0.10,
};

const INSULATION_MODIFIERS: Record<string, number> = {
  standard: 0,
  premium: 0.08,
  eco: 0.12,
};

const FINISHING_MODIFIERS: Record<string, number> = {
  shell: -0.20,
  developer: 0,
  turnkey: 0.40,
};

const PLN_TO_USD = 0.25;

export default function CostCalculator() {
  const t = useTranslations("calculator");
  const locale = useLocale();

  const currency = locale === "en" ? "USD" : "PLN";
  const currencySymbol = currency === "USD" ? "$" : "zł";
  const conversionRate = currency === "USD" ? PLN_TO_USD : 1;

  const [buildingType, setBuildingType] = useState<string>("singleFamily");
  const [area, setArea] = useState(150);
  const [storeys, setStoreys] = useState(1);
  const [insulation, setInsulation] = useState<string>("standard");
  const [selfBuild, setSelfBuild] = useState(false);
  const [finishing, setFinishing] = useState<string>("developer");

  const calculations = useMemo(() => {
    let costPerM2 = BASE_COST_PER_M2;

    costPerM2 *= (1 + BUILDING_TYPE_MODIFIERS[buildingType]);
    costPerM2 *= (1 + (storeys - 1) * 0.05);
    costPerM2 *= (1 + INSULATION_MODIFIERS[insulation]);
    costPerM2 *= (1 + FINISHING_MODIFIERS[finishing]);

    if (selfBuild) {
      costPerM2 *= 0.85;
    }

    const totalCost = costPerM2 * area;
    const traditionalCost = TRADITIONAL_COST_PER_M2 * area * (1 + FINISHING_MODIFIERS[finishing]);
    const savings = traditionalCost - totalCost;
    const savingsPercent = Math.round((savings / traditionalCost) * 100);

    const buildWeeks = Math.ceil(area / 50) + (storeys - 1);
    const traditionalMonths = Math.ceil(area / 20) + (storeys * 2);

    const co2Saved = (CO2_TRADITIONAL - CO2_COMBSTRUCT) * area;

    return {
      costPerM2: Math.round(costPerM2 * conversionRate),
      totalCost: Math.round(totalCost * conversionRate),
      traditionalCost: Math.round(traditionalCost * conversionRate),
      savings: Math.round(savings * conversionRate),
      savingsPercent,
      buildWeeks,
      traditionalMonths,
      co2Saved: Math.round(co2Saved),
    };
  }, [buildingType, area, storeys, insulation, selfBuild, finishing, conversionRate]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(locale === "en" ? "en-US" : "pl-PL").format(num);
  };

  return (
    <div className="border border-border bg-white">
      {/* Header */}
      <div className="px-8 py-6 border-b border-border">
        <h3 className="text-2xl font-semibold text-foreground tracking-tight">{t("title")}</h3>
        <p className="text-muted mt-1">{t("subtitle")}</p>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Inputs Section */}
        <div className="p-8 space-y-8 border-r border-border">
          {/* Building Type */}
          <div>
            <label className="block text-[13px] font-medium text-muted uppercase tracking-wider mb-4">
              {t("inputs.buildingType.label")}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {buildingTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setBuildingType(type)}
                  className={`px-4 py-3 text-[15px] font-medium transition-all border ${
                    buildingType === type
                      ? "bg-foreground text-white border-foreground"
                      : "bg-white text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {t(`inputs.buildingType.options.${type}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Floor Area */}
          <div>
            <label className="block text-[13px] font-medium text-muted uppercase tracking-wider mb-4">
              {t("inputs.area.label")}
            </label>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-1 bg-border rounded-none appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted text-sm">50 m²</span>
                <div className="border border-border px-5 py-2">
                  <span className="text-2xl font-semibold text-foreground">{area}</span>
                  <span className="text-muted ml-1">m²</span>
                </div>
                <span className="text-muted text-sm">500 m²</span>
              </div>
            </div>
          </div>

          {/* Storeys */}
          <div>
            <label className="block text-[13px] font-medium text-muted uppercase tracking-wider mb-4">
              {t("inputs.storeys.label")}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <button
                  key={s}
                  onClick={() => setStoreys(s)}
                  className={`flex-1 py-3 text-lg font-semibold transition-all border ${
                    storeys === s
                      ? "bg-foreground text-white border-foreground"
                      : "bg-white text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Insulation */}
          <div>
            <label className="block text-[13px] font-medium text-muted uppercase tracking-wider mb-4">
              {t("inputs.insulation.label")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {insulationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setInsulation(type)}
                  className={`px-3 py-3 text-[15px] font-medium transition-all border ${
                    insulation === type
                      ? "bg-foreground text-white border-foreground"
                      : "bg-white text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {t(`inputs.insulation.options.${type}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Self-build Toggle */}
          <div>
            <label className="block text-[13px] font-medium text-muted uppercase tracking-wider mb-4">
              {t("inputs.selfBuild.label")}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelfBuild(true)}
                className={`flex-1 py-3 text-[15px] font-medium transition-all border ${
                  selfBuild
                    ? "bg-foreground text-white border-foreground"
                    : "bg-white text-foreground border-border hover:border-foreground"
                }`}
              >
                {t("inputs.selfBuild.yes")}
              </button>
              <button
                onClick={() => setSelfBuild(false)}
                className={`flex-1 py-3 text-[15px] font-medium transition-all border ${
                  !selfBuild
                    ? "bg-foreground text-white border-foreground"
                    : "bg-white text-foreground border-border hover:border-foreground"
                }`}
              >
                {t("inputs.selfBuild.no")}
              </button>
            </div>
          </div>

          {/* Finishing Level */}
          <div>
            <label className="block text-[13px] font-medium text-muted uppercase tracking-wider mb-4">
              {t("inputs.finishing.label")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {finishingLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setFinishing(level)}
                  className={`px-3 py-3 text-[15px] font-medium transition-all border ${
                    finishing === level
                      ? "bg-foreground text-white border-foreground"
                      : "bg-white text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {t(`inputs.finishing.options.${level}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 bg-secondary">
          <div className="space-y-8">
            {/* Main Estimate */}
            <div className="text-center py-8">
              <p className="text-[13px] font-medium text-muted uppercase tracking-wider mb-3">
                {t("results.estimate")}
              </p>
              <motion.div
                key={calculations.totalCost}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-[clamp(2.5rem,6vw,4rem)] font-semibold text-foreground tracking-tight"
              >
                {currencySymbol}{formatNumber(calculations.totalCost)}
              </motion.div>
              <p className="text-muted mt-2">
                {currencySymbol}{formatNumber(calculations.costPerM2)} / m²
              </p>
            </div>

            {/* Comparison Bar */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">Combstruct</span>
                <span className="text-muted">{t("results.vsTraditional")}</span>
              </div>
              <div className="relative h-3 bg-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${100 - calculations.savingsPercent}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-foreground"
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-semibold">
                  {calculations.savingsPercent}% {t("results.cheaper")}
                </span>
                <span className="text-muted">
                  {t("results.traditional")}: {currencySymbol}{formatNumber(calculations.traditionalCost)}
                </span>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="border-2 border-foreground p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-muted uppercase tracking-wider">{t("results.youSave")}</p>
                  <p className="text-2xl font-semibold text-foreground">
                    {currencySymbol}{formatNumber(calculations.savings)}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border bg-white p-5">
                <div className="flex items-center gap-2 text-muted text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  {t("results.buildTime")}
                </div>
                <p className="text-foreground font-semibold text-lg">
                  {calculations.buildWeeks} {t("results.weeks")}
                </p>
                <p className="text-muted text-sm">
                  vs {calculations.traditionalMonths} {t("results.months")}
                </p>
              </div>
              <div className="border border-border bg-white p-5">
                <div className="flex items-center gap-2 text-muted text-sm mb-2">
                  <Leaf className="w-4 h-4" />
                  {t("results.co2Saved")}
                </div>
                <p className="text-foreground font-semibold text-lg">
                  {formatNumber(calculations.co2Saved)} kg
                </p>
                <p className="text-muted text-sm">CO₂ {t("results.emissions")}</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 w-full py-4 bg-foreground text-white font-semibold hover:bg-dark-lighter transition-colors"
            >
              {t("cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-center text-muted text-sm">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
