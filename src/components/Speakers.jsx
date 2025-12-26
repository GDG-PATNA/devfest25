import React from 'react'
import Card from './card/Card'
import GDGCircular from './circularlogo/GDGCircular';
import { useRef, useEffect, useState } from 'react';
import gdgCircle from '../assets/rounded_circle.svg'
import arrow from "../assets/arrow.001.png";
import noiseTexture from '../assets/noiseTexture.png'
import { IoGlobeOutline } from "react-icons/io5";
import PankajRai from '../assets/team/PankajRai.jpeg'
import AprajitaVerma from '../assets/team/AprajitaVerma.jpeg'
import OmPrakash from '../assets/team/OmPrakash.jpg'
import VivekYadav from '../assets/team/VivekYadav.jpg'
import RajeshRanjan from '../assets/team/RajeshRanjan.png'
import ChandanTiwari from '../assets/team/ChandanTiwari.jpg'
import KumarSaurabh from '../assets/team/KumarSaurabh.png'



const teamData = [
  {
    id: 1,
    img: PankajRai,
    name: "Pankaj Rai",
    role: "GDG Android & Firebase",
    website: "sessionize.com/pankaj-rai",
    color: 1,
  },
  {
    id: 2,
    img: AprajitaVerma,
    name: "Aprajita Verma",
    role: "Frontend Architect @MYCOM",
    linkedin: "https://www.linkedin.com/in/aprajita-verma-982b6215b/",
    website: "https://sessionize.com/aprajita-verma",
    color: 2,
  },
  {
    id: 3,
    img: VivekYadav,
    name: "Vivek Yadav",
    role: "Enterprise Solutions Architect @FlutterFlow",
    linkedin: "https://www.linkedin.com/in/viveky259/",
    color: 3,
  },
  {
    id: 4,
    img: OmPrakash,
    name: "Om Prakash",
    role: "Founder & CEO of AppyCrown",
    linkedin: "https://www.linkedin.com/in/omprakash-it/",
    color: 4,
  },
  {
    id: 5,
    img: RajeshRanjan,
    name: "Rajesh Ranjan",
    role: "Deep Tech Angel Investor",
    bgi: "/images/team5.jpg",
    linkedin: "https://www.linkedin.com/in/rraajjeesshhr/",
    color: 1,
  },
    {
    id: 6,
    img: ChandanTiwari,
    name: "Chandan Tiwari",
    role: "Serial Entrepreneur",
    bgi: "/images/team5.jpg",
    linkedin: "https://www.linkedin.com/in/asalesguy/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: 2,
  },
    {
    id: 7,
    img: KumarSaurabh,
    name: "Kumar Saurabh",
    role: "Startup Evangelist",
    bgi: "/images/team5.jpg",
    linkedin: "https://www.linkedin.com/in/kumarsaurabh08/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: 3,
  },
];

const Teams = () => {

  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, []);

  // Arrow Rotation Logic
  const arrowRef = useRef(null);
  const arrowAreaRef = useRef(null);
  const containerRef = useRef(null);
  const arrowCenterRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  const updateArrowCenter = () => {
    if (!arrowRef.current) return;
    const rect = arrowRef.current.getBoundingClientRect();
    arrowCenterRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  };

  useEffect(() => {
    updateArrowCenter();
    window.addEventListener("resize", updateArrowCenter);
    return () => window.removeEventListener("resize", updateArrowCenter);
  }, []);

  useEffect(() => {
    const area = arrowAreaRef.current;
    if (!area) return;

    const handleMove = (e) => {
      const { x, y } = arrowCenterRef.current;
      const angleDeg = Math.atan2(e.clientY - y, e.clientX - x) * (180 / Math.PI);

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (arrowRef.current) {
          arrowRef.current.style.transform = `rotate(${angleDeg}deg)`;
        }
      });
    };

    const resetRotation = () => {
      if (arrowRef.current) {
        arrowRef.current.style.transform = "rotate(0deg)";
      }
    };

    area.addEventListener("mousemove", handleMove);
    area.addEventListener("mouseleave", resetRotation);

    return () => {
      area.removeEventListener("mousemove", handleMove);
      area.removeEventListener("mouseleave", resetRotation);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div id="speakers" ref={containerRef} className="bg-[#F8EFDC] mt-1 sm:px-4 px-4 lg:px-25 lg:rounded-[5rem] rounded-[3rem] overflow-clip font-product-regular">
      <div className=' border-[#AFAA9F] flex flex-col md:flex-row justify-between items-start'>
        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="w-full pt-0 z-1 md:w-1/3 border-3 duration-300 ease-in-out border-[#AFAA9F] h-fit border-t-0 sticky top-0 border-b-0"
        >
          <div className='bg-[#F8EFDC] flex justify-center items-center flex-wrap gap-6 size- pt-2 md:p-6 border-3 border-[#AFAA9F] border-l-0 border-b-3 border-r-0 border-dashed mt-15 md:mt-25 flex-col' >
            <p className="text-[50px] md:text-[70px] mr-10 mb-2">Our</p>
            <p className="rounded-full border-3 border-black text-[50px] md:text-[70px] leading-[0.8] px-10 py-3 -rotate-6 active:rotate-0 hover:rotate-0 duration-200 ease-linear font-product-bold -translate-y-11 shadow-[0px_4px_0px_1px_black] bg-linear-to-b from-yellow-600 to-gray-300 text-gray-900 font-bold overflow-hidden">
              <p className='relative z-1'>Speakers</p>
              <img src={noiseTexture} alt="" className="absolute left-0 top-0 z-0 opacity-80 mix-blend-plus-lighter pointer-events-none" />
            </p>
          </div>
          <div className='md:hidden flex h-10 bg-linear-to-t from-transparent to-[#f0eadb]'></div>

          <div className='hidden md:flex w-full tracki border-3 border-[#AFAA9F] border-l-0 border-r-0 mt-5 py-5'>
            <div className='flex justify-center text-justify items-center flex-wrap border-3 border-[#AFAA9F] border-l-0 border-r-0 border-dashed py-10 px-10 text-[20px] leading-9'>
              Hear from industry experts, innovators, and community leaders sharing insights that can elevate your skills and perspective.
            </div>
          </div>

          <div
            ref={arrowAreaRef}
            className='hidden md:flex w-full  items-center justify-center py-10 '
          >
            {/* <GDGCircular /> */}
            <img src={gdgCircle} alt="GDG Circular Logo" className="size-80 animate-spin  [animation-duration:6s] " />
            <div ref={arrowRef} className='absolute animate-spin-slow'>
              <img src={arrow} alt="s" className='duration-300 ease-in-out size-40' />

            </div>
          </div>
        </div>

        {/* RIGHT SIDE — HEIGHT MATCHES LEFT */}
        <div
          className="w-full md:w-[60%] border-3 border-[#AFAA9F] border-t-0 border-b-0 md:pt-25 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar-width:0]"
        >
          {/* Speakers */}
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 border-y-2 border-[#AFAA9F] mb-10'>
            {
              teamData.map(data => (
                <Card key={data.id} size="l" data={data} />
              ))
            }
          </div >
        </div>
      </div>
    </div>
  )
}

export default Teams;
