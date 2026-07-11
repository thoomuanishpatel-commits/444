"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="aurora-bg absolute inset-0" />
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative z-10 text-center px-6">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12rem] font-black leading-none text-gradient-animated opacity-10 select-none mb-4"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-16 relative z-10"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #7c3aed)" }}
            >
              A
            </div>
            <span className="font-black text-xl text-white">AARIVON</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            This Page Got Lost in{" "}
            <span className="text-gradient">Cyberspace</span>
          </h1>
          <p className="text-white/45 text-base mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            But don&apos;t worry — let&apos;s get you back to where you need to be.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary px-6 py-3.5 text-sm">
              <Home size={16} className="relative z-10" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary px-6 py-3.5 text-sm flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
