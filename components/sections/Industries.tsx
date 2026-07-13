"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { industries } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Industries() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="industries" className="relative overflow-hidden section-padding alt-bg">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <Container>
        {/* Header */}
        <div ref={ref} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex section-label mb-4"
          >
            Industries We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6 text-center"
          >
            Built For Every{" "}
            <span className="text-gradient">Industry</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto text-white/50 mt-6 text-center"
          >
            From startups to enterprises, from hospitals to hotels — we&apos;ve built
            digital solutions for virtually every sector.
          </motion.p>
        </div>

        {/* Spacer */}
        <div className="h-8 lg:h-12 pointer-events-none" />

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              <div
                className="relative rounded-3xl p-4 lg:p-6 flex flex-col items-center text-center gap-4 cursor-pointer glass h-full"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${industry.color}12 0%, transparent 70%)`,
                    border: `1px solid ${industry.color}25`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${industry.color}15`,
                    border: `1px solid ${industry.color}25`,
                  }}
                >
                  {industry.icon}
                </div>

                {/* Title */}
                <p className="relative z-10 text-xs font-bold text-white/60 group-hover:text-white/90 transition-colors leading-tight">
                  {industry.title}
                </p>

                {/* Count badge */}
                <span
                  className="relative z-10 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${industry.color}12`,
                    color: industry.color,
                    border: `1px solid ${industry.color}20`,
                  }}
                >
                  {industry.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-8 lg:h-12 pointer-events-none" />

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[24px] p-8 md:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(124,58,237,0.08) 50%, rgba(6,182,212,0.05) 100%)",
            border: "1px solid rgba(14,165,233,0.15)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mb-4">
              Don&apos;t see your industry?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              We Build For <span className="text-gradient">Any Industry</span>
            </h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Our adaptable team has worked across 25+ industries. Whatever your sector,
              we have the expertise to deliver exceptional results.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-8 py-4 rounded-xl text-sm"
            >
              <span>Let&apos;s Talk About Your Industry</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
