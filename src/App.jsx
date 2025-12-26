// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./assets/fonts/custom-font.css";
import Nav from "./components/Nav";
import SimpleFooter from "./components/SimpleFooter";
import Home from "./pages/Home";   // ⬅️ NEW
import Guidelines from "./pages/Guidelines";
import Badge from "./pages/Badge";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Certificate from "./pages/Certificate";
import VerifyCertificate from "./pages/VerifyCertificate";
import Agenda from "./pages/Agenda";


export default function App() {
  const location = useLocation();

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
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      
      {location.pathname !== '/' && <SimpleFooter />}
    </>
  );
}
