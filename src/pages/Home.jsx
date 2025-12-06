// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "../components/about/About";
import TicketSection from "../components/ticket/TicketSection";
import Team from "../components/Teams";
import Faq from "../components/Faqs";
import Footer from "../components/Footer";
import WhatToExpect from "../components/WhatToExpect";
import Ticket from "../components/Ticket";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-[#3A3A3A]">
        <section id="ticket">
          <Ticket />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="what-to-expect">
          <WhatToExpect />
        </section>

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
