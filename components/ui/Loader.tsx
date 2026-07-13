"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const intervals: NodeJS.Timeout[] = [];

    const steps = [
      { delay: 0, value: 20 },
      { delay: 300, value: 45 },
      { delay: 600, value: 70 },
      { delay: 900, value: 88 },
      { delay: 1200, value: 100 },
    ];

    steps.forEach(({ delay, value }) => {
      const t = setTimeout(() => setProgress(value), delay);
      intervals.push(t);
    });

    const exitTimer = setTimeout(() => {
      setTimeout(() => setLoading(false), 800);
    }, 1600);

    intervals.push(exitTimer);
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Aurora background */}
          <div className="aurora-bg absolute inset-0" />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo mark */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-purple"
                style={{
                  boxShadow: "0 0 60px rgba(14,165,233,0.4), 0 0 120px rgba(124,58,237,0.2)",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              >
                <span className="text-3xl font-black text-white tracking-tighter">A</span>
              </motion.div>
              {/* Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-brand-blue/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              />
            </div>

            {/* Brand name */}
            <div className="text-center">
              <h1 className="text-2xl font-black tracking-[0.15em] text-white uppercase">
                AARIVON
              </h1>
              <p className="text-xs text-white/40 tracking-[0.3em] mt-1 uppercase">
                Premium Digital Agency
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9, #7c3aed)",
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Counter */}
            <span className="text-sm text-white/30 font-mono tabular-nums">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
