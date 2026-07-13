"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components/layout/Container";

const logos = [
  { name: "Google", abbr: "G", color: "#4285F4" },
  { name: "Microsoft", abbr: "M", color: "#00A4EF" },
  { name: "Amazon", abbr: "A", color: "#FF9900" },
  { name: "Stripe", abbr: "S", color: "#635BFF" },
  { name: "Vercel", abbr: "▲", color: "#FFFFFF" },
  { name: "OpenAI", abbr: "O", color: "#10A37F" },
  { name: "Shopify", abbr: "S", color: "#96BF48" },
  { name: "Figma", abbr: "F", color: "#F24E1E" },
  { name: "Notion", abbr: "N", color: "#FFFFFF" },
  { name: "Linear", abbr: "L", color: "#5E6AD2" },
  { name: "Framer", abbr: "Fr", color: "#0099FF" },
  { name: "Supabase", abbr: "Sb", color: "#3ECF8E" },
];

function LogoItem({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass border border-white/[0.06] flex-shrink-0 group hover:border-white/12 hover:bg-white/[0.04] transition-all duration-300">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${color}18`,
          border: `1px solid ${color}30`,
          color: color,
        }}
      >
        {abbr}
      </div>
      <span className="text-sm font-medium text-white/35 group-hover:text-white/60 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="trusted-by" className="relative overflow-hidden py-14 border-y border-white/[0.05] bg-white/[0.01]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.02] to-transparent pointer-events-none" />

      <Container className="mb-8">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-xs text-white/35 uppercase tracking-[0.25em] font-semibold"
            style={{ textAlign: "center" }}
          >
            Trusted by Industry Leaders Worldwide
          </motion.p>
        </div>
      </Container>

      <div className="relative flex overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #030308 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #030308 0%, transparent 100%)" }}
        />

        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
