"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const quickReplies = [
  "How much does a website cost?",
  "How long does development take?",
  "Do you work internationally?",
  "Start a project",
];

const botResponses: Record<string, string> = {
  "How much does a website cost?":
    "Our website packages start from ₹25,000 for a landing page, going up to custom enterprise solutions. The exact price depends on features, design complexity, and timeline. Want me to connect you with our team for a free estimate?",
  "How long does development take?":
    "Timelines vary by project: Landing pages take 5-7 days, business websites 2-3 weeks, and complex platforms 4-8 weeks. We always deliver on schedule — 97% on-time delivery rate!",
  "Do you work internationally?":
    "Absolutely! We work with clients in 30+ countries including US, UK, UAE, Singapore, and Australia. We communicate in English and adapt to your timezone.",
  "Start a project":
    "Fantastic! The best way to get started is to fill out our contact form or send us a WhatsApp message. Our team will reply within 24 hours with a free consultation. Ready to begin?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    {
      from: "bot",
      text: "👋 Hi! I'm AARIVON's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages((p) => [...p, { from: "user", text }]);
    setInput("");
    setTyping(true);

    await new Promise((r) => setTimeout(r, 900));
    const response =
      botResponses[text] ||
      "Great question! For detailed answers, I'd recommend reaching out to our team directly via WhatsApp or the contact form. They'll get back to you within 24 hours. 🚀";
    setTyping(false);
    setMessages((p) => [...p, { from: "bot", text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[890] flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 glass-strong rounded-3xl border border-white/10 overflow-hidden"
            style={{
              boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 40px rgba(14,165,233,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 p-4 border-b border-white/[0.06]"
              style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))" }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">AARIVON AI</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs text-white/40">Online — replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      m.from === "user"
                        ? "bg-brand-blue text-white rounded-br-sm"
                        : "bg-white/[0.05] border border-white/[0.08] text-white/70 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="px-3 pb-2 flex gap-1.5 flex-wrap">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/15 transition-all whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/[0.06] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Type a message..."
                className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-blue/40 transition-colors"
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center text-white hover:bg-brand-blue-light transition-colors flex-shrink-0"
              >
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-glow-blue"
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #7c3aed)",
          boxShadow: "0 0 30px rgba(14,165,233,0.3), 0 8px 24px rgba(0,0,0,0.4)",
        }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <div
            className="absolute inset-0 rounded-2xl animate-ping"
            style={{ background: "rgba(14,165,233,0.3)", animationDuration: "2s" }}
          />
        )}

        {/* Unread badge */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">1</span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
