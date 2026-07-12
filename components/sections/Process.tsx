"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start with a deep-dive into your business, goals, target audience, and competitive landscape. No assumptions — just clarity.",
    icon: "🔍",
    color: "#0ea5e9",
    duration: "3-5 Days",
    deliverables: ["Business Analysis", "Competitive Audit", "Strategy Document", "Project Scope"],
  },
  {
    step: "02",
    title: "Design & Wireframing",
    description:
      "Our designers craft stunning visual concepts and interactive prototypes, refined through your feedback until perfect.",
    icon: "🎨",
    color: "#7c3aed",
    duration: "5-10 Days",
    deliverables: ["Wireframes", "Visual Design", "Prototype", "Design System"],
  },
  {
    step: "03",
    title: "Development",
    description:
      "Our engineers bring the designs to life with clean, scalable code. Daily updates keep you in the loop throughout.",
    icon: "⚡",
    color: "#06b6d4",
    duration: "2-8 Weeks",
    deliverables: ["Frontend", "Backend", "Database", "Integrations"],
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Rigorous testing across browsers, devices, and edge cases. We test everything so bugs don't reach your users.",
    icon: "🧪",
    color: "#10b981",
    duration: "3-5 Days",
    deliverables: ["Cross-browser Tests", "Performance Audit", "Security Scan", "User Testing"],
  },
  {
    step: "05",
    title: "Launch",
    description:
      "We handle the entire deployment process — from DNS configuration to CDN setup. Your launch is seamless.",
    icon: "🚀",
    color: "#f59e0b",
    duration: "1-2 Days",
    deliverables: ["Deployment", "SEO Setup", "Analytics", "Training"],
  },
  {
    step: "06",
    title: "Growth & Support",
    description:
      "Post-launch, we monitor performance, fix issues, and continuously optimize. Your success is our ongoing mission.",
    icon: "📈",
    color: "#ec4899",
    duration: "Ongoing",
    deliverables: ["Monitoring", "Updates", "Optimizations", "Support"],
  },
];

export function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="process" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(14,165,233,0.05) 0%, transparent 70%)",
        }}
      />

      <Container>
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex section-label mb-4"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6"
          >
            Our{" "}
            <span className="text-gradient">Development Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto text-white/50"
          >
            A proven 6-step process refined over 6 years and 800+ projects. Transparent,
            predictable, and built for results.
          </motion.p>
        </div>

        {/* Spacer */}
        <div className="h-6 sm:h-8 lg:h-10 pointer-events-none" />

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Connecting line (base track) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.06] hidden md:block transform -translate-x-1/2" />

          {/* Animated scroll progress line */}
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0ea5e9] via-[#7c3aed] to-[#ec4899] hidden md:block transform -translate-x-1/2"
          />

          <div className="flex flex-col gap-6 lg:gap-8">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  {/* Step number dot */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 rounded-xl items-center justify-center font-black text-sm text-white"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`,
                      border: `1px solid ${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}30`,
                    }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Left content */}
                  <div className={`${isEven ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                    <div className="glass rounded-[24px] p-8 md:p-10 border border-white/[0.06] hover:border-white/12 hover:transform hover:-translate-y-1 transition-all duration-300 group relative shadow-premium">
                      {/* Glow */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 30% 30%, ${step.color}08 0%, transparent 60%)`,
                        }}
                      />

                      <div className={`flex items-start gap-5 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[12deg]"
                          style={{
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}25`,
                          }}
                        >
                          {step.icon}
                        </div>
                        <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-xs font-bold text-white/20">{step.step}</span>
                            <span
                              className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                              style={{
                                background: `${step.color}15`,
                                color: step.color,
                                border: `1px solid ${step.color}25`,
                              }}
                            >
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-xl mb-3">{step.title}</h3>
                          <p className="text-sm text-white/45 leading-relaxed mb-5">
                            {step.description}
                          </p>
                          <div className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : ""}`}>
                            {step.deliverables.map((d) => (
                              <span
                                key={d}
                                className="text-[10px] font-semibold px-2.5 py-1 rounded text-white/30 bg-white/[0.03] border border-white/[0.06]"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  {isEven ? <div className="hidden md:block" /> : <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <p className="text-white/40 text-sm mb-4 font-medium">
            Ready to start? Your project kicks off within 48 hours.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-sm"
          >
            <span>Start Your Project Today</span>
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
