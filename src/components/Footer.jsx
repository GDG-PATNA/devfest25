import React from "react";
import { Linkedin, Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100">
      {/* Top border */}
      <div className="border-t border-gray-400"></div>

      {/* Main footer content */}
      <div className="px-12 py-16">
        <div className="grid grid-cols-2 gap-16">
          {/* Left section */}
          <div className="space-y-8">
            {/* Logo and heading */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 rounded"></div>
                <h3 className="text-xl font-semibold text-white">
                  Google Developers Group Patna
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Google Developer Groups Patna is an initiative that brings together
              developers across Bihar to learn, share knowledge, and build with
              Google technologies.
            </p>

            {/* Contact info */}
            <div className="text-sm">
              <span className="text-gray-400">Reach out to us at </span>
              <a
                href="https://telegram.me/gdgpatna"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                telegram @gdgpatna
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="space-y-8">
            {/* Useful links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                USEFUL LINKS
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Devfest 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Devfest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Connect with us</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                  aria-label="Telegram"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center py-6 text-gray-500 text-sm border-t border-gray-700">
        © Google Developer Groups Patna 2025
      </div>
    </footer>
  );
}
