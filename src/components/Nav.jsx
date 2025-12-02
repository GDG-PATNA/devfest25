

/* =========================================================================
   FILE: ./components/Nav.jsx
   ========================================================================= */
import React, { useEffect, useState } from "react";
import devfestImg from "../assets/devfestImg2.png"
import devfestLogo from "../assets/gdgDevfestLogo.svg"
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Menu = [
  { "title": "Home", "url": "/#home" },
  { "title": "Why DevFest", "url": "/#why-DevFest" },
  { "title": "Speakers", "url": "/#speakers" },
  { "title": "Sponsors", "url": "/#sponsors" },
  { "title": "Partners", "url": "/partners" },
  { "title": "Get Badge", "url": "/badge" },
  { "title": "Team", "url": "/#team" },
  { "title": "FAQ", "url": "/#faq" }
];

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <header className="flex justify-center">
      <div className="md:max-w-7xl md:min-w-2xl mt-2 md:mx-auto rounded-2xl w-[calc(100%-3.33%)] fixed md:top-3 py-4 top-0 flex items-center justify-between p-3 border-1 border-b-3 z-50 shadow-sm bg-gray-100/90 backdrop-blur-xs">
        <div className="flex items-center ml-6  ">
          <img
            src={devfestLogo}
            alt="DevFest Patna 2025"
            className="w-[calc(100%-34%)]  md:w-full    inline-block"
          />
        </div>
        <ul className="hidden font-product-regular lg:flex justify-evenly ">
          {Menu.map((item, id) => (
            <li className="mx-1" key={id}>
              <Link
                onClick={() => {
                  if (!item.url.includes("#")) {
                    window.scrollTo(0, 0);
                  }
                }}
                to={item.url}
                smooth
                className={`min-w-full whitespace-nowrap text-base font-semibold 
                  px-4 py-[6px] rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200`}

              >
                {item.title}
              </Link>

            </li>
          ))}
        </ul>

        {/* Responsive Nav for Mobiles */}
        <div
          onClick={() => setToggle(!toggle)}
          className="lg:hidden flex  justify-end items-center  w-16"
        >
          <img
            src={toggle ? menu : close}
            className="animate-bounce w-6 "
          />
          <div
            className={`fixed  top-[4rem] p-2 rounded-xl bg-black/80 backdrop-blur-xs z-50 ${toggle ? "hidden" : "flex"
              }`}
          >
            <ul
              className={`list-none relative ${toggle ? "hidden" : "flex"
                } flex flex-col justify-center item-end`}
            >
              {Menu.map((item, id) => (
                <li className="mx-1 font-product-regular my-2" key={id}>
                  <Link
                    onClick={() => {
                      if (!item.url.includes("#")) {
                        window.scrollTo(0, 0);
                      }
                    }}
                    to={item.url}
                    smooth
                    className={`min-w-full whitespace-nowrap font-semibold text-white
                    px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-200`}

                  >
                    {item.title}
                  </Link>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}