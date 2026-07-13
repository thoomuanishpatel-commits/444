"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyAarivon } from "@/components/sections/WhyAarivon";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

// Lazy-loaded below-the-fold sections
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((m) => m.Portfolio), { ssr: false });
const Industries = dynamic(() => import("@/components/sections/Industries").then((m) => m.Industries), { ssr: false });
const Process = dynamic(() => import("@/components/sections/Process").then((m) => m.Process), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/Pricing").then((m) => m.Pricing), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact), { ssr: false });
const ChatWidget = dynamic(() => import("@/components/ui/ChatWidget").then((m) => m.ChatWidget), { ssr: false });
const StickyCTA = dynamic(() => import("@/components/ui/StickyCTA").then((m) => m.StickyCTA), { ssr: false });

export function ClientPageWrapper() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="relative z-[1] overflow-hidden bg-transparent dark:bg-dark-surface">
        {/* Ambient page glow */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full bg-brand-blue/[0.04] blur-[120px]" />
          <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[40vh] rounded-full bg-brand-purple/[0.05] blur-[100px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[45vw] h-[35vh] rounded-full bg-brand-cyan/[0.04] blur-[100px]" />
        </div>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyAarivon />
        <Portfolio />
        <PageSeparator />
        <Industries />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ChatWidget />
        <StickyCTA />
      </main>
    </SmoothScroll>
  );
}

function PageSeparator() {
  return <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent w-full pointer-events-none" />;
}
