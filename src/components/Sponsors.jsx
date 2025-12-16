import React from "react";
import ecoWater from "../assets/sponsors/ecowater.png";
import googleDev from "../assets/sponsors/googleDevelopers.png"
import appycrown from "../assets/sponsors/appycrown.png"

const sponsors = [
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
    <section className="bg-[#3A3A3A] py-16 text-center text-white">
      <h2 className="text-4xl font-semibold">
        Our <span className="font-bold">Sponsors</span>
      </h2>

      <p className="mt-4 text-gray-300">
        Thanks to our sponsors for supporting us in making{" "}
        <span className="font-semibold">DevFest</span> spectacular.
      </p>

      <div className="w-full border-b border-dotted border-gray-500 my-10" />

      <div className="grid gap-8 max-w-6xl mx-auto px-6 justify-center
                [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {sponsors.map((s) => (
          <a
            key={s.id}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f4e9d6] rounded-xl shadow-md p-6 flex items-center justify-center
            hover:scale-105 transition cursor-pointer"
          >
            <img
              src={s.img}
              alt="Sponsor Logo"
              className="h-28 object-contain"
            />
          </a>
        ))}
      </div>

      <div className="w-full border-b border-dotted border-gray-500 mt-10" />
    </section>
  );
}
