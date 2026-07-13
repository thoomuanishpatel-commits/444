"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faqs } from "@/data/faq";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function FAQ() {
  const [open, setOpen] = useState<string | null>("q1");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <section id="faq" className="relative overflow-hidden section-padding alt-bg">
      {/* Background */}
      <div className="absolute inset-0 grid-dots opacity-15 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left panel */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 flex flex-col items-center lg:items-start text-center lg:text-left" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex section-label mb-4 mx-auto lg:mx-0"
            >
              FAQ
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="heading-md text-white mb-6 text-center lg:text-left"
            >
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/45 text-sm leading-relaxed mb-8 text-center lg:text-left mt-6"
            >
              Everything you need to know about working with AARIVON. Can&apos;t find your
              answer? We&apos;re always happy to chat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-strong rounded-2xl sm:rounded-3xl p-6 lg:p-8 border border-white/10"
            >
              <p className="text-base font-bold text-white mb-3">
                Still have questions?
              </p>
              <p className="text-xs text-white/40 mb-6 leading-relaxed">
                Our team is available Mon-Sat, 9am-6pm IST. We typically respond within 2 hours.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary w-full justify-center text-sm"
              >
                <span>Contact Us</span>
                <ArrowUpRight size={16} className="relative z-10" />
              </button>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-white/[0.05]">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="faq-item"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggle(faq.id)}
                    className="faq-trigger group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 focus-visible:bg-white/[0.02] px-3 rounded-lg transition-all duration-200"
                    aria-expanded={open === faq.id}
                    aria-controls={`faq-panel-${faq.id}`}
                  >
                    <span className={`flex-1 pr-4 text-left transition-colors duration-200 ${open === faq.id ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        open === faq.id
                          ? "bg-brand-blue/15 border border-brand-blue/25 rotate-0"
                          : "bg-white/[0.03] border border-white/[0.08] rotate-0"
                      }`}
                    >
                      {open === faq.id ? (
                        <Minus size={14} className="text-brand-blue" />
                      ) : (
                        <Plus size={14} className="text-white/40" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === faq.id && (
                      <motion.div
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="faq-content text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
