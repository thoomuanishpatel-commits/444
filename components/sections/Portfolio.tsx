"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react";

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div
        className="relative rounded-3xl overflow-hidden border border-white/[0.06] transition-all duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "rgba(255,255,255,0.02)",
          boxShadow: hovered ? `0 24px 48px rgba(0,0,0,0.5), 0 0 40px ${item.color}15` : "none",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Mock browser frame */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "300px",
            background: `linear-gradient(135deg, ${item.color}15, rgba(0,0,0,0.5))`,
          }}
        >
          {/* Browser chrome */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-3 gap-1.5 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <div className="flex-1 mx-3 h-4 rounded bg-white/[0.03] border border-white/[0.06] flex items-center px-2">
              <span className="text-[9px] text-white/20 font-mono truncate">
                https://aarivon.com/portfolio/{item.id}
              </span>
            </div>
          </div>

          {/* Mockup visual */}
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <div className="w-full h-full flex items-center justify-center">
              {/* Gradient placeholder with project branding */}
              <div
                className="relative w-4/5 h-4/5 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20 0%, rgba(0,0,0,0.3) 100%)`,
                  border: `1px solid ${item.color}20`,
                }}
              >
                {/* Simulated UI */}
                <div className="absolute inset-0 p-4 flex flex-col gap-2">
                  <div
                    className="h-4 w-1/3 rounded"
                    style={{ background: `${item.color}40` }}
                  />
                  <div className="h-2.5 w-2/3 rounded bg-white/10" />
                  <div className="h-2.5 w-1/2 rounded bg-white/05" />
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded aspect-video"
                        style={{ background: `${item.color}${15 + i * 5}` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Project name overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="text-3xl font-black mb-1 tracking-tight"
                      style={{ color: item.color }}
                    >
                      {item.id.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="text-xs text-white/40 font-medium">
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium">
              <ExternalLink size={14} />
              View Case Study
            </div>
          </motion.div>

          {/* Featured badge */}
          {item.featured && (
            <div className="absolute top-12 right-3 z-10 px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/[0.04] border border-white/[0.08] text-white/50 inline-block mb-3">
                {item.category}
              </span>
              <h3 className="font-bold text-white text-2xl group-hover:text-gradient transition-all duration-300 leading-snug tracking-tight">
                {item.title}
              </h3>
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.08] group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-300"
              style={{ background: `${item.color}10` }}
            >
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: item.color }} />
            </div>
          </div>

          <p className="text-sm text-white/40 leading-relaxed mb-6 line-clamp-2">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-white/40 border border-white/[0.06] bg-white/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div
            className="flex gap-4 pt-6 border-t border-white/[0.06]"
          >
            {item.metrics.map((metric, i) => (
              <div key={i} className="flex-1 text-center">
                <p
                  className="text-lg font-black tracking-tight"
                  style={{ color: item.color }}
                >
                  {metric.value}
                </p>
                <p className="text-[10px] text-white/30 mt-1 leading-tight font-medium uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 70%)",
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
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6"
          >
            Award-Winning{" "}
            <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto"
          >
            Real projects, real results. Explore how we&apos;ve transformed businesses
            across industries with premium digital solutions.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-blue text-white shadow-glow-blue"
                  : "glass text-white/50 hover:text-white border border-white/[0.06] hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="glass-strong inline-flex flex-col sm:flex-row items-center gap-6 rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            <div className="text-left flex-1">
              <p className="text-white font-bold text-lg mb-1">Want results like these?</p>
              <p className="text-white/40 text-sm">Let&apos;s build your success story together</p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary text-sm whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
