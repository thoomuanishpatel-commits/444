import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyAarivon } from "@/components/sections/WhyAarivon";
import { Portfolio } from "@/components/sections/Portfolio";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyAarivon />
        <Portfolio />
        <Industries />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ChatWidget />
      </main>
    </SmoothScroll>
  );
}

