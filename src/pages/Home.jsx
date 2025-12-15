// src/pages/Home.jsx
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/about/About";
import TicketSection from "../components/ticket/TicketSection";
import Team from "../components/Teams";
import Faq from "../components/Faqs";
import Footer from "../components/Footer";
import WhatToExpect from "../components/WhatToExpect";
import Ticket from "../components/Ticket";
import { RotateCcw } from "lucide-react";
import AiImpactSummit from "../components/promotions/AiImpactSummit";
import Sponsors from "../components/Sponsers";

export default function Home() {
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);

  useEffect(() => {
    const evaluateOrientation = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const isMobileWidth = width <= 920;
      setIsLandscapeMobile(isMobileWidth && width > height);
    };

    evaluateOrientation();
    window.addEventListener("resize", evaluateOrientation);
    window.addEventListener("orientationchange", evaluateOrientation);

    return () => {
      window.removeEventListener("resize", evaluateOrientation);
      window.removeEventListener("orientationchange", evaluateOrientation);
    };
  }, []);

  return (
    <>
      {isLandscapeMobile && (
        <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-amber-100 px-6 text-center text-white">
          <div>
            <RotateCcw className="w-16 h-16 text-neutral-800 mx-auto mb-4 animate-bounce" />
          </div>
          <p className="text-2xl font-product-bold text-neutral-800">Rotate your device</p>
          <p className="mt-3 text-base prociono-regular text-neutral-600  max-w-sm">
            For the best DevFest experience, please switch back to portrait mode.
          </p>
        </div>
      )}
      <Hero />

      <div className="bg-[#3A3A3A]">
        <section id ="ai-impact-summit">
          <AiImpactSummit />
        </section>
        <section id="ticket">
          <Ticket />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="what-to-expect">
          <WhatToExpect />
        </section>

        
         {/* <section id="sponsors"> 
          <Sponsors/>
        </section> */}

        <section id="team">
          <Team />
        </section>

        <section id="tickets">
          <TicketSection />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <Footer />
      </div>
    </>
  );
}
