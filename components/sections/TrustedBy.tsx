"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logos = [
  { name: "Google", abbr: "G" },
  { name: "Microsoft", abbr: "Ms" },
  { name: "Amazon", abbr: "Amz" },
  { name: "Stripe", abbr: "Str" },
  { name: "Vercel", abbr: "▲" },
  { name: "OpenAI", abbr: "Oai" },
  { name: "Shopify", abbr: "Shp" },
  { name: "Figma", abbr: "Fig" },
  { name: "Notion", abbr: "Ntn" },
  { name: "Linear", abbr: "Lin" },
  { name: "Framer", abbr: "Frm" },
  { name: "Supabase", abbr: "Sbs" },
];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-white/[0.05] flex-shrink-0 group hover:border-white/10 transition-all duration-300">
      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-white/40 group-hover:text-white/60 transition-colors">
        {abbr}
      </div>
      <span className="text-sm font-medium text-white/30 group-hover:text-white/50 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="trusted-by" className="py-16 relative overflow-hidden border-y border-white/[0.05]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-white/[0.01] to-black pointer-events-none" />

      <div className="container-custom mb-8" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-white/30 uppercase tracking-[0.3em] font-semibold"
        >
          Trusted by Industry Leaders Worldwide
        </motion.p>
      </div>

      {/* Infinite marquee row 1 */}
      <div className="relative flex overflow-hidden gap-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #000000 0%, transparent 100%)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #000000 0%, transparent 100%)" }} />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </motion.div>
      </div>

      {/* Infinite marquee row 2 (reverse) */}
      <div className="relative flex overflow-hidden gap-4 mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #000000 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #000000 0%, transparent 100%)" }} />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...logos.slice(4), ...logos, ...logos.slice(0, 4)].map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
