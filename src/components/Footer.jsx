import React from "react";
import {
  FaLinkedin,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white px-6 md:px-20 py-16">

      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">

        {/* LEFT */}
        <div className="md:w-1/2">

          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="GDG Logo" className="w-12" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              Google Developers Group <span className="font-light">Patna</span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Google Developer Groups Patna is an initiative that brings
            together developers across Bihar to learn, share knowledge, and
            build with Google technologies.
          </p>

          <p className="mt-6 text-gray-300">
            Reach out to us at {" "}
            <a
              href="https://t.me/gdgpatna"
              target="_blank"
              className="text-blue-300 underline"
            >
              telegram @gdgpatna
            </a>
          </p>

        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end gap-12">

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="/devfest-2025" className="hover:text-white transition">
                  Devfest 2025
                </a>
              </li>

              <li>
                <a href="/community" className="hover:text-white transition">
                  Community
                </a>
              </li>

              <li>
                <a href="/about-devfest" className="hover:text-white transition">
                  About Devfest
                </a>
              </li>

              <li>
                <a href="/about-gdg" className="hover:text-white transition">
                  About GDG
                </a>
              </li>

            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR SOCIALS</h3>

            <div className="flex gap-5 text-3xl text-gray-300">

              <a href="https://www.linkedin.com/company/gdg-patna/posts/?feedView=all" target="_blank">
                <FaLinkedin className="hover:text-white transition cursor-pointer" />
              </a>

              <a href="https://t.me/gdgpatna" target="_blank">
                <FaTelegramPlane className="hover:text-white transition cursor-pointer" />
              </a>

              <a href="https://facebook.com/gdgpatna" target="_blank">
                <FaFacebookF className="hover:text-white transition cursor-pointer" />
              </a>

              <a href="https://instagram.com/gdgpatna" target="_blank">
                <FaInstagram className="hover:text-white transition cursor-pointer" />
              </a>

              <a href="https://twitter.com/gdgpatna" target="_blank">
                <FaTwitter className="hover:text-white transition cursor-pointer" />
              </a>

              <a href="https://youtube.com/@gdgpatna" target="_blank">
                <FaYoutube className="hover:text-white transition cursor-pointer" />
              </a>

            </div>
          </div>

        </div>
      </div>

      
      {/* Divider */}
      <div className="w-full border-t border-gray-600 mt-12 pt-6">
        <p className="text-center text-gray-400">
          © Google Developer Groups Patna 2025
        </p>
      </div>

    </footer>
  );
};

export default Footer;
