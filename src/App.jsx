// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./assets/fonts/custom-font.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";   // ⬅️ NEW
import Guidelines from "./pages/Guidelines";
import Badge from "./pages/Badge";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Certificate from "./pages/Certificate";
import VerifyCertificate from "./pages/VerifyCertificate";


export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const navbarOffset = 100;
      const top =
        el.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({ top, behavior: "smooth" });
    };

    scrollToHash();
    const timeout = setTimeout(scrollToHash, 80);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/guideline" element={<Guidelines />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/:bookingId" element={<VerifyCertificate />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
