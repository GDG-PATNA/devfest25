import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
<<<<<<< HEAD
import About from "./components/about/About";
// import Speaker from "./components/Speaker";
=======
// import About from "./components/About";
import Speaker from "./components/Speakers";
>>>>>>> 51316732f9c3798236c49c952eb232613119277a
// import Sponsers from "./components/Sponsers";
import Team from "./components/Teams";
// import Faq from "./components/Faq";
// import Footer from "./components/Footer";
// import Partners from "./components/Partners";
// import Agenda from "./components/Agenda";
// import BadgeGenerator from "./components/BadgeGenerator";
// import Guidelines from "./components/Guidelines";

const Placeholder = ({ name, id }) => (
    <div id={id} className="min-h-[50vh] flex items-center justify-center border-t border-black bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-300">{name} Section</h2>
    </div>
);
<<<<<<< HEAD
//const About = () => <Placeholder name="Why DevFest" id="why-DevFest" />;
const Speaker = () => <Placeholder name="Speakers" id="speakers" />;
=======
const About = () => <Placeholder name="Why DevFest" id="why-DevFest" />;
// const Speaker = () => <Placeholder name="Speakers" id="speakers" />;
>>>>>>> 51316732f9c3798236c49c952eb232613119277a
const Sponsers = () => <Placeholder name="Sponsors" id="sponsors" />;
// const Team = () => <Placeholder name="Team" id="team" />;
const Faq = () => <Placeholder name="FAQ" id="faq" />;
const Footer = () => <div className="bg-black text-white p-10 text-center">Footer Content</div>;
const Partners = () => <Placeholder name="Partners Page" />;
const Agenda = () => <Placeholder name="Agenda Page" />;
const BadgeGenerator = () => <Placeholder name="Badge Page" />;
const Guidelines = () => <Placeholder name="Guidelines Page" />;

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      const offset = -100; // adjust for navbar height
      const top = el.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Speaker />
              <Sponsers />
              <Team />
              <Faq />
              <Footer />
            </>
          }
        />

        <Route path="/partners" element={<Partners />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/badge" element={<BadgeGenerator />} />
        <Route path="/guideline" element={<Guidelines />} />
      </Routes>
    </>
  );
}
