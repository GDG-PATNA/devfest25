import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


const Card = ({ size = "l", data}) => {
  const sizeClass =
    size === "m"
      ? "w-40 h-54 rounded-xl"
      : size === "l"
        ? "w-64 h-90 rounded-3xl"
        : "w-40 h-54";


        const colorClass = 
          data.color == 1 ? "bg-[#FF7F7F]" :
            data.color == 2 ? "bg-[#FFC130]" :
              data.color == 3 ? "bg-[#64D68B]" :
                data.color == 4 ? "bg-[#649FF5]" :
                  "bg-[#FF7F7F]";

        const borderColorClass =
          data.color == 1 ? "border-[#B01205]" :
            data.color == 2 ? "border-[#B48806]" :
              data.color == 3 ? "border-[#019A2E]" :
                data.color == 4 ? "border-[#3279F5]" :
                  "border-[#FF4C4C]";

        const shadowColorClass =
          data.color == 1 ? "shadow-[0px_3px_0px_1px_#B01205]" :
            data.color == 2 ? "shadow-[0px_3px_0px_1px_#B48806]" :
              data.color == 3 ? "shadow-[0px_3px_0px_1px_#019A2E]" :
                data.color == 4 ? "shadow-[0px_3px_0px_1px_#3279F5]" :
                  "--shadow-color: shadow-[0px_3px_0px_1px_#3279F5];";

  return (
    <div
      className={`
        ${sizeClass}
        ${colorClass}
        border-2 border-[#5A5F65] shadow-lg text-white font-bold
        flex flex-col overflow-hidden p-2 gap-1
        hover:-rotate-3 duration-300 ease-in-out hover:scale-105
      `}>

      {/* Image wrapper with gradient border */}
      <div className="p-0.5 rounded-lg">
        <div
          className={`w-full aspect-square rounded-xl bg-center bg-cover border-2 ${borderColorClass} ${shadowColorClass}`}
          style={{
            backgroundImage: `url(${data.img})`,
            boxShadow: `${borderColorClass} 0px 3px 0px 1px`,
            }}></div>
      </div>

      {/* Content */}
      <div className={`w-full h-full flex justify-between ${size === "l" ? "py-4" : "py-0"} px-1`}>
        <div>
          <h2 className={`
          ${size === "l" ? "text-xl" : "text-sm"}
            text-sm font-bold leading-tight`}>{data.name}</h2>
          <p className="text-xs opacity-80 font-medium mt-1 z-0">{data.role}</p>

          {data.desc && (
            <p className={`${size == "l" ? "text-[14px]" : "text-[12px]"} opacity-90 mt-2 leading-snug mr-4`}>{data.desc}</p>
          )}
        </div>

        <div className={`h-full flex ${size == "l" ? "gap-4" : "gap-2"} flex-col items-center justify-center text-white text-lg`}>
          {data.linkedin &&
            <a target="_blank" href={data.linkedin}>
              <FiLinkedin className={`${size == 'l' ? "text-3xl" : ""}`} />
            </a>
          }
          {data.github &&
            <a traget="_blank" href={data.github}>
              <FiGithub className={`${size == 'l' ? "text-3xl" : ""}`} />
            </a>
          }
          {data.twitter &&
            <a target="_blank" href={data.twitter}>
              <CiTwitter className={`${size == 'l' ? "text-3xl" : ""}`} />
            </a>
          }
          {data.instagram &&
            <a target="_blank" href={data.instagram}>
              <FaInstagram className={`${size == 'l' ? "text-3xl" : ""}`} />
            </a>
          }
          
          
        </div>
      </div>
    </div>
  );
};

export default Card;