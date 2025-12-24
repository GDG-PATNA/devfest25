import React from "react";
import ecoWater from "../assets/sponsors/ecowater.png";
import googleDev from "../assets/sponsors/googleDevelopers.png";
import appycrown from "../assets/sponsors/appycrown.png";
import ism from "../assets/sponsors/ism.png";

const sponsors = [
  {
    id: 0,
    img: ism,
    link: "https://www.ism.edu",
    type: "gold",
  },
  {
    id: 1,
    img: googleDev,
    link: "https://developers.google.com",
  },
  {
    id: 2,
    img: ecoWater,
    link: "https://www.ecowaterofficial.com",
  },
  {
    id: 3,
    img: appycrown,
    link: "https://appycrown.com/",
  },
];

export default function Sponsors() {
  return (
    <section className="bg-[#3A3A3A] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="font-bold text-[#f4e9d6]">Sponsors</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-300">
            Thanks to our sponsors for supporting{" "}
            <span className="font-semibold text-white">DevFest</span>.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
        ">
          {sponsors.map((s) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative mx-auto w-full max-w-[280px]
                bg-[#f4e9d6]
                rounded-2xl
                shadow-md shadow-black/30
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${s.type === "gold" ? "ring-2 ring-yellow-400 scale-[1.03]" : ""}
              `}
            >
              {/* Gold Badge */}
              {s.type === "gold" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="
                    px-4 py-1 text-xs font-semibold tracking-wider
                    bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                    text-black rounded-full shadow-md
                  ">
                    GOLD SPONSOR
                  </span>
                </div>
              )}

              {/* Logo Frame */}
              <div
                className={`
                  aspect-[16/9]
                  flex items-center justify-center
                  px-4 py-4
                  ${s.type === "gold"
                    ? "border-2 border-yellow-300 rounded-2xl m-2"
                    : ""}
                `}
              >
                <img
                  src={s.img}
                  alt="Sponsor Logo"
                  className="
                    max-h-[85%]
                    max-w-[92%]
                    object-contain
                  "
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
