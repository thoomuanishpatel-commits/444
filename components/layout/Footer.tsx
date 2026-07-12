"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, ArrowUp } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

const footerLinks = {
  Services: [
    "Website Development",
    "Mobile Apps",
    "UI/UX Design",
    "SaaS Development",
    "AI Solutions",
    "Business Automation",
    "E-Commerce",
    "Branding",
  ],
  Company: [
    "About AARIVON",
    "Portfolio",
    "Case Studies",
    "Blog",
    "Careers",
    "Press Kit",
  ],
  Industries: [
    "Healthcare",
    "Restaurants",
    "Education",
    "Finance",
    "Real Estate",
    "Hospitality",
    "Startups",
    "Enterprise",
  ],
  Resources: [
    "Free Consultation",
    "Project Calculator",
    "Tech Stack",
    "Pricing Guide",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
  ],
};

const socials = [
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubscribing(false);
    setEmail("");
    toast.success("You're subscribed! Welcome to the AARIVON community.");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(14,165,233,0.5), rgba(124,58,237,0.5), transparent)",
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(14,165,233,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs text-white/30 uppercase tracking-[0.3em] font-semibold mb-3">
                Ready to get started?
              </p>
              <h2 className="heading-md text-white mb-8">
                Your Next Digital Project{" "}
                <span className="text-gradient">Starts Here</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary text-sm"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight size={18} className="relative z-10" />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Spacer to guarantee premium spacing between CTA and footer links */}
        <div className="h-10 lg:h-16 pointer-events-none" />

        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
            {/* Brand column */}
            <div className="md:col-span-2 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-base"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #7c3aed)" }}
                >
                  A
                </div>
                <span className="font-black text-2xl tracking-tight text-white">
                  AARIVON
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
                Premium digital agency crafting world-class websites, apps, and AI solutions
                for companies that refuse to settle for ordinary.
              </p>

              {/* Social icons */}
              <div className="flex gap-2 mb-8">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg glass border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:border-white/15 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-sm font-semibold text-white mb-2">
                  Stay in the Loop
                </p>
                <p className="text-xs text-white/35 mb-3">
                  Monthly insights on design, tech & growth.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2 items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 min-w-0 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-blue/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="w-10 h-10 rounded-xl bg-brand-blue/80 hover:bg-brand-blue flex items-center justify-center text-white transition-colors flex-shrink-0"
                  >
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([category, links], ci) => (
              <div key={category}>
                <h4 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => {
                          const el = document.querySelector("#contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-xs text-white/35 hover:text-white/70 transition-colors duration-200 text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] mt-12 lg:mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25 text-center">
              © 2026 AARIVON. All rights reserved. Built with ❤️ by AARIVON.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/20">Privacy</span>
              <span className="text-white/10">·</span>
              <span className="text-xs text-white/20">Terms</span>
              <span className="text-white/10">·</span>
              <span className="text-xs text-white/20">Sitemap</span>
            </div>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
