"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative overflow-hidden section-padding">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
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
            Client Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6 text-center"
          >
            What Our Clients{" "}
            <span className="text-gradient">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto text-white/50 mt-6 text-center"
          >
            Don&apos;t take our word for it. Here&apos;s what our clients say after working
            with AARIVON.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60) {
                  next();
                } else if (info.offset.x > 60) {
                  prev();
                }
              }}
              className="glass-strong rounded-3xl p-8 border border-white/10 relative overflow-hidden cursor-grab active:cursor-grabbing select-none text-center flex flex-col items-center"
              style={{
                boxShadow: "0 32px 64px rgba(0,0,0,0.4), 0 0 60px rgba(124,58,237,0.06)",
              }}
            >
              {/* Background decoration */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
                style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
              />

              {/* Quote icon */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-purple/10 border border-brand-purple/20 mb-6 mx-auto">
                <Quote size={20} className="text-brand-purple" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Quote text with animation */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 relative z-10 text-center"
                >
                  &ldquo;{current.text}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              {/* Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <div className="flex flex-col items-center gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-black text-lg">
                      {current.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-center">{current.name}</p>
                      <p className="text-sm text-white/40 text-center">
                        {current.role} · {current.company}
                      </p>
                    </div>
                  </div>

                  {/* Result tag */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-400">
                      {current.result}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-brand-blue"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="h-8 lg:h-12 pointer-events-none" />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`testimonial-card text-center flex flex-col items-center p-6 md:p-8 transition-all duration-300 ${
                i === active
                  ? "border-brand-blue/25 bg-brand-blue/[0.04]"
                  : "hover:border-white/10"
              }`}
            >
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3 font-medium">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-2 mt-auto">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70 text-center">{t.name}</p>
                  <p className="text-[10px] text-white/30 text-center">{t.company}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3.5 rounded-2xl border border-white/[0.08]">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <span className="text-white font-bold">5.0</span>
            <span className="text-white/30 text-sm">·</span>
            <span className="text-white/40 text-sm font-semibold">500+ verified reviews</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
