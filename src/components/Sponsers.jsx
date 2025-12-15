import React from "react";

const sponsors = [
  { id: 1, img: "/logo192.png" },
  { id: 2, img: "/logo192.png" },
  { id: 3, img: "/logo192.png" },
  { id: 4, img: "/logo512.png" },
  { id: 5, img: "/logo512.png" },
  { id: 6, img: "/logo512.png" },
  { id: 7, img: "/logo512.png" },
  { id: 8, img: "/logo512.png" },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {sponsors.map((s) => (
          <div
            key={s.id}
            className="bg-[#f4e9d6] rounded-xl shadow-md p-6 flex items-center justify-center hover:scale-105 transition"
          >
            <img src={s.img} alt="Sponsor Logo" className="h-24 object-contain" />
          </div>
        ))}
      </div>

      <div className="w-full border-b border-dotted border-gray-500 mt-10" />
    </section>
  );
}
