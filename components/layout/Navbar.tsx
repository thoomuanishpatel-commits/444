"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { services } from "@/data/services";

const navLinks = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#why-aarivon" },
  { label: "Contact", href: "#contact" },
];

const megaMenuServices = services.slice(0, 8);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMegaEnter = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
          scrolled
            ? "py-4 bg-white/20 dark:bg-black/40 backdrop-blur-md border-b border-black/[0.03] dark:border-white/[0.05] shadow-glass-premium"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => scrollTo("#")}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm transition-all duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #7c3aed)",
                boxShadow: "0 0 20px rgba(14,165,233,0.3)",
              }}
            >
              A
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              AARIVON
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <button className="nav-link flex items-center gap-1">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        ref={megaRef}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] glass-strong rounded-2xl p-6 border border-white/10 shadow-premium"
                        onMouseEnter={handleMegaEnter}
                        onMouseLeave={handleMegaLeave}
                      >
                        {/* Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 glass border-l border-t border-white/10" />

                        <div className="mb-4">
                          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                            Our Services
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {megaMenuServices.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => {
                                scrollTo("#services");
                                setMegaOpen(false);
                              }}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-200 group text-left"
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs flex-shrink-0 bg-gradient-to-br ${s.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                              >
                                <span className="text-white text-[10px] font-bold">
                                  {s.title.slice(0, 2).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                  {s.title}
                                </p>
                                <p className="text-xs text-white/40 mt-0.5 line-clamp-1">
                                  {s.shortDesc}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                          <span className="text-xs text-white/30">
                            12 services available
                          </span>
                          <button
                            onClick={() => {
                              scrollTo("#services");
                              setMegaOpen(false);
                            }}
                            className="flex items-center gap-1.5 text-xs text-brand-blue hover:text-brand-blue-light transition-colors font-medium"
                          >
                            View all services
                            <ArrowUpRight size={12} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-sm px-6 py-3 shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={14} className="relative z-10" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center glass text-white/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[899] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between p-6">
              <span className="font-black text-xl tracking-tight text-white">
                AARIVON
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-lg flex items-center justify-center glass text-white/70"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between py-4 border-b border-white/[0.06] text-left group"
                >
                  <span className="text-2xl font-bold text-white/80 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-white/50 transition-colors" />
                </motion.button>
              ))}
            </div>

            <div className="p-6 flex gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary flex-1 justify-center"
              >
                <span>Start Your Project</span>
              </button>
            </div>

            {/* Background aurora */}
            <div className="aurora-bg absolute inset-0 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
