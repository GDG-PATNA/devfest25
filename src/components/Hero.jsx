/* =========================================================================
   FILE: ./components/Hero.jsx
   ========================================================================= */
import { EVENT_CONFIG } from '../constants/config';
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import skyline from "../assets/skyline.png"
import wheelInner from "../assets/wheelin.svg"
import wheelOuter from "../assets/wheelout.svg"
import noiseTexture from "../assets/noiseTexture.png"

const Skyline = () => (
  <div className="absolute bottom-10 w-full h-64 sm:h-80 translate-x-0 md:h-[vh] z-1 pointer-events-none  overflow-hidden">
    <div className="skyline-scroll  flex h-full">
      <img
        src={skyline}
        alt={`${EVENT_CONFIG.text.city} Skyline`}
        className="w-full h-full object-left object-cover opacity-100"
      />
      <img
        src={skyline}
        alt={`${EVENT_CONFIG.text.city} Skyline Duplicate`}
        className="w-full h-full -ml-1 object-cover object-bottom opacity-100"
      />
    </div>
  </div>
);


const Marquee = () => {
  const items = [...EVENT_CONFIG.marqueeItems, ...EVENT_CONFIG.marqueeItems];
  return (
    <div className="bg-[#FDE293] py-4 border-t-2 border-b-4 border-black overflow-hidden font-product-bold whitespace-nowrap w-full z-[40] absolute -bottom-0">
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


  // 👉 Helper: smooth scroll to #tickets
  const scrollToTickets = () => {
    const el = document.getElementById("tickets");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="home" className="w-full h-[110vh]  relative  font-sans selection:bg-blue-100 overflow-hidden flex flex-col">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>

      <Skyline />

      {/* WHEELS + CONTENT */}
      <div className="relative w-full  flex flex-col items-center justify-center h-[100vh]">

        {/* WHEELS ANIMATION */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-[0]">
          {/* SKYLINE BG-FADE */}
          <div className="w-full absolute h-80 z-30 bg-linear-to-t from-[#F7EEDC] to-amber-50/50 blur-2xl bottom-0"></div>

          {/* WHEEL CONTAINER */}
          <div className="container -left-42 md:left-0 top-8 md:top-7 md:mr-0 lg:mr-0 relative  flex items-center justify-center ">

            {/* OUTER WHEEL */}
            <div className="absolute spin-fix size-220 md:size-200  opacity-90 animate-spin-slow-cw z-[10]">
              <img
                src={wheelOuter}
                className="w-full h-full object-cover overflow-visible block"
                alt="Decoration Wheel Outer"
              />
            </div>

            {/* INNER WHEEL */}
            <div className="absolute spin-fix size-180 md:size-170 opacity-90 animate-spin-slow-ccw z-[20]">
              <img
                src={wheelInner}
                className="w-full h-full object-cover overflow-visible block"
                alt="Decoration Wheel Inner"
              />
            </div>
          </div>
        </div>

        {/* HERO CONTENT (INSIDE WHEEL) */}

        <main className="relative z-[30] pt-24 pb-10 flex flex-col items-center -mt-15 gap-2  text-left px-4 pointer-events-auto">

          {/* DATE AND PLACE (ALTERNATING) */}

          <div className="inline-flex place-self-start md:place-self-auto items-center h-10 bg-white/40 backdrop-blur-md border-2 border-black rounded-full px-3 md:px-8 overflow-hidden shadow">
            <div className="relative h-full flex items-center">
              {/* DATE */}
              <span className="font-product-bold inline-flex items-center gap-2 text-sm md:text-lg text-black animate-date-fade">
                <Calendar size={20} className="text-black" strokeWidth={2.5} />
                {EVENT_CONFIG.text.date}
              </span>
              {/* PLACE */}
              <span className="font-product-bold inline-flex items-center gap-2 text-sm md:text-lg text-black absolute left-0 animate-place-fade">
                <MapPin size={20} className="text-black" strokeWidth={2.5} />
                {EVENT_CONFIG.text.place}
              </span>
            </div>
          </div>

          <div className="flex flex-col place-self-start -ml-5 md:place-self-auto items-center relative">
            <h1 className="text-6xl md:text-8xl font-product-black select-none tracking-tight text-gray-900 leading-tight">
              {EVENT_CONFIG.text.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center  gap-4 mt-2">
              <div className="relative group z-10 -mt-7 translate-x-2 -rotate-6 hover:rotate-0 ease-out duration-300">
                <div className="absolute inset-0 bg-white rounded-full translate-y-1.5  border-2 border-black" />
                <div className="relative bg-linear-to-b from-blue-600 to-blue-200 border-2 border-black rounded-full px-4 md:px-6 py-1 md:py-0.5  overflow-hidden">
                  <img src={noiseTexture} alt="" className="absolute left-0 top-0  opacity-80 mix-blend-plus-lighter pointer-events-none" />
                  <span className="relative z-10  text-5xl md:text-[82px] font-product-black select-none text-black">
                    {EVENT_CONFIG.text.city}
                  </span>
                </div>
              </div>
              <span className="text-6xl md:text-8xl font-bold text-[#4285F4] font-product-black first-letter:text-gray-900 -translate-y-5 select-none ">
                '{EVENT_CONFIG.text.year}
              </span>
            </div>
          </div>

          <p className="w-68 md:w-160 text-left md:text-center place-self-start md:place-self-auto text-neutral-800 md:text-neutral-800 text-shadow-[0px_0px_13px]/30 text-sm md:text-[20px] tracking-tight font-product-semibold py-3 md:p-4 select-none">
            {EVENT_CONFIG.text.description}
          </p>

          <div className="flex  h-15 place-self-start md:place-self-auto  gap-4 sm:gap-6 relative z-50">
            <button
              onClick={scrollToTickets}
              className="bg-[#FBBC04] text-nowrap text-black font-product-bold text-[18px]  md:px-10 px-5 md:py-2 rounded-full border-2 border-black shadow-[0px_3px_0px] hover:translate-y-1 hover:shadow-none transition-all select-none cursor-pointer">
              {EVENT_CONFIG.buttons.primary}
            </button>
            <span className='border-black  shadow-[0px_3px_0px] hover:translate-y-1 hover:shadow-none rounded-full border-2 overflow-hidden '>
              <Link to="/badge">
                <button className="bg-[#34A853] w-30 md:w-full h-full text-white font-product-bold text-[18px] md:px-10 md:py-2 transition-all cursor-pointer">
                  {EVENT_CONFIG.buttons.secondary}
                </button>
              </Link>
            </span>
          </div>
        </main>
      </div>

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
@keyframes skyline-loop {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}


  @keyframes date-fade-cycle {
    0% { opacity: 1; transform: translateY(0); }
    45% { opacity: 1; transform: translateY(0); }
    50% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 0; transform: translateY(-10px); }
  }

  @keyframes place-fade-cycle {
    0% { opacity: 0; transform: translateY(10px); }
    45% { opacity: 0; transform: translateY(10px); }
    50% { opacity: 1; transform: translateY(0); }
    95% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }

  .animate-date-fade {
    animation: date-fade-cycle 12s ease-in-out infinite;
  }

  .animate-place-fade {
    animation: place-fade-cycle 12s ease-in-out infinite;
  }

.skyline-scroll {
  /* animation: skyline-loop 40s linear infinite; */
}
       


      `}</style>
    </div>

  );
}
