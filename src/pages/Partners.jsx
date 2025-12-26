import React from "react";
import bpmce from "../assets/partners/BP_MCE_College.png";
import gdgHit from "../assets/partners/GDG_HIT_Logo.png";

const partners = [
  {
    id: 0,
    name: "B.P. Mandal College of Engineering, Madhepura",
    img: bpmce,
    link: "https://www.bpmcemadhepura.org/",
    type: "academic",
  },
  {
    id: 1,
    name: "GDG On Campus – Haldia Institute of Technology",
    img: gdgHit,
    link: "https://hithaldia.ac.in/",
    type: "community",
  },
];

export default function Partners() {
  return (
    <div className="relative min-h-screen bg-gray-50 font-sans py-24 px-4 sm:px-6 lg:px-8 text-gray-900 overflow-hidden">

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            We proudly collaborate with our academic and community partners.
          </p>
        </div>

        {/* Partners Grid */}
        <div
          className="
        grid gap-10
        grid-cols-1
        sm:grid-cols-2
        max-w-4xl
        mx-auto
      "
        >
          {partners.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
            group relative mx-auto w-full max-w-[360px]
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-md
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
            >
              {/* Partner Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  className={`
                px-4 py-1 text-xs font-medium tracking-wide rounded-full border shadow-sm
                ${p.type === "academic"
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-green-50 text-green-700 border-green-200"
                    }
              `}
                >
                  {p.type === "academic"
                    ? "Academic Partner"
                    : "Community Partner"}
                </span>
              </div>

              {/* Logo */}
              <div className="aspect-[16/9] flex items-center justify-center px-6 py-8">
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-[90%] max-w-[95%] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Name */}
              <div className="pb-6 text-center px-4">
                <p className="text-sm font-semibold text-gray-800">
                  {p.name}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
