"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { websitePricing, appPricing } from "@/data/pricing";
import { Check, ArrowUpRight, Zap, Star } from "lucide-react";

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof websitePricing)[0];
  index: number;
}) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div
        className={`pricing-card relative h-full flex flex-col ${plan.popular ? "featured" : ""}`}
      >
        {/* Popular badge */}
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow-blue">
              <Star size={10} fill="currentColor" />
              Most Popular
            </div>
          </div>
        )}

        {/* Shimmer effect on featured */}
        {plan.popular && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="shimmer-effect absolute inset-0" />
          </div>
        )}

        {/* Header */}
        <div className="mb-5">
          <h3 className="font-bold text-white text-lg mb-1">{plan.name}</h3>
          <p className="text-xs text-white/40 leading-relaxed">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-black ${plan.popular ? "text-gradient" : "text-white"}`}>
              {plan.price}
            </span>
            {plan.price !== "Custom" && (
              <span className="text-xs text-white/30">{plan.period}</span>
            )}
          </div>
          {plan.originalPrice && (
            <p className="text-xs text-white/25 line-through mt-0.5">
              {plan.originalPrice}
            </p>
          )}
        </div>

        {/* Info pills */}
        <div className="flex gap-2 flex-wrap mb-5">
          <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40">
            ⏱ {plan.timeline}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40">
            🛠 {plan.support} Support
          </span>
        </div>

        {/* Features */}
        <div className="flex-1 space-y-2.5 mb-6">
          {plan.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  plan.popular
                    ? "bg-brand-blue/20 border border-brand-blue/30"
                    : "bg-white/[0.04] border border-white/[0.08]"
                }`}
              >
                <Check
                  size={9}
                  className={plan.popular ? "text-brand-blue" : "text-white/40"}
                />
              </div>
              <span className="text-xs text-white/55 leading-relaxed">{f}</span>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="mb-5 py-3 px-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-[10px] text-white/30">
            <span className="text-white/50 font-medium">Maintenance:</span>{" "}
            {plan.maintenance}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className={`w-full text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
            plan.popular ? "btn-primary" : "btn-secondary"
          }`}
        >
          <span>{plan.cta}</span>
          <ArrowUpRight size={14} className={plan.popular ? "relative z-10" : ""} />
        </button>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"website" | "app">("website");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const plans = activeTab === "website" ? websitePricing : appPricing;

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(14,165,233,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex section-label mb-4"
          >
            Transparent Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6"
          >
            Premium Quality,{" "}
            <span className="text-gradient">Fair Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto"
          >
            No hidden fees. No surprises. Just honest pricing for world-class work. All plans
            include free consultation and project kickoff within 48 hours.
          </motion.p>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex mt-10 glass rounded-xl p-1 border border-white/[0.08]"
          >
            {(["website", "app"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow-blue"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {tab === "website" ? "🌐 Website Pricing" : "📱 App Pricing"}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Spacer to guarantee premium spacing */}
        <div className="h-10 lg:h-16 pointer-events-none" />

        {/* Pricing Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "website"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
          }`}
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Custom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="glass-strong inline-flex flex-col sm:flex-row items-center gap-6 rounded-3xl p-8 border border-white/[0.08] max-w-3xl mx-auto">
            <div className="text-3xl">💬</div>
            <div className="flex-1 text-left">
              <p className="font-bold text-white text-base">Need a custom solution?</p>
              <p className="text-sm text-white/40 leading-relaxed mt-1">
                Enterprise projects, SaaS platforms, or complex builds — we&apos;ll craft a
                bespoke proposal just for you.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary text-sm whitespace-nowrap"
            >
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
