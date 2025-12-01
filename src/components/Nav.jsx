

/* =========================================================================
   FILE: ./components/Nav.jsx
   ========================================================================= */
import React, { useEffect, useState } from "react";
import devfestImg from "../assets/devfestImg2.png"
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
      <div className="md:w-[80%] md:mx-auto md:rounded-2xl w-full fixed md:top-3 top-0 flex items-center justify-between p-3 border-b-[1px] z-50 bg-[#EEEEEE] backdrop-blur-[4px]">
        <div className="flex items-center ml-6  ">
          <img
            src={devfestImg}
            alt="DevFest Patna 2025"
            className="w-[80%]  inline-block"
          />
        </div>
        <ul className="hidden lg:flex justify-evenly ">
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
          className="lg:hidden flex fles-1 justify-end items-center w-16"
        >
          <img
            src={toggle ? menu : close}
            className="animate-bounce w-12 text-black"
          />
          <div
            className={`fixed right-1 top-[3rem] p-2 rounded bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] z-50 ${toggle ? "hidden" : "flex"
              }`}
          >
            <ul
              className={`list-none relative ${toggle ? "hidden" : "flex"
                } flex flex-col justify-center item-end`}
            >
              {Menu.map((item, id) => (
                <li className="mx-1 my-2" key={id}>
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