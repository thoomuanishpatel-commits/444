"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data/services";
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
  X,
  ArrowUpRight,
  Check,
} from "lucide-react";

// Helper to return premium Lucide icons for each service
function getServiceIcon(id: string) {
  const iconProps = {
    size: 24,
    className: "relative z-10 transition-transform duration-500 group-hover:scale-110",
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
    case "cloud":
      return <Cloud {...iconProps} />;
    case "seo":
      return <Search {...iconProps} />;
    case "marketing":
      return <BarChart {...iconProps} />;
    case "chatbots":
      return <MessageCircle {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: (typeof services)[0];
  index: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as any },
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        borderColor: isHovered ? service.glowColor : "rgba(255, 255, 255, 0.08)",
        background: isHovered ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.02)",
        boxShadow: isHovered
          ? `0 30px 60px rgba(0, 0, 0, 0.4), 0 0 35px ${service.glowColor}25`
          : "none",
      }}
      className="perspective-card group relative rounded-[24px] p-8 h-full min-h-[420px] flex flex-col justify-between transition-all duration-500 border backdrop-blur-md cursor-pointer overflow-hidden"
      onClick={onOpen}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${service.glowColor}25 0%, transparent 70%)`,
        }}
      />

      {/* Top Half */}
      <div>
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 text-white bg-gradient-to-br ${service.gradient} transition-transform duration-500 group-hover:rotate-[15deg]`}
          style={{ boxShadow: `0 0 25px ${service.glowColor}` }}
        >
          {getServiceIcon(service.id)}
        </div>

        {/* Content */}
        <h3 className="font-bold text-white text-xl mb-4 group-hover:text-gradient transition-all duration-300 tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      {/* Bottom Half / Stat */}
      <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] mt-8">
        <span className="text-xs text-white/40">
          <span className="text-white/85 font-semibold">{service.stats.value}</span>{" "}
          {service.stats.label}
        </span>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-500">
          <ArrowUpRight
            size={15}
            className="text-white/40 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.div>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof services)[0] | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[950] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 glass-strong rounded-3xl p-8 max-w-lg w-full border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg glass flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white bg-gradient-to-br ${service.gradient}`}
              style={{ boxShadow: `0 0 30px ${service.glowColor}40` }}
            >
              {getServiceIcon(service.id)}
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-brand-blue" />
                  </div>
                  <span className="text-sm text-white/65">{f}</span>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div className="glass rounded-xl p-4 flex items-center justify-between mb-6">
              <div>
                <p className="text-2xl font-black text-white">{service.stats.value}</p>
                <p className="text-xs text-white/40">{service.stats.label}</p>
              </div>
              <div className="text-3xl font-black text-gradient">✓</div>
            </div>

            <button
              onClick={() => {
                onClose();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary w-full justify-center py-3.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Services() {
  const [selected, setSelected] = useState<(typeof services)[0] | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      className="py-20 md:py-32 lg:pt-[160px] lg:pb-[180px] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 grid-dots opacity-[0.07]" />

        {/* Blurred glowing circles / gradient mesh */}
        <div
          className="absolute top-1/4 left-10 w-[350px] h-[350px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-[450px] h-[450px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />

        {/* Soft radial glow in the center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] rounded-full opacity-[0.03] blur-[130px]"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex section-label mb-6"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-6 text-4xl sm:text-6xl lg:text-[76px] font-black tracking-[-0.03em] lg:tracking-[-2px] leading-[1.1] lg:leading-[1.05]"
          >
            Services That <span className="text-gradient">Drive Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 text-lg md:text-[21px] max-w-[700px] mx-auto leading-relaxed md:leading-[1.8]"
          >
            From concept to deployment — we cover every digital touchpoint your
            business needs to win in today&apos;s competitive landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-9 max-w-[1400px] mx-auto relative z-10"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpen={() => setSelected(service)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-[100px] relative z-10"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-base px-10 py-5 rounded-2xl relative overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] hover:-translate-y-1"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -left-[100%] group-hover:left-[100%] transition-[left] duration-1000 ease-in-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-3">
              Discuss Your Project
              <ArrowUpRight size={18} />
            </span>
          </button>
        </motion.div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
