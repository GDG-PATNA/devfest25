
/* =========================================================================
   FILE: ./components/Hero.jsx
   ========================================================================= */
import { EVENT_CONFIG } from '../constants/config';
import { Calendar } from "lucide-react"; 
import skyline from "../assets/skyline.png"
import wheelInner from "../assets/wheelin.svg"
import wheelOuter from "../assets/wheelout.svg"

const Skyline = () => (
  <div className="relative w-full h-64 sm:h-80 md:h-[500px] z-0 pointer-events-none mt-auto">
    <img 
      src={skyline} 
      alt={`${EVENT_CONFIG.text.city} Skyline`} 
      className="w-full h-full object-cover object-bottom opacity-90"
    />
  </div>
);

const Marquee = () => {
  const items = [...EVENT_CONFIG.marqueeItems, ...EVENT_CONFIG.marqueeItems];
  return (
    <div className="bg-[#FDE293] py-3 border-t-2 border-black overflow-hidden whitespace-nowrap w-full z-[40] relative">
      <div className="inline-block animate-marquee">
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-8 font-bold text-gray-800 text-lg uppercase tracking-wide"
          >
            • &nbsp; {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-[#FFFCF6] relative overflow-hidden font-sans selection:bg-blue-100 flex flex-col">

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 z-[-20] opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(#E5E7EB 1.5px, transparent 1.5px), linear-gradient(90deg, #E5E7EB 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* WHEELS + CONTENT */}
      <div className="relative w-full flex flex-col items-center justify-center flex-1">

        {/* WHEELS ANIMATION */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-[10]">
          {/* OUTER WHEEL */}
          <div className="absolute spin-fix w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-90 animate-spin-slow-cw z-[10]">
            <img
              src={wheelOuter}
              className="w-full h-full object-contain block"
              alt="Decoration Wheel Outer"
            />
          </div>

          {/* INNER WHEEL */}
          <div className="absolute spin-fix w-[400px] h-[400px] md:w-[750px] md:h-[750px] opacity-90 animate-spin-slow-ccw z-[20]">
            <img
              src={wheelInner}
              className="w-full h-full object-contain block"
              alt="Decoration Wheel Inner"
            />
          </div>
        </div>

        {/* HERO CONTENT (INSIDE WHEEL) */}
        <main className="relative z-[30] pt-24 pb-10 flex flex-col items-center text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-8 py-3 mb-6 shadow">
            <Calendar size={20} className="text-black" strokeWidth={2.5} />
            <span className="font-bold text-black text-lg">{EVENT_CONFIG.text.date}</span>
          </div>

          <div className="flex flex-col items-center mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-[900] text-gray-900 leading-tight">
              {EVENT_CONFIG.text.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <div className="relative group z-10 -mt-3">
                <div className="absolute inset-0 bg-[#F1F3F4] rounded-[3rem] translate-x-2 translate-y-3 border-2 border-black" />
                <div className="relative bg-[#6ea9ff] border-2 border-black rounded-[3rem] px-10 md:px-14 py-2 md:py-4 -rotate-3 overflow-hidden">
                  <span className="relative z-10 text-4xl md:text-7xl font-[900] text-black">
                    {EVENT_CONFIG.text.city}
                  </span>
                </div>
              </div>
              <span className="text-6xl md:text-8xl font-bold text-[#4285F4] rotate-2 ml-2">
                {EVENT_CONFIG.text.year}
              </span>
            </div>
          </div>

          <p className="max-w-2xl text-gray-700 text-base md:text-lg mb-10 leading-relaxed font-medium bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-black/10">
            {EVENT_CONFIG.text.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-[#FBBC04] text-black font-bold text-lg px-10 py-3.5 rounded-full border-2 border-black shadow-[3px_3px_0px] hover:translate-y-1 hover:shadow-none transition-all">
              {EVENT_CONFIG.buttons.primary}
            </button>

            <button className="bg-[#34A853] text-white font-bold text-lg px-10 py-3.5 rounded-full border-2 border-black shadow-[3px_3px_0px] hover:translate-y-1 hover:shadow-none transition-all">
              {EVENT_CONFIG.buttons.secondary}
            </button>
          </div>
        </main>
      </div>

      <Skyline />
      <Marquee />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes spin-slow-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow-cw {
          animation: spin-slow-cw 60s linear infinite;
        }

        @keyframes spin-slow-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-ccw {
          animation: spin-slow-ccw 50s linear infinite;
        }

        .spin-fix {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
        .spin-fix img {
          display: block !important;
        }
      `}</style>
    </div>
  );
}
