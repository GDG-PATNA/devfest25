// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./assets/fonts/custom-font.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/about/About";
import TicketSection from "./components/ticket/TicketSection";
import Team from "./components/Teams";
import Faq from "./components/Faqs";
import Footer from "./components/Footer";
import WhatToExpect from "./components/WhatToExpect";
import Ticket from "./components/Ticket";
import Guidelines from "./pages/Guidelines";
import Badge from "./pages/Badge";

const Placeholder = ({ name, id }) => (
  <div
    id={id}
    className="min-h-[50vh] flex items-center justify-center border-t border-black bg-gray-50"
  >
    <h2 className="text-4xl font-bold text-gray-300">{name} Comming Soon</h2>
  </div>
);

const Partners = () => <Placeholder name="Partners" id="partners" />;
const Agenda = () => <Placeholder name="Agenda" id="agenda" />;



export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const navbarOffset = 100; // adjust for your Nav height
      const top =
        el.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({ top, behavior: "smooth" });
    };

    // Try immediately
    scrollToHash();
    // Try again after a short delay in case the section renders a bit later
    const timeout = setTimeout(scrollToHash, 80);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={<>
            <Hero />

            <div className=" bg-[#3A3A3A]">
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
          }
        />

        <Route path="/partners" element={<Partners />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/guideline" element={<Guidelines />} />
      </Routes>
    </>
  );
}