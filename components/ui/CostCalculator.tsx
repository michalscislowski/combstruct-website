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

const PLN_TO_USD = 0.25; // approximate conversion

export default function CostCalculator() {
  const t = useTranslations("calculator");
  const locale = useLocale();

  // Use USD for English, PLN for Polish/German
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

    // Apply modifiers
    costPerM2 *= (1 + BUILDING_TYPE_MODIFIERS[buildingType]);
    costPerM2 *= (1 + (storeys - 1) * 0.05); // 5% per additional storey
    costPerM2 *= (1 + INSULATION_MODIFIERS[insulation]);
    costPerM2 *= (1 + FINISHING_MODIFIERS[finishing]);

    if (selfBuild) {
      costPerM2 *= 0.85; // 15% savings for self-build
    }

    const totalCost = costPerM2 * area;
    const traditionalCost = TRADITIONAL_COST_PER_M2 * area * (1 + FINISHING_MODIFIERS[finishing]);
    const savings = traditionalCost - totalCost;
    const savingsPercent = Math.round((savings / traditionalCost) * 100);

    // Build time (weeks)
    const buildWeeks = Math.ceil(area / 50) + (storeys - 1);
    const traditionalMonths = Math.ceil(area / 20) + (storeys * 2);

    // CO2 savings
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
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-8 py-6 border-b border-white/10">
        <h3 className="text-2xl font-bold text-white">{t("title")}</h3>
        <p className="text-slate-400 mt-1">{t("subtitle")}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Inputs Section */}
        <div className="p-8 space-y-6 border-r border-white/10">
          {/* Building Type */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              {t("inputs.buildingType.label")}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {buildingTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setBuildingType(type)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    buildingType === type
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {t(`inputs.buildingType.options.${type}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Floor Area */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              {t("inputs.area.label")}
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="50"
                max="500"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500
                  [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-emerald-500/50
                  [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-110"
              />
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">50 m²</span>
                <div className="bg-white/10 px-4 py-2 rounded-xl">
                  <span className="text-2xl font-bold text-white">{area}</span>
                  <span className="text-slate-400 ml-1">m²</span>
                </div>
                <span className="text-slate-500 text-sm">500 m²</span>
              </div>
            </div>
          </div>

          {/* Storeys */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              {t("inputs.storeys.label")}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <button
                  key={s}
                  onClick={() => setStoreys(s)}
                  className={`flex-1 py-3 rounded-xl text-lg font-bold transition-all ${
                    storeys === s
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Insulation */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              {t("inputs.insulation.label")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {insulationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setInsulation(type)}
                  className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                    insulation === type
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {t(`inputs.insulation.options.${type}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Self-build Toggle */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              {t("inputs.selfBuild.label")}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelfBuild(true)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                  selfBuild
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {t("inputs.selfBuild.yes")}
              </button>
              <button
                onClick={() => setSelfBuild(false)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                  !selfBuild
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {t("inputs.selfBuild.no")}
              </button>
            </div>
          </div>

          {/* Finishing Level */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              {t("inputs.finishing.label")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {finishingLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setFinishing(level)}
                  className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                    finishing === level
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {t(`inputs.finishing.options.${level}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 bg-gradient-to-br from-emerald-900/20 to-transparent">
          <div className="space-y-6">
            {/* Main Estimate */}
            <div className="text-center py-6">
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                {t("results.estimate")}
              </p>
              <motion.div
                key={calculations.totalCost}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl lg:text-6xl font-bold text-white"
              >
                {currencySymbol}{formatNumber(calculations.totalCost)}
              </motion.div>
              <p className="text-slate-400 mt-2">
                {currencySymbol}{formatNumber(calculations.costPerM2)} / m²
              </p>
            </div>

            {/* Comparison Bar */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-400 font-medium">Combstruct</span>
                <span className="text-slate-400">{t("results.vsTraditional")}</span>
              </div>
              <div className="relative h-8 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${100 - calculations.savingsPercent}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {calculations.savingsPercent}% {t("results.cheaper")}
                  </span>
                </div>
              </div>
              <p className="text-right text-slate-500 text-sm">
                {t("results.traditional")}: {currencySymbol}{formatNumber(calculations.traditionalCost)}
              </p>
            </div>

            {/* Savings Highlight */}
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-emerald-400 text-sm font-medium">{t("results.youSave")}</p>
                  <p className="text-2xl font-bold text-white">
                    {currencySymbol}{formatNumber(calculations.savings)}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  {t("results.buildTime")}
                </div>
                <p className="text-white font-semibold">
                  {calculations.buildWeeks} {t("results.weeks")}
                </p>
                <p className="text-slate-500 text-xs">
                  vs {calculations.traditionalMonths} {t("results.months")}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                  <Leaf className="w-4 h-4" />
                  {t("results.co2Saved")}
                </div>
                <p className="text-white font-semibold">
                  {formatNumber(calculations.co2Saved)} kg
                </p>
                <p className="text-slate-500 text-xs">CO₂ {t("results.emissions")}</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              {t("cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-center text-slate-500 text-xs">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
