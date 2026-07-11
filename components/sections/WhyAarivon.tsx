"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SmoothCounter } from "@/components/ui/SmoothCounter";
import { Shield, Zap, Users, Award, TrendingUp, Clock, Star, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every project is crafted with the same obsessive attention to detail that Apple applies to hardware. No shortcuts, no templates.",
    color: "#0ea5e9",
    stat: { value: 99, suffix: "%", label: "Client Satisfaction" },
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "We engineer for speed. Lighthouse scores above 90, Core Web Vitals in the green, and sub-2s load times are our standard.",
    color: "#f59e0b",
    stat: { value: 95, suffix: "+", label: "Avg. Lighthouse Score" },
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Security-first development with OWASP compliance, SSL, DDoS protection, and regular security audits built into every project.",
    color: "#10b981",
    stat: { value: 0, suffix: "", label: "Security Breaches" },
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A senior team of designers, engineers, and strategists work exclusively on your project — no juniors, no outsourcing.",
    color: "#7c3aed",
    stat: { value: 50, suffix: "+", label: "Senior Experts" },
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your timelines. 97% of projects are delivered on schedule. Transparent milestones, no surprises.",
    color: "#06b6d4",
    stat: { value: 97, suffix: "%", label: "On-Time Delivery" },
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    description:
      "We measure success by your growth. Every design decision, every line of code is optimized to maximize your business results.",
    color: "#ec4899",
    stat: { value: 10, suffix: "x", label: "Average ROI" },
  },
];

const comparisonPoints = [
  "Custom-crafted design (no templates)",
  "Senior team only (no juniors/outsourcing)",
  "Strategic consulting included",
  "Post-launch support & maintenance",
  "SEO & performance optimization built-in",
  "Transparent pricing & milestones",
  "IP ownership transfers to client",
  "NDA & confidentiality guaranteed",
];

export function WhyAarivon() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-aarivon" className="section-padding relative overflow-hidden bg-zinc-950/30 border-y border-white/[0.02]">
      {/* Background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex section-label mb-4"
          >
            Why Choose AARIVON
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6"
          >
            The{" "}
            <span className="text-gradient">AARIVON Difference</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto"
          >
            We&apos;re not just another agency. We&apos;re your strategic technology
            partner — obsessed with quality, driven by results, committed to your
            long-term success.
          </motion.p>
        </div>

        {/* Spacer */}
        <div className="h-8 sm:h-10 lg:h-12 pointer-events-none" />

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full border border-white/[0.06] hover:border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1">
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 20% 0%, ${reason.color}12 0%, transparent 60%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `${reason.color}15`,
                      border: `1px solid ${reason.color}25`,
                    }}
                  >
                    <Icon size={22} style={{ color: reason.color }} />
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3">{reason.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Stat */}
                  <div
                    className="inline-flex items-baseline gap-2 px-4 py-2 rounded-xl"
                    style={{
                      background: `${reason.color}10`,
                      border: `1px solid ${reason.color}20`,
                    }}
                    ref={statsRef}
                  >
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{ color: reason.color }}
                    >
                      <SmoothCounter value={reason.stat.value} suffix={reason.stat.suffix} />
                    </span>
                    <span className="text-xs text-white/40 font-medium">{reason.stat.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* AARIVON column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="gradient-border lg:col-span-6"
          >
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-base"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #7c3aed)" }}
                >
                  A
                </div>
                <div>
                  <p className="font-bold text-white text-base">AARIVON</p>
                  <p className="text-xs text-white/40 tracking-wider">Premium Digital Agency</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Recommended
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {comparisonPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3.5"
                  >
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-white/70 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:col-span-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <span className="text-sm text-white/40 ml-1 font-medium">5.0 from 500+ reviews</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                The Agency That Thinks Like a{" "}
                <span className="text-gradient">Tech Company</span>
              </h3>
              <p className="text-white/50 leading-relaxed text-sm max-w-xl">
                Most agencies deliver pretty pictures. We deliver strategic digital
                infrastructure. Every decision we make is backed by data, aligned
                with your business goals, and built to scale.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "6+", label: "Years" },
                { value: "30+", label: "Countries" },
                { value: "99%", label: "Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-3xl p-8 text-center border border-white/[0.06] transition-all duration-300 hover:border-white/12 hover:transform hover:-translate-y-1 hover:shadow-premium">
                  <p className="text-2xl lg:text-3xl font-black text-gradient tracking-tight">{s.value}</p>
                  <p className="text-xs text-white/40 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary self-start text-sm"
            >
              <span>Work With Us</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
