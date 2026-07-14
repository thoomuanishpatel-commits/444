"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SmoothCounter } from "@/components/ui/SmoothCounter";
import { Shield, Zap, Users, Award, TrendingUp, Clock, Star, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every project is crafted with the same obsessive attention to detail that Apple applies to hardware. No shortcuts, no templates.",
    color: "#2563eb",
    stat: { value: 99, suffix: "%", label: "Client Satisfaction" },
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "We engineer for speed. Lighthouse scores above 90, Core Web Vitals in the green, and sub-2s load times are our standard.",
    color: "#06b6d4",
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
    color: "#f97316",
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
  const { ref: statsRef } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-aarivon" className="relative overflow-hidden section-padding alt-bg">
      {/* Background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 w-full" ref={ref} style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}>
          <div className="flex flex-col items-center text-center gap-y-4 md:gap-y-6" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex section-label"
            >
              Why Choose AARIVON
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="heading-lg text-white text-center w-full"
            >
              The{" "}
              <span className="text-gradient">AARIVON Difference</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="body-lg max-w-2xl mx-auto text-white/50 text-center"
            >
              We&apos;re not just another agency. We&apos;re your strategic technology
              partner — obsessed with quality, driven by results, committed to your
              long-term success.
            </motion.p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                className="relative group cursor-pointer"
              >
                <div className="glass rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between items-center text-center group-hover:border-white/25 shadow-premium relative overflow-hidden">
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${reason.color}12 0%, transparent 60%)`,
                    }}
                  />

                  {/* Top content */}
                  <div className="flex flex-col items-center w-full relative z-10">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110"
                      style={{
                        background: `${reason.color}15`,
                        border: `1px solid ${reason.color}25`,
                      }}
                    >
                      <Icon size={22} style={{ color: reason.color }} />
                    </div>

                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{reason.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2 h-10">
                      {reason.description}
                    </p>
                  </div>

                  {/* Flexible Spacer */}
                  <div className="flex-grow min-h-[16px]" />

                  {/* Stat */}
                  <div
                    className="inline-flex items-baseline gap-2 px-4 py-2 rounded-xl mt-auto relative z-10"
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

        {/* Spacing between grid and second block */}
        <div className="h-16 sm:h-20 lg:h-24 pointer-events-none" />

        {/* Second Content Block - Perfectly aligned to center vertical grid with clean spacing */}
        <div className="flex flex-col items-center text-center max-w-4xl w-full mx-auto gap-y-12 md:gap-y-16 mt-16 md:mt-24">
          {/* Header Text Group */}
          <div className="flex flex-col items-center text-center gap-y-4 max-w-3xl w-full">
            {/* Stars */}
            <div className="flex items-center justify-center gap-2">
              <Star size={16} className="text-yellow-400" fill="currentColor" />
              <Star size={16} className="text-yellow-400" fill="currentColor" />
              <Star size={16} className="text-yellow-400" fill="currentColor" />
              <Star size={16} className="text-yellow-400" fill="currentColor" />
              <Star size={16} className="text-yellow-400" fill="currentColor" />
              <span className="text-sm text-white/40 ml-1 font-medium">5.0 from 500+ reviews</span>
            </div>

            {/* Heading */}
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight text-center" style={{ textAlign: "center", width: "100%" }}>
              The Agency That Thinks Like a <span className="text-gradient">Tech Company</span>
            </h3>

            {/* Paragraph */}
            <p className="text-white/50 leading-relaxed text-sm max-w-xl mx-auto text-center mt-2" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              Most agencies deliver pretty pictures. We deliver strategic digital
              infrastructure. Every decision we make is backed by data, aligned
              with your business goals, and built to scale.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full justify-items-center" style={{ marginLeft: "auto", marginRight: "auto" }}>
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "6+", label: "Years" },
              { value: "30+", label: "Countries" },
              { value: "99%", label: "Satisfaction" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-[20px] p-6 text-center flex flex-col items-center border border-white/12 w-full transition-all duration-300 hover:border-white/25 hover:transform hover:-translate-y-1 hover:shadow-premium">
                <p className="text-2xl lg:text-3xl font-black text-gradient tracking-tight">{s.value}</p>
                <p className="text-xs text-white/40 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Comparison Card (Reduced visual weight, balanced checkmarks grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl border border-white/10 rounded-[24px] overflow-hidden"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="glass-strong p-8 md:p-10 text-center flex flex-col items-center w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-2xl mx-auto" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #7c3aed)" }}
                >
                  A
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-bold text-white text-base leading-none">AARIVON Advantage</p>
                  <p className="text-xs text-white/40 mt-1.5">Why top companies choose our process</p>
                </div>
                <div className="sm:ml-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Recommended
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left w-full max-w-2xl mx-auto" style={{ marginLeft: "auto", marginRight: "auto" }}>
                {comparisonPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-white/70 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Button CTA */}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary self-center h-14 px-8 text-base rounded-xl flex items-center justify-center transition-all duration-300"
          >
            <span>Work With Us</span>
          </button>
          <div className="h-10 sm:h-12 lg:h-16 pointer-events-none" />
        </div>
      </Container>
    </section>
  );
}
