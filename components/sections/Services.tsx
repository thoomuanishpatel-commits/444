"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import {
  Globe,
  Smartphone,
  Palette,
  Boxes,
  Bot,
  Briefcase,
  Sparkles,
  ShoppingCart,
  Cloud,
  Search,
  BarChart,
  MessageCircle,
  ArrowUpRight,
  Check,
  Play,
  Cpu,
  Send,
  Sliders,
  RefreshCw,
  ShoppingBag,
  Bell,
} from "lucide-react";

// Get premium icons matching the theme
function getServiceIcon(id: string, active: boolean) {
  const iconProps = {
    size: 20,
    className: `transition-transform duration-300 ${active ? "scale-110" : ""}`,
  };
  switch (id) {
    case "web-dev":
      return <Globe {...iconProps} />;
    case "mobile-dev":
      return <Smartphone {...iconProps} />;
    case "ui-ux":
      return <Palette {...iconProps} />;
    case "saas":
      return <Boxes {...iconProps} />;
    case "ai":
      return <Bot {...iconProps} />;
    case "automation":
      return <Briefcase {...iconProps} />;
    case "branding":
      return <Sparkles {...iconProps} />;
    case "ecommerce":
      return <ShoppingCart {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
}

/* ==========================================
   SIMULATOR 1: Web Dev
   (Lighthouse audit & Grid vs Flex layout simulator)
   ========================================== */
function WebDevSimulator() {
  const [layout, setLayout] = useState<"grid" | "flex" | "bento">("grid");
  const [lhScore, setLhScore] = useState(0);
  const [runningLh, setRunningLh] = useState(false);

  const startLighthouse = () => {
    setRunningLh(true);
    setLhScore(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 3;
      if (current >= 99) {
        setLhScore(99);
        setRunningLh(false);
        clearInterval(interval);
      } else {
        setLhScore(current);
      }
    }, 40);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      {/* Code Editor Mock */}
      <div className="glass-strong rounded-2xl p-4 font-mono text-[10px] text-white/70 border border-white/[0.08]">
        <div className="flex items-center gap-1.5 mb-3 border-b border-white/[0.06] pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-white/40 ml-2">PageLayout.tsx</span>
        </div>
        <p className="text-brand-blue">{"const Page = () => {"}</p>
        <p className="pl-4">{"return ("}</p>
        <p className={`pl-8 transition-colors duration-300 ${layout === "grid" ? "text-white" : "text-white/40"}`}>
          {"<div className=\""}
          <span className="text-emerald-400 font-bold">
            {layout === "grid" ? "grid grid-cols-3 gap-3" : layout === "flex" ? "flex flex-col gap-3" : "grid grid-cols-3 grid-rows-2 gap-3"}
          </span>
          {"\">"}
        </p>
        <p className="pl-12 text-white/50">{"<Card title=\"Hero\" />"}</p>
        <p className="pl-12 text-white/50">{"<Card title=\"Stats\" />"}</p>
        <p className="pl-12 text-white/50">{"<Card title=\"Visual\" />"}</p>
        <p className="pl-8">{"</div>"}</p>
        <p className="pl-4">{");"}</p>
        <p className="text-brand-blue">{"};"}</p>
      </div>

      {/* Live Layout Preview */}
      <div className="glass rounded-2xl p-4 border border-white/[0.06] min-h-[140px] flex flex-col justify-center">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold">Live Preview</span>
          <div className="flex gap-1">
            {(["grid", "flex", "bento"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setLayout(mode)}
                className={`text-[9px] px-2.5 py-1 rounded-md font-semibold transition-all duration-300 capitalize ${
                  layout === mode
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-white/40 hover:text-white/70 border border-transparent"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className={`w-full transition-all duration-500 ${
            layout === "grid"
              ? "grid grid-cols-3 gap-2"
              : layout === "flex"
              ? "flex flex-col gap-2"
              : "grid grid-cols-3 grid-rows-2 gap-2 h-[90px]"
          }`}
        >
          <motion.div
            layout
            className={`rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/80 p-2 ${
              layout === "bento" ? "col-span-2" : ""
            }`}
          >
            Hero
          </motion.div>
          <motion.div
            layout
            className="rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/80 p-2"
          >
            Stats
          </motion.div>
          <motion.div
            layout
            className={`rounded-lg bg-gradient-to-br from-cyan-500/20 to-brand-blue/20 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/80 p-2 ${
              layout === "bento" ? "row-span-2 col-start-3 row-start-1" : ""
            }`}
          >
            Visual
          </motion.div>
          {layout === "bento" && (
            <motion.div
              layout
              className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/80 p-2 col-span-2"
            >
              Footer
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lighthouse Scan simulator */}
      <div className="flex items-center justify-between glass rounded-xl p-3 border border-white/[0.04]">
        <button
          onClick={startLighthouse}
          disabled={runningLh}
          className="btn-primary text-[10px] py-2 px-4 rounded-xl flex items-center gap-2 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all"
        >
          <RefreshCw size={12} className={runningLh ? "animate-spin" : ""} />
          {runningLh ? "Auditing..." : "Lighthouse Audit"}
        </button>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="transparent" />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke={lhScore > 90 ? "#10b981" : "#eab308"}
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 16}`}
                  strokeDashoffset={`${2 * Math.PI * 16 * (1 - lhScore / 100)}`}
                  className="transition-all duration-300"
                />
              </svg>
              <span className="text-[10px] font-black text-white">{lhScore}%</span>
            </div>
            <span className="text-[8px] text-white/40 uppercase mt-1">Perf</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   SIMULATOR 2: Mobile Dev
   (Swipeable tabs + push notification trigger)
   ========================================== */
function MobileDevSimulator() {
  const [activeScreen, setActiveScreen] = useState<"crypto" | "fitness">("crypto");
  const [showNotif, setShowNotif] = useState(false);

  const triggerNotif = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3500);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full gap-3">
      {/* Mock Phone Frame */}
      <div className="relative w-[180px] h-[300px] rounded-[32px] bg-zinc-950 border-[4px] border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden p-2.5">
        {/* Dynamic Island */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 ml-auto mr-1.5" />
        </div>

        {/* Localized Push Notification */}
        <AnimatePresence>
          {showNotif && (
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              className="absolute top-8 left-1.5 right-1.5 bg-zinc-900/95 backdrop-blur-md rounded-xl p-2 border border-white/10 z-30 flex items-start gap-2 shadow-lg"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white shadow">
                A
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-[9px] font-bold text-white leading-none mb-0.5">AARIVON Studio</p>
                <p className="text-[8px] text-white/60 leading-tight">Your project build has compiled successfully! 🚀</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phone Content Screen */}
        <div className="flex-1 flex flex-col justify-between bg-zinc-900 rounded-[22px] overflow-hidden p-3 mt-4 relative z-10 border border-white/[0.04]">
          {activeScreen === "crypto" ? (
            <div className="flex flex-col justify-between h-full text-left">
              <div>
                <p className="text-[8px] text-white/40 font-medium">Portfolio Balance</p>
                <h4 className="text-base font-black text-white tracking-tight mt-0.5">$14,842.20</h4>
                <div className="text-[8px] text-emerald-400 font-semibold mt-1 flex items-center gap-0.5">
                  <span>+12.4% today</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center bg-white/[0.04] p-1.5 rounded-lg border border-white/[0.04]">
                  <span className="text-[9px] font-semibold text-white">BTC</span>
                  <span className="text-[9px] text-white/50">$98,420</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.04] p-1.5 rounded-lg border border-white/[0.04]">
                  <span className="text-[9px] font-semibold text-white">ETH</span>
                  <span className="text-[9px] text-white/50">$3,420</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-full text-left">
              <div>
                <p className="text-[8px] text-white/40 font-medium">Daily Activity</p>
                <h4 className="text-base font-black text-white tracking-tight mt-0.5">8,420 steps</h4>
                <div className="text-[8px] text-brand-blue font-semibold mt-1">84% of daily goal</div>
              </div>
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="32" cy="32" r="24" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="transparent" />
                  <circle
                    cx="32"
                    cy="32"
                    r="24"
                    stroke="#0ea5e9"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 24}`}
                    strokeDashoffset={`${2 * Math.PI * 24 * 0.16}`}
                  />
                </svg>
                <span className="absolute text-[9px] font-bold text-white">84%</span>
              </div>
            </div>
          )}

          {/* App Switcher Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            <button
              onClick={() => setActiveScreen("crypto")}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeScreen === "crypto" ? "bg-white w-3" : "bg-white/20"}`}
            />
            <button
              onClick={() => setActiveScreen("fitness")}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeScreen === "fitness" ? "bg-white w-3" : "bg-white/20"}`}
            />
          </div>
        </div>
      </div>

      <button
        onClick={triggerNotif}
        className="glass rounded-xl px-4 py-2 border border-white/[0.06] hover:border-white/12 text-[10px] flex items-center gap-2 text-white/80 active:scale-95 transition-all shadow-sm"
      >
        <Bell size={12} className="text-brand-blue animate-pulse" />
        Trigger Push Notification
      </button>
    </div>
  );
}

/* ==========================================
   SIMULATOR 3: UI/UX Design
   (Design tokens / custom properties sandbox)
   ========================================== */
function UiUxSimulator() {
  const [radius, setRadius] = useState(24);
  const [blur, setBlur] = useState(12);
  const [glowColor, setGlowColor] = useState("#0ea5e9");

  const colors = [
    { value: "#0ea5e9", label: "Blue" },
    { value: "#a855f7", label: "Purple" },
    { value: "#10b981", label: "Emerald" },
    { value: "#f43f5e", label: "Rose" },
  ];

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      {/* Design Token Canvas */}
      <div className="flex-1 flex items-center justify-center p-4 min-h-[160px] relative">
        <div
          className="absolute inset-0 blur-[50px] opacity-10 transition-colors duration-500 rounded-full"
          style={{ backgroundColor: glowColor }}
        />
        <div
          className="w-full max-w-[240px] p-6 border transition-all duration-300 relative overflow-hidden flex flex-col justify-center text-center shadow-lg"
          style={{
            borderRadius: `${radius}px`,
            backdropFilter: `blur(${blur}px)`,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderColor: `${glowColor}50`,
            boxShadow: `0 15px 35px rgba(0,0,0,0.35), 0 0 25px ${glowColor}15`,
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto text-white transition-colors duration-500"
            style={{ backgroundColor: `${glowColor}25`, border: `1px solid ${glowColor}40` }}
          >
            <Sliders size={18} />
          </div>
          <h4 className="text-sm font-bold text-white mb-1.5">Interactive Card</h4>
          <p className="text-[10px] text-white/50 leading-relaxed">
            Drag the sliders below to adjust core variables in real-time.
          </p>
        </div>
      </div>

      {/* Control Panel */}
      <div className="glass rounded-2xl p-4 border border-white/[0.06] flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-white/40 uppercase font-semibold">Theme Color</span>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c.value}
                onClick={() => setGlowColor(c.value)}
                className="w-4 h-4 rounded-full border border-white/20 transition-transform duration-300 hover:scale-125"
                style={{
                  backgroundColor: c.value,
                  transform: glowColor === c.value ? "scale(1.2)" : "none",
                  boxShadow: glowColor === c.value ? `0 0 10px ${c.value}` : "none",
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-white/40 mb-1">
            <span>Border Radius</span>
            <span className="text-white">{radius}px</span>
          </div>
          <input
            type="range"
            min="0"
            max="40"
            value={radius}
            onChange={(e) => setRadius(parseInt(e.target.value))}
            className="w-full accent-white h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-white/40 mb-1">
            <span>Backdrop Blur</span>
            <span className="text-white">{blur}px</span>
          </div>
          <input
            type="range"
            min="0"
            max="24"
            value={blur}
            onChange={(e) => setBlur(parseInt(e.target.value))}
            className="w-full accent-white h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   SIMULATOR 4: SaaS Development
   (Traffic spike simulator + terminal server logs)
   ========================================== */
function SaasSimulator() {
  const [traffic, setTraffic] = useState(42);
  const [spiking, setSpiking] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "SysCheck: OK",
    "Database: Connected",
    "API Gateway: Listening",
  ]);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev.slice(-2), msg]);
  };

  const simulateSpike = () => {
    if (spiking) return;
    setSpiking(true);
    setTraffic(98);
    addLog("WARNING: Traffic spike detected!");
    setTimeout(() => {
      addLog("AutoScaler: Launching node ec2-node-4");
    }, 1000);
    setTimeout(() => {
      addLog("AutoScaler: Load balancer re-routing");
    }, 2000);
    setTimeout(() => {
      setTraffic(45);
      addLog("SysCheck: Balanced load. Node ec2-node-4 idle");
      setSpiking(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass rounded-xl p-3 border border-white/[0.04] text-left">
          <p className="text-[9px] text-white/45 uppercase">MRR Growth</p>
          <h4 className="text-base font-black text-white mt-1">$48,420</h4>
          <span className="text-[8px] text-emerald-400 font-semibold">+18.2% MoM</span>
        </div>
        <div className="glass rounded-xl p-3 border border-white/[0.04] text-left">
          <p className="text-[9px] text-white/45 uppercase">Sys Status</p>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-white">99.99%</span>
          </div>
        </div>
      </div>

      {/* Traffic Level Bar */}
      <div className="glass rounded-2xl p-4 border border-white/[0.06] text-left flex flex-col justify-center gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-white/40 uppercase font-semibold">Active Connections</span>
          <span className={`text-[10px] font-bold ${traffic > 80 ? "text-rose-500 animate-pulse" : "text-white"}`}>
            {traffic}k req/sec
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full transition-all duration-700 rounded-full ${
              traffic > 80 ? "bg-rose-500" : "bg-gradient-to-r from-brand-blue to-brand-purple"
            }`}
            style={{ width: `${traffic}%` }}
          />
        </div>
      </div>

      {/* Console Log Console */}
      <div className="glass-strong rounded-xl p-3 border border-white/[0.08] font-mono text-[9px] text-white/60 text-left min-h-[75px] flex flex-col justify-end">
        <div className="text-white/20 uppercase tracking-widest text-[8px] border-b border-white/[0.04] pb-1 mb-2 font-semibold font-sans">
          Cloud Console Logs
        </div>
        {logs.map((log, i) => (
          <p key={i} className={`leading-relaxed ${log.includes("WARNING") ? "text-rose-400 font-bold" : log.includes("AutoScaler") ? "text-cyan-400" : ""}`}>
            $ {log}
          </p>
        ))}
      </div>

      <button
        onClick={simulateSpike}
        disabled={spiking}
        className="btn-primary text-xs py-2 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all active:scale-95 disabled:opacity-50"
      >
        <Cpu size={12} className={spiking ? "animate-spin" : ""} />
        {spiking ? "Scaling active..." : "Simulate Traffic Spike"}
      </button>
    </div>
  );
}

/* ==========================================
   SIMULATOR 5: AI Solutions
   (Chat console prompt simulator)
   ========================================== */
function AiSolutionsSimulator() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([
    { role: "assistant", text: "Hello! I am your AI agent. Ask me to complete a business task." },
  ]);
  const [typing, setTyping] = useState(false);

  const prompts = [
    "Predict quarterly user growth",
    "Generate landing page copy",
  ];

  const handlePrompt = (prompt: string) => {
    if (typing) return;
    setMessages((prev) => [...prev, { role: "user", text: prompt }]);
    setTyping(true);

    let reply = "";
    if (prompt.includes("growth")) {
      reply = "Analyzing historical metrics... Based on current trends, we project a 12.4% growth next quarter, landing at approximately 48,000 active users. Recommended action: scale SaaS clusters.";
    } else {
      reply = "Aarivon: Crafting premium digital experiences that scale. We combine high-fidelity design with elite cloud engineering to build digital empires. Scale without limits.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: "" }]);
      let i = 0;
      const interval = setInterval(() => {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            text: reply.substring(0, i),
          };
          return updated;
        });
        i += 3;
        if (i >= reply.length + 3) {
          setTyping(false);
          clearInterval(interval);
        }
      }, 25);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-3 text-left">
      {/* Prompt Suggestions */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] text-white/35 uppercase font-semibold">Select Prompt Suggestion:</span>
        <div className="flex gap-2">
          {prompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handlePrompt(p)}
              disabled={typing}
              className="glass hover:border-white/12 border border-white/[0.04] text-[9px] text-white/70 px-2.5 py-1.5 rounded-lg active:scale-95 transition-all truncate max-w-[145px] text-left"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Log Panel */}
      <div className="flex-1 glass-strong rounded-2xl p-3 border border-white/[0.08] min-h-[140px] flex flex-col gap-2 overflow-y-auto max-h-[160px]">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
            <div
              className={`text-[9px] px-2.5 py-1.5 rounded-xl max-w-[85%] leading-relaxed ${
                m.role === "user"
                  ? "bg-brand-blue text-white rounded-br-none"
                  : "bg-white/[0.04] text-white/80 border border-white/[0.06] rounded-bl-none"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && messages[messages.length - 1].role === "user" && (
          <div className="flex gap-1 items-center pl-1 text-[9px] text-white/30">
            <span className="animate-bounce">●</span>
            <span className="animate-bounce delay-75">●</span>
            <span className="animate-bounce delay-150">●</span>
          </div>
        )}
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 glass rounded-xl p-1.5 border border-white/[0.04]">
        <div className="flex-1 text-[10px] text-white/40 pl-2">Select a suggestion prompt...</div>
        <button className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
          <Send size={10} />
        </button>
      </div>
    </div>
  );
}

/* ==========================================
   SIMULATOR 6: Business Automation
   (Automation visual node flow diagram)
   ========================================== */
function AutomationSimulator() {
  const [running, setRunning] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const runWorkflow = () => {
    if (running) return;
    setRunning(true);
    
    // Animate active steps sequentially
    setActiveNode(1);
    setTimeout(() => setActiveNode(2), 1200);
    setTimeout(() => setActiveNode(3), 2400);
    setTimeout(() => {
      setActiveNode(null);
      setRunning(false);
    }, 3600);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      {/* Node Flow Diagram */}
      <div className="flex-1 flex flex-col justify-center items-center gap-3 relative min-h-[180px]">
        {/* Node 1 */}
        <div
          className={`w-[180px] p-2.5 rounded-xl border flex items-center gap-2 transition-all duration-500 z-10 ${
            activeNode === 1
              ? "bg-brand-blue/20 border-brand-blue shadow-[0_0_20px_rgba(14,165,233,0.3)] scale-105"
              : "glass border-white/[0.06] opacity-70"
          }`}
        >
          <div className="w-5 h-5 rounded bg-brand-blue/25 flex items-center justify-center text-[10px] text-white">1</div>
          <div className="text-left leading-none">
            <p className="text-[10px] font-bold text-white">Webhook Trigger</p>
            <p className="text-[8px] text-white/40 mt-0.5">New lead in database</p>
          </div>
        </div>

        {/* Connector Line 1 */}
        <div className="w-[2px] h-6 bg-white/10 relative overflow-hidden">
          {running && activeNode === 1 && (
            <motion.div
              initial={{ y: -24 }}
              animate={{ y: 24 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute w-[2px] h-3 bg-brand-blue"
            />
          )}
        </div>

        {/* Node 2 */}
        <div
          className={`w-[180px] p-2.5 rounded-xl border flex items-center gap-2 transition-all duration-500 z-10 ${
            activeNode === 2
              ? "bg-brand-purple/20 border-brand-purple shadow-[0_0_20px_rgba(124,58,237,0.3)] scale-105"
              : "glass border-white/[0.06] opacity-70"
          }`}
        >
          <div className="w-5 h-5 rounded bg-brand-purple/25 flex items-center justify-center text-[10px] text-white">2</div>
          <div className="text-left leading-none">
            <p className="text-[10px] font-bold text-white">Process AI</p>
            <p className="text-[8px] text-white/40 mt-0.5">Categorize and score lead</p>
          </div>
        </div>

        {/* Connector Line 2 */}
        <div className="w-[2px] h-6 bg-white/10 relative overflow-hidden">
          {running && activeNode === 2 && (
            <motion.div
              initial={{ y: -24 }}
              animate={{ y: 24 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute w-[2px] h-3 bg-brand-purple"
            />
          )}
        </div>

        {/* Node 3 */}
        <div
          className={`w-[180px] p-2.5 rounded-xl border flex items-center gap-2 transition-all duration-500 z-10 ${
            activeNode === 3
              ? "bg-emerald-500/20 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105"
              : "glass border-white/[0.06] opacity-70"
          }`}
        >
          <div className="w-5 h-5 rounded bg-emerald-500/25 flex items-center justify-center text-[10px] text-white">3</div>
          <div className="text-left leading-none">
            <p className="text-[10px] font-bold text-white">Slack / CRM Sync</p>
            <p className="text-[8px] text-white/40 mt-0.5">Send alert & create record</p>
          </div>
        </div>
      </div>

      <button
        onClick={runWorkflow}
        disabled={running}
        className="btn-primary text-xs py-2 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all active:scale-95 disabled:opacity-50"
      >
        <Play size={12} className={running ? "animate-pulse text-brand-blue" : ""} />
        {running ? "Workflow Running..." : "Run Automation Workflow"}
      </button>
    </div>
  );
}

/* ==========================================
   SIMULATOR 7: Branding
   (Font selector and text editor preview)
   ========================================== */
function BrandingSimulator() {
  const [text, setText] = useState("AARIVON");
  const [font, setFont] = useState<"display" | "serif" | "mono">("display");

  const fonts = [
    { id: "display", label: "Bold Display" },
    { id: "serif", label: "Strategic Serif" },
    { id: "mono", label: "Modern Mono" },
  ];

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      {/* Interactive Branding Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 border border-white/[0.04] glass rounded-2xl min-h-[160px] relative overflow-hidden">
        {/* Colorful backdrop grid */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/[0.03] via-brand-purple/[0.03] to-rose-500/[0.03] pointer-events-none" />

        <div className="text-center">
          <h2
            className={`text-3xl tracking-tight transition-all duration-300 ${
              font === "display"
                ? "font-sans font-black uppercase text-gradient"
                : font === "serif"
                ? "font-serif italic text-white font-medium"
                : "font-mono font-medium tracking-widest text-emerald-400"
            }`}
          >
            {text || "BRAND"}
          </h2>
          <p className="text-[9px] text-white/30 uppercase tracking-[0.25em] mt-3">Creative Visual Identity</p>
        </div>
      </div>

      {/* Inputs */}
      <div className="glass rounded-xl p-3 border border-white/[0.06] flex flex-col gap-3">
        <div>
          <span className="text-[10px] text-white/40 uppercase font-semibold block mb-1.5 text-left">Brand Headline</span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value.substring(0, 16))}
            placeholder="Type brand name..."
            className="w-full text-xs bg-white/[0.04] border border-white/[0.08] focus:border-white/20 rounded-lg px-2.5 py-1.5 text-white placeholder-white/20 focus:outline-none"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[10px] text-white/40 uppercase font-semibold">Typography Scale</span>
          <div className="flex gap-1.5">
            {fonts.map((f) => (
              <button
                key={f.id}
                onClick={() => setFont(f.id as any)}
                className={`text-[9px] px-2 py-1 rounded-md font-semibold transition-all duration-300 ${
                  font === f.id
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   SIMULATOR 8: E-Commerce
   (Product designer and checkout simulation)
   ========================================== */
function EcommerceSimulator() {
  const [color, setColor] = useState<"blue" | "purple">("blue");
  const [size, setSize] = useState<"1TB" | "2TB">("1TB");
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (added) return;
    setAdded(true);
    setCartCount((c) => c + 1);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      {/* Shopping Bag Status */}
      <div className="flex justify-between items-center glass rounded-xl px-3 py-2 border border-white/[0.04]">
        <div className="flex items-center gap-2">
          <ShoppingBag size={14} className="text-white/40" />
          <span className="text-[10px] text-white/55">Cart Status</span>
        </div>
        <span className="text-[10px] font-bold bg-brand-blue/20 text-brand-blue border border-brand-blue/30 px-2 py-0.5 rounded-full">
          {cartCount} items
        </span>
      </div>

      {/* Product Card Canvas */}
      <div className="glass-strong rounded-2xl p-4 border border-white/[0.08] text-left flex flex-col justify-between relative overflow-hidden flex-1 min-h-[140px]">
        {/* Glow */}
        <div
          className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-[40px] opacity-20 transition-all duration-500"
          style={{ backgroundColor: color === "blue" ? "#0ea5e9" : "#a855f7" }}
        />

        <div className="flex justify-between items-start">
          <div>
            <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded-full text-white/80 font-semibold uppercase tracking-wider">
              Popular Product
            </span>
            <h4 className="text-sm font-bold text-white mt-1.5">AARIVON Nebula Glass</h4>
          </div>
          <span className="text-xs font-black text-white">$149.00</span>
        </div>

        {/* Options UI */}
        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">Select Color:</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setColor("blue")}
                className={`w-3.5 h-3.5 rounded-full bg-brand-blue border ${
                  color === "blue" ? "border-white scale-110" : "border-transparent"
                }`}
              />
              <button
                onClick={() => setColor("purple")}
                className={`w-3.5 h-3.5 rounded-full bg-brand-purple border ${
                  color === "purple" ? "border-white scale-110" : "border-transparent"
                }`}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">Select Spec:</span>
            <div className="flex gap-1">
              {(["1TB", "2TB"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`text-[8px] px-2 py-0.5 rounded border ${
                    size === s
                      ? "bg-white/10 border-white/30 text-white"
                      : "border-transparent text-white/45"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={added}
        className="btn-primary text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all active:scale-95 disabled:bg-emerald-500/20 disabled:border-emerald-500/30 disabled:text-emerald-400"
      >
        {added ? <Check size={12} /> : <ShoppingCart size={12} />}
        {added ? "Added to Cart!" : "Buy Product"}
      </button>
    </div>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState<string>("web-dev");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  const renderSimulator = () => {
    switch (activeTab) {
      case "web-dev":
        return <WebDevSimulator />;
      case "mobile-dev":
        return <MobileDevSimulator />;
      case "ui-ux":
        return <UiUxSimulator />;
      case "saas":
        return <SaasSimulator />;
      case "ai":
        return <AiSolutionsSimulator />;
      case "automation":
        return <AutomationSimulator />;
      case "branding":
        return <BrandingSimulator />;
      case "ecommerce":
        return <EcommerceSimulator />;
      default:
        return <WebDevSimulator />;
    }
  };

  return (
    <section id="services" className="relative overflow-hidden section-padding bg-zinc-950/40 border-y border-white/[0.04]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-dots opacity-[0.06]" />
        <div
          className="absolute top-1/4 left-10 w-[350px] h-[350px] rounded-full opacity-[0.06] blur-[100px] transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeService.glowColor || "#0ea5e9"} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-[450px] h-[450px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div ref={ref} className="flex flex-col items-center text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex section-label mb-4"
            >
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="heading-lg text-white mb-6 text-center"
              style={{ textAlign: "center", width: "100%" }}
            >
              Services That <span className="text-gradient">Drive Results</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="body-lg max-w-2xl mx-auto mt-6 text-center"
              style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
            >
              Interactive showcase: Click or hover over any service block on the left menu to preview and play with our custom live capability simulations.
            </motion.p>
          </div>
        </div>

        {/* Split Interactive Console Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Interactive Menu List (Left Column - 5/12 Width) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.slice(0, 8).map((service) => {
              const active = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  onMouseEnter={() => setActiveTab(service.id)}
                  className={`group text-left p-4 sm:p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between relative overflow-hidden ${
                    active
                      ? "glass-strong scale-[1.01] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      : "glass hover:bg-white/[0.03] hover:border-white/12"
                  }`}
                  style={{
                    borderColor: active ? `${service.glowColor}40` : "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {/* Subtle color highlight background for active */}
                  {active && (
                    <div
                      className="absolute inset-0 opacity-[0.03] transition-opacity pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 0% 50%, ${service.glowColor} 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Left Side Info */}
                  <div className="flex items-center gap-4 relative z-10 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                        active
                          ? "bg-white/10 border-white/20 text-white shadow-glow"
                          : "bg-white/[0.03] border-white/[0.06] text-white/50 group-hover:bg-white/5 group-hover:border-white/10 group-hover:text-white"
                      }`}
                      style={{
                        boxShadow: active ? `0 0 15px ${service.glowColor}50` : "none",
                      }}
                    >
                      {getServiceIcon(service.id, active)}
                    </div>

                    <div className="min-w-0">
                      <h4
                        className={`text-sm font-bold transition-colors duration-300 leading-tight ${
                          active ? "text-white" : "text-white/60 group-hover:text-white/90"
                        }`}
                      >
                        {service.title}
                      </h4>
                      <p className="text-[10px] text-white/35 truncate mt-1 max-w-[240px] sm:max-w-[320px]">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side Stats & Indicator */}
                  <div className="flex items-center gap-3 relative z-10 pl-2">
                    <span
                      className={`text-[10px] font-semibold transition-colors duration-300 hidden sm:inline ${
                        active ? "text-white/60" : "text-white/25 group-hover:text-white/40"
                      }`}
                    >
                      {service.stats.value}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        active ? "bg-white/10 text-white" : "opacity-0 group-hover:opacity-100 text-white/35"
                      }`}
                    >
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Simulator Screen (Right Column - 7/12 Width) */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative flex flex-col justify-between min-h-[380px] lg:min-h-[460px] flex-1 overflow-hidden transition-all duration-500"
              style={{
                boxShadow: `0 30px 60px rgba(0, 0, 0, 0.5), 0 0 45px ${activeService.glowColor}10`,
              }}
            >
              {/* Dynamic decorative visual glow behind screen */}
              <div
                className="absolute inset-0 blur-[80px] opacity-[0.04] pointer-events-none transition-colors duration-1000"
                style={{ backgroundColor: activeService.glowColor }}
              />

              {/* Simulator Screen Header */}
              <div className="flex justify-between items-center border-b border-white/[0.08] pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${activeService.gradient}`}
                    style={{ boxShadow: `0 0 15px ${activeService.glowColor}40` }}
                  >
                    {getServiceIcon(activeService.id, true)}
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-white leading-tight">{activeService.title}</h3>
                    <p className="text-[10px] text-white/45 mt-0.5">AARIVON Capability Sandbox</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Interactive
                </div>
              </div>

              {/* Core Rendered Simulator */}
              <div className="flex-1 relative z-10 flex flex-col justify-between">
                {renderSimulator()}
              </div>
            </div>
          </div>
        </div>

        {/* Discuss CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24 relative z-10">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-base px-10 py-5 rounded-2xl relative overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] hover:-translate-y-1"
          >
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -left-[100%] group-hover:left-[100%] transition-[left] duration-1000 ease-in-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-3">
              Discuss Your Project
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
