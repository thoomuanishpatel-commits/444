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
        {/* Header */}
        <div className="max-w-3xl mb-16" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div ref={ref} className="flex flex-col items-center text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex section-label mb-4"
            >
              FAQ
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="heading-lg text-white mb-6 text-center w-full"
              style={{ textAlign: "center", width: "100%" }}
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="body-lg max-w-2xl mx-auto text-white/50 text-center"
              style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
            >
              Everything you need to know about working with AARIVON. Can&apos;t find your
              answer? We&apos;re always happy to chat.
            </motion.p>
          </div>
        </div>

        {/* Content Layout - Centered Accordion + Card below */}
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-12" style={{ marginLeft: "auto", marginRight: "auto" }}>
          {/* Accordion list */}
          <div className="w-full">
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

          {/* Still have questions card - Centered at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-strong rounded-3xl p-6 lg:p-8 max-w-xl w-full mx-auto text-center"
            style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            <p className="text-base font-bold text-white mb-3 text-center">
              Still have questions?
            </p>
            <p className="text-xs text-white/40 mb-6 leading-relaxed text-center">
              Our team is available Mon-Sat, 9am-6pm IST. We typically respond within 2 hours.
            </p>
            <div className="flex justify-center w-full">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary px-8 h-12 flex items-center justify-center gap-2 rounded-xl text-sm"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <span>Contact Us</span>
                <ArrowUpRight size={16} className="relative z-10" />
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
