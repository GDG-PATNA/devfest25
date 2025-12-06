import React from "react";
import TicketDesktop from "/src/assets/Ticket-desktop.svg";
import TicketMobile from "/src/assets/Ticket-mobile.svg";
import { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};
const TicketSection = () => {
  return (
    <div className="px-4 lg:px-25 bg-[#F8EFDC] ">
      <div className="py-25 sm:px-10 border-3 border-[#AFAA9F] border-t-0 border-b-0 border-solid flex flex-col justify-center items-center">
        <div className="bg-[#3a3a3a] w-full rounded-[50px] border-b-6 border-white shadow-[0px_3px_0px_4px_black] flex flex-col justify-start items-center overflow-hidden">
          <h1 className="text-white text-center pt-10 text-2xl font-product-bold  md:text-4xl font-bold ">
            Get Your Ticket Now
          </h1>
          <p className="text-white text-sm mt-1 prociono-regular md:mt-3 md:text-2xl">
            Join the Community-Led Event of the Year
          </p>
          <a
            href="#ticket"
            className="bg-[#F4D737] font-product-bold mt-8 md:mt-15 md:mb-15 px-10 py-2 rounded-full border-2 border-black shadow-[0px_2px_0px_2px_black] hover:filter-[drop-shadow(0_0_0px_white)_drop-shadow(0_0_28px_#fff4)]  hover:shadow-none hover:translate-y-1 duration-200 ease-out text-2xl"
          >
            Get Ticket!
          </a>
          <Magnet padding={100} disabled={false} magnetStrength={25}>
            <img
            className="w-full pb-10 hidden md:flex filter-[drop-shadow(0_0_0px_white)_drop-shadow(0_0_28px_#fff5)]"
            src={TicketDesktop}
            alt="devfest patna 2025 ticket mock"
          />
          </Magnet>
          
          <img
            className="-mt-25 w-2/3 translate-y-25 flex md:hidden filter-[drop-shadow(0_0_0px_white)_drop-shadow(0_0_28px_#fff5)]"
            src={TicketMobile}
            alt=""
          />
        </div>
      </div>
      <div className="border-t-3  border-dashed border-[#AFAA9F]"></div>
    </div>
  );
};

export default TicketSection;
