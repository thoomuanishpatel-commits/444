"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle, Send, Check, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aarivon.com",
    href: "mailto:hello@aarivon.com",
    color: "#0ea5e9",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "#10b981",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Global",
    href: "#",
    color: "#7c3aed",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isNameValid = (name: string) => name.trim().length >= 3;
  const isMessageValid = (message: string) => message.trim().length >= 10;

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNameValid(form.name) || !isEmailValid(form.email) || !isMessageValid(form.message)) {
      setTouched({ name: true, email: true, message: true });
      toast.error("Please fill in required fields correctly");
      return;
    }
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll reach out within 24 hours.");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(14,165,233,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex section-label mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="heading-lg text-white mb-6"
          >
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-xl mx-auto"
          >
            Tell us about your project. We&apos;ll get back to you within 24 hours
            with a free consultation and project estimate.
          </motion.p>
        </div>

        {/* Spacer */}
        <div className="h-8 lg:h-12 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact methods */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 glass rounded-2xl sm:rounded-3xl p-4 lg:p-6 border border-white/[0.06] hover:border-white/10 group transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${info.color}15`,
                        border: `1px solid ${info.color}25`,
                      }}
                    >
                      <Icon size={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 font-semibold uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-white/20 group-hover:text-white/50 transition-colors"
                    />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-4 lg:px-6 py-4 rounded-2xl sm:rounded-3xl font-semibold text-sm transition-all duration-300 border"
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                borderColor: "rgba(16, 185, 129, 0.2)",
                color: "#10b981",
              }}
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
              <span className="ml-auto text-xs opacity-60 font-medium">Usually replies in 1 hr</span>
            </a>

            {/* Trust signals */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 lg:p-8 border border-white/[0.06]">
              <p className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Why reach out?</p>
              <div className="space-y-4">
                {[
                  "Free consultation call included",
                  "Detailed project estimate within 24h",
                  "No commitment required",
                  "NDA signed before any discussion",
                  "Direct communication with senior team",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-brand-blue" />
                    </div>
                    <span className="text-xs text-white/50 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-strong rounded-2xl sm:rounded-3xl p-6 lg:p-8 border border-white/10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Received! 🎉
                </h3>
                <p className="text-white/50 text-sm mb-6">
                  We&apos;ll review your project details and get back to you within 24 hours with a
                  free consultation and detailed estimate.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-sm px-5 py-2.5"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-2xl sm:rounded-3xl p-6 lg:p-8 border border-white/10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-semibold text-white/40 mb-2 block uppercase tracking-wider">
                      Full Name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="John Smith"
                      required
                      className={`w-full bg-white/[0.03] border rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:bg-white/[0.05] transition-all duration-200 ${
                        touched.name
                          ? isNameValid(form.name)
                            ? "border-emerald-500/30 focus:border-emerald-500/50"
                            : "border-red-500/30 focus:border-red-500/50"
                          : "border-white/[0.08] focus:border-brand-blue/40"
                      }`}
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-white/40 mb-2 block uppercase tracking-wider">
                      Email <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="john@company.com"
                      required
                      className={`w-full bg-white/[0.03] border rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:bg-white/[0.05] transition-all duration-200 ${
                        touched.email
                          ? isEmailValid(form.email)
                            ? "border-emerald-500/30 focus:border-emerald-500/50"
                            : "border-red-500/30 focus:border-red-500/50"
                          : "border-white/[0.08] focus:border-brand-blue/40"
                      }`}
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label className="text-xs font-semibold text-white/40 mb-2 block uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.05] transition-all duration-200"
                    />
                  </div>
                  {/* Service */}
                  <div className="relative">
                    <label className="text-xs font-semibold text-white/40 mb-2 block uppercase tracking-wider">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 pl-5 pr-10 py-4 text-sm text-white/60 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.05] transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900">Select a service</option>
                        <option value="website" className="bg-gray-900">Website Development</option>
                        <option value="app" className="bg-gray-900">Mobile App</option>
                        <option value="ui-ux" className="bg-gray-900">UI/UX Design</option>
                        <option value="saas" className="bg-gray-900">SaaS Development</option>
                        <option value="ai" className="bg-gray-900">AI Solutions</option>
                        <option value="ecommerce" className="bg-gray-900">E-Commerce</option>
                        <option value="branding" className="bg-gray-900">Branding</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/45">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="mb-6">
                  <label className="text-xs font-semibold text-white/40 mb-3 block uppercase tracking-wider">
                    Project Budget
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {["Under ₹50K", "₹50K–₹2L", "₹2L–₹5L", "₹5L+", "Custom"].map(
                      (b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, budget: b }))}
                          className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 ${
                            form.budget === b
                              ? "bg-brand-blue/20 border border-brand-blue/40 text-brand-blue"
                              : "bg-white/[0.02] border border-white/[0.06] text-white/40 hover:text-white/60"
                          }`}
                        >
                          {b}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="text-xs font-semibold text-white/40 mb-2 block uppercase tracking-wider">
                    Project Details <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us about your project — what you want to build, your goals, timeline, and any specific requirements..."
                    required
                    rows={5}
                    className={`w-full bg-white/[0.03] border rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:bg-white/[0.05] transition-all duration-200 resize-none ${
                      touched.message
                        ? isMessageValid(form.message)
                          ? "border-emerald-500/30 focus:border-emerald-500/50"
                          : "border-red-500/30 focus:border-red-500/50"
                        : "border-white/[0.08] focus:border-brand-blue/40"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="relative z-10" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/25 mt-4">
                  By submitting, you agree to our Privacy Policy. We never spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
