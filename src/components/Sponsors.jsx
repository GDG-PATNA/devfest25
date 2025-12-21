import React from "react";
import ecoWater from "../assets/sponsors/ecowater.png";
import googleDev from "../assets/sponsors/googleDevelopers.png";
import appycrown from "../assets/sponsors/appycrown.png";

const sponsors = [
  { id: 1, img: googleDev, link: "https://developers.google.com" },
  { id: 2, img: ecoWater, link: "https://www.ecowaterofficial.com" },
  { id: 3, img: appycrown, link: "https://appycrown.com/" },
];

export default function Sponsors() {
  return (
    <section className="bg-[#3A3A3A] py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="font-bold text-[#f4e9d6]">Sponsors</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-300">
            Thanks to our sponsors for supporting{" "}
            <span className="font-semibold text-white">DevFest</span>.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {sponsors.map((s) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mx-auto w-full max-w-[320px]
                bg-[#f4e9d6]
                rounded-2xl
                shadow-md shadow-black/25
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="aspect-[16/9] flex items-center justify-center px-4 py-3">
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
