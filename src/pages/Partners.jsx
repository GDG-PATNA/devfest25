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
    <div className="font-product-regular pt-28 px-4 sm:px-6 lg:px-8 font-sans bg-[#3A3A3A] py-16 text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="font-bold text-[#f4e9d6]">Partners</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-300">
            We proudly collaborate with our academic and community partners.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          max-w-4xl
          mx-auto
        ">
          {partners.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative mx-auto w-full max-w-[360px]
                bg-[#f4e9d6]
                rounded-2xl
                shadow-md shadow-black/30
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Partner Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="
                  px-4 py-1 text-xs font-semibold tracking-wide
                  bg-black text-white rounded-full shadow-md
                ">
                  {p.type === "academic" ? "ACADEMIC PARTNER" : "COMMUNITY PARTNER"}
                </span>
              </div>

              {/* Logo */}
              <div className="aspect-[16/9] flex items-center justify-center px-6 py-6">
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-[90%] max-w-[95%] object-contain"
                />
              </div>

              {/* Name */}
              <div className="pb-5 text-center px-4">
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
