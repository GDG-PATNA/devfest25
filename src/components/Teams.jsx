import React from 'react'
import Card from './card/Card'
import GDGCircular from './circularlogo/GDGCircular';
import { useRef, useEffect, useState } from 'react';
import AnuragVerma from "../assets/team/AnuragVerma.jpeg";
import BarkhaAgarwal from "../assets/team/BarkhaAgarwal.jpeg";
// import HarshKapoor from "../assets/team/HarshKapoor.jpg";
import AmikarAnanya from "../assets/team/Amikar.jpg";
import MohammadZaidKhan from "../assets/team/Zaid.jpg";
// import AshishKumar from "../assets/team/AshishKumar.jpg";
// import shivi from "../assets/team/shivi.jpeg" ;
import siddharthaRoy from "../assets/team/siddharthaRoy.jpg";
import rohanRaj from "../assets/team/rohanRaj.jpg";
import nameeraAhmad from "../assets/team/nameeraAhmad.jpeg";
import rohitKumarSharma from "../assets/team/rohitKumarSharma.jpeg";
import rupamKumari from "../assets/team/rupamKumari.jpg";
import AsadAli from "../assets/team/AsadAli.jpg";
import SumanPrakash from "../assets/team/Sumanprakash.jpg";
import mdAlkama from "../assets/team/mdAlkama.jpeg";
import vishalKumar from "../assets/team/VishalKumar.jpg";
import ayushRoy from "../assets/team/ayushRoy.jpeg";
// import ayushKumar from "../assets/team/ayushKumar.jpg";
import Nishant from "../assets/team/Nishant.jpg";
// import AnjaliDipti from "../assets/team/AnjaliDipti.jpg";
import ShivangiGupta from "../assets/team/Shivangi.jpg";
import kunalSinha from "../assets/team/KunalSinha.jpg";
import SunnyKumar from "../assets/team/SunnyKumar.jpg";
import ShashankBharti from "../assets/team/Shashankbharti.png";
import Vishwajeet from "../assets/team/Vishwajeet.jpg";
import NikhilRaj from "../assets/team/NikhilRaj.jpg";
import ShivamKumar from "../assets/team/ShivamKumar.jpg";
import TanyaGupta from "../assets/team/tanyaGupta.jpg";
import HarshRaj from "../assets/team/HarshRaj.jpg";
import VikashKumar from "../assets/team/VikashKumar.jpg";
import TanyaJha from "../assets/team/TanyaJha.jpg";
import NigamKumar from "../assets/team/NigamKumar.jpg";
import Keshvisri from "../assets/team/Keshvisri.jpg";
import RiyaKumari from "../assets/team/RiyaKumari.jpg";
import RajkantKumar from "../assets/team/RajkantKumar.jpg";
import AlokRaj from "../assets/team/AlokRaj.jpg";
import SyedImran from "../assets/team/SyedImran.jpg";
import RitikaSinha from "../assets/team/RitikaSinha.jpg";
import VikashKumarSingh from "../assets/team/VikashKumarSingh.jpg";
import AsifEkhlaque from "../assets/team/AsifEkhlaque.jpg";
import SushilKumar from "../assets/team/SushilKumar.jpg";
import NikhilRanjan from "../assets/team/NikhilRanjan.jpg";
import ObaidullahSadique from "../assets/team/ObaidullahSadique.jpg";
import AshutoshKumar from "../assets/team/AshutoshKumar.jpg";
import gdgCircle from '../assets/rounded_circle.svg'
import arrow from "../assets/arrow.001.png";
import noiseTexture from '../assets/noiseTexture.png'


const teamData = [
  {
    id: 1,
    img: AnuragVerma,
    name:"Anurag Verma",
    role:"Organizer",
    linkedin:"https://www.linkedin.com/in/anuragver/",
    twitter:"https://twitter.com/anuragceg`",
    color: 1,
  },
  {
    id: 2,
    img: BarkhaAgarwal,
    name: "Barkha Agarwal",
    role: "Co-Organizer",
    color: 2,
  },
  {
    id: 3,
    img: mdAlkama,
    name: "Md Alkama",
    role: "Tech Co-Lead",
    linkedin: "https://www.linkedin.com/in/md-alkama/",
    github: "https://github.com/mdalkama",
    color: 1,
  },
  {
    id: 4,
    img: ayushRoy,
    name: "Ayush Roy",
    role: "Tech Co-Lead",
    linkedin: "https://www.linkedin.com/in/ayushroyl",
    instagram: "https://instagram.com/ayushroyl",
    color: 2,
  },
  {
    id: 5,
    img: AmikarAnanya,
    name: "Amikar Ananya",
    role: "Operation & Management Lead",
    bgi: "/images/team5.jpg",
    linkedin: "https://www.linkedin.com/in/amikar-a-57b949203",
    twitter: "https://twitter.com/Tlast_prime",
    color: 3,
  },
   {
    id: 6,
    img: TanyaGupta,
    name: "Tanya Gupta",
    role: "Operation & Management Co-Lead",
    bgi: "/images/team11.jpg",
    color: 4,
    linkedin: "https://www.linkedin.com/in/chulbulitanya/",
    twitter: "https://x.com/TanyaGupta25?t=kaK0AZ5BVXlZI9w3n6xugg&s=09",
  },
  {
    id: 7,
    img: Nishant,
    name: "Nishant Kumar",
    role: "Content Creation Lead",
    bgi: "/images/team6.jpg",
    linkedin: "https://www.linkedin.com/in/nishant-kumar-b45248244/",
    color: 1,
  },
    {
    id: 8,
    img: rupamKumari,
    name: "Rupam Kumari",
    role: "Content Creation Co-Lead",
    bgi: "/images/team12.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/rupam-kumari-8a1800321/",
  },
  {
    id: 9,
    img: siddharthaRoy,
    name: "Siddhartha Roy",
    role: "Network & Outreach Lead",
    linkedin: "https://www.linkedin.com/in/siddhartha-roysr335/",
    twitter: "https://x.com/bytesid33?t=gNj6Gv0mndhxLLzQop0JMg&s=09",
    color: 3,
  },
  {
    id: 10,
    img: AsadAli,
    name: "Asad ali",
    role: "Network & Outreach Co-Lead",
    bgi: "/images/team12.jpg",
    color: 4,
    linkedin: "https://www.linkedin.com/in/asas-ali-a33232289/",
    twitter: "https://x.com/inzemam_04",
  },
  {
    id: 11,
    img: HarshRaj,
    name: "Harsh Raj",
    role: "Photography & Videography Lead",
    color: 1,
    linkedin: "https://www.linkedin.com/in/harsh-raj-9981b428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/mr_harshu_sf_07?igsh=MWhrMzVqbnFoNXdsNQ==",
  },
  {
    id: 12,
    img: AsifEkhlaque,
    name: "Asif Ekhlaque",
    role: "Photography & Videography Co-Lead",
    bgi: "/images/team12.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/asifekhlaque",
    instagram: "https://www.instagram.com/asif_0484_",

  },
  {
    id: 13,
    img: nameeraAhmad,
    name: "Nameera Ahmad",
    role: "Design Lead",
    color: 3,
    linkedin: "https://www.linkedin.com/in/nameera015/",
    twitter: "https://x.com/names15__"
  },
  {
    id: 14,
    img: rohitKumarSharma,
    name: "Rohit Kumar Sharma",
    role: "Design Co-Lead",
    bgi: "/images/team12.jpg",
    color: 4,
    linkedin: "https://www.linkedin.com/in/0xrohitsharma",
    twitter: "https://x.com/0xrohit_sharma",
  },
  {
    id: 15,
    img: SumanPrakash,
    name: "Suman P. Narayan",
    role: "Operation Lead",
    color: 1,
    linkedin: "https://www.linkedin.com/in/suman-narayan-221563221",
    
  },
  {
    id: 16,
    img: ShivangiGupta,
    name: "Shivangi Gupta",
    role: "Website Developer",
    bgi: "/images/team16.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/shivangi-gupta-6b9991268/",
    github: "https://github.com/shivangi0010",
  },
  {
    id: 17,
    img: vishalKumar,
    name: "Vishal Kumar",
    role: "Website Developer",
    bgi: "/images/team17.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/thecuriousvishal",
    github: "https://github.com/Thecuriousvishal",
  },
  {
    id: 18,
    img: MohammadZaidKhan,
    name: "Mohammad Zaid Khan",
    role: "Website Developer",
    bgi: "/images/team18.jpg",
    color: 3,
    linkedin: "https://www.linkedin.com/in/mohammad-zaid-khan-547534230",
    twitter: "https://x.com/zaidkhan_0123?s=09",
  },
  {
    id: 19,
    img: kunalSinha,
    name: "Kunal Sinha",
    role: "Website Developer",
    bgi: "/images/team19.jpg",
    color: 4,
    linkedin: "https://www.linkedin.com/in/kunal-sinha-8bb77029a/",
    github: "https://github.com/oldsoulmz",
    twitter: null,
    instagram: null
  },
  {
    id: 20,
    img: SunnyKumar,
    name: "Sunny Kumar",
    role: "Website Developer",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/sunny-kumar-a06484297/",
    instagram: "https://www.instagram.com/sunnykr_sde/",
  },
   {
    id: 42,
    img: ShivamKumar,
    name: "Shivam Kumar",
    role: "Website Developer",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/shivadhruva",
    github: "https://github.com/shivaarajput",
  },
   {
    id: 43,
    img: SyedImran,
    name: "Syed Imran Hassan",
    role: "Website Developer",
    bgi: "/images/team20.jpg",
    color: 3,
    linkedin: "https://www.linkedin.com/in/syed-hassan-8619162b9?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/0110__syed",
  },
  {
    id: 21,
    img: VikashKumarSingh,
    name: "Vikash Kr. Singh",
    role: "Operation & Management",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/vikash-kumar-singh-1ab36024b",
    instagram: "https://www.instagram.com/vikash_singh_kushwaha01?igsh=MXJ0ZndxMHFqZzgzbA==",
  },
  {
    id: 22,
    img: RitikaSinha,
    name: "Ritika Sinha",
    role: "Operation & Management",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/ritika-sinha-88b351254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/sinha_ritika_04?igsh=MWJ6cmxlMHV2d3FweA==",
  },
  {
    id: 23,
    img: NikhilRanjan,
    name: "Nikhil Ranjan",
    role: "Operation & Management",
    bgi: "/images/team20.jpg",
    color: 3,
    linkedin: "https://www.linkedin.com/in/dcoder-nikhil",
    github: "https://github.com/dcoder-nikhil0",
  },
  {
    id: 24,
    img: Vishwajeet,
    name: "Vishwajeet",
    role: "Operation & Management",
    bgi: "/images/team20.jpg",
    color: 4,
  
  },
  {
    id: 25,
    img: Keshvisri,
    name: "Keshvisri",
    role: "Content Writer",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "http://www.linkedin.com/in/keshvisri032006",
    
  },
  {
    id: 26,
    img: TanyaJha,
    name: "Tanya Jha",
    role: "Content Writer",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/tanyaaajha18",
   
  },
  {
    id: 27,
    img: rohanRaj,
    name: "Rohan Raj",
    role: "Network & Outreach",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/rohanraj8467/",
  },
  {
    id: 28,
    img: VikashKumar,
    name: "Vikash Kumar",
    role: "Network & Outreach",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/vikash-kumar-619538258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/vikash__95_?igsh=MXZyZjEzajgxYWo0Mg==",
  },
  {
    id: 29,
    img: AshutoshKumar,
    name: "Ashutosh Kumar",
    role: "Network & Outreach",
    bgi: "/images/team20.jpg",
    color: 3,
    linkedin: "https://www.linkedin.com/in/ashutosh80",
  },
  {
    id: 30,
    img: VikashKumarSingh,
    name: "Vikash Kumar Singh",
    role: "Photography",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/vikash-kumar-singh-1ab36024b",
    instagram: "https://www.instagram.com/vikash_singh_kushwaha01?igsh=MXJ0ZndxMHFqZzgzbA==",
  },
  {
    id: 31,
    img: SushilKumar,
    name: "Sushil Kumar",
    role: "Photography",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/shushil-kumar-53993326a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/maurya_shushil_kushwaha?igsh=c3dkM3Ywa3R6ejZl",
  },
  {
    id: 32,
    name: "Pranav Raj",
    role: "Photography",
    bgi: "/images/team20.jpg",
    color: 3,
    linkedin: "",
   
  },
  {
    id: 33,
    name: "Tanya Suman",
    role: "Photography",
    bgi: "/images/team20.jpg",
    color: 4,
    linkedin: "https://www.linkedin.com/in/tanya-suman-65a4152a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    
  },
  {
    id: 34,
    name: "Sujeet Kumar",
    role: "Video Production",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/sujeet-kumar-1521a2260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    
  },
  {
    id: 35,
    img: RajkantKumar,
    name: "Rajkant Kumar",
    role: "Video Production",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/rajkant-kumar-4161b0335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/mr._incredible_45?utm_source=qr&igsh=Y2FtaHc5cjh5am1w",
  },
  {
    id: 36,
    name: "Aman Gupta",
    role: "Video Production",
    bgi: "/images/team20.jpg",
    color: 3,
    linkedin: "https://www.linkedin.com/in/aman-gupta-212288322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: null,
    twitter: "https://twitter.com/aisha",
    instagram: null
  },
  {
    id: 44,
    img: ObaidullahSadique,
    name: "Obaidullah Sadique",
    role: "Video Production",
    bgi: "/images/team20.jpg",
    color: 4,
    linkedin: "https://www.linkedin.com/in/obaidullah-sadique-29ab02285?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sadique_11?igsh=dTcwcXQ1bmZ1d3A1",
  },
  {
    id: 37,
    img: ShashankBharti,
    name: "Shashank Bharti",
    role: "Graphic Designer",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/shashank-bharti-iitp/",
    github: "https://github.com/Shashank-Bharti",
  },
    {
    id: 38,
    img: NikhilRaj,
    name: "Nikhil Raj",
    role: "Graphic Designer",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/thenikhilraj",
    github: "https://github.com/TheNikhilRaj",
  },
    {
    id: 39,
    img: AlokRaj,
    name: "Alok Raj",
    role: "Graphic Designer",
    bgi: "/images/team20.jpg",
    color: 3,
    linkedin: "http://www.linkedin.com/in/alokraj-cse",
    github: "https://github.com/A1okRaj",
  },
    {
    id: 40,
    img: RiyaKumari,
    name: "Riya Kumari",
    role: "Social Media Management",
    bgi: "/images/team20.jpg",
    color: 1,
    linkedin: "https://www.linkedin.com/in/riya-kumari-19ab0836b/",
    
  },
    {
    id: 41,
    img: NigamKumar,
    name: "Nigam Kumar",
    role: "Social Media Management",
    bgi: "/images/team20.jpg",
    color: 2,
    linkedin: "https://www.linkedin.com/in/nigam-kumar-b78a4b286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/nigam_kumarsingh?igsh=cDNzZXZnYmF5aTZ6",
  }
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
    <div id="team" ref={containerRef} className="bg-[#F8EFDC] mt-1 sm:px-4 px-4 lg:px-25 lg:rounded-t-[5rem] rounded-t-[3rem] overflow-clip font-product-regular">
      <div className=' border-b-3 border-[#AFAA9F] flex flex-col md:flex-row justify-between items-start'>
        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="w-full pt-0 z-1 md:w-1/3 border-3 duration-300 ease-in-out border-[#AFAA9F] h-fit border-t-0 sticky top-0 border-b-0"
        >
          <div className='bg-[#F8EFDC] flex justify-center items-center flex-wrap gap-6 size- pt-2 md:p-6 border-3 border-[#AFAA9F] border-l-0 border-b-3 border-r-0 border-dashed mt-15 md:mt-25 flex-col' >
            <p className="text-[50px] md:text-[70px] mr-10 mb-2">Our</p>
            <p className="rounded-full border-3 border-black text-[50px] md:text-[70px] leading-[0.8] px-10 py-3 -rotate-6 active:rotate-0 hover:rotate-0 duration-200 ease-linear font-product-bold -translate-y-11 shadow-[0px_4px_0px_1px_black] bg-linear-to-b from-blue-600 to-blue-300 text-gray-900 font-bold overflow-hidden">
              <p className='relative z-1'>Team</p>
              <img src={noiseTexture} alt="" className="absolute left-0 top-0 z-0 opacity-80 mix-blend-plus-lighter pointer-events-none" />
            </p>
          </div>
          <div className='md:hidden flex h-10 bg-linear-to-t from-transparent to-[#f0eadb]'></div>

          <div className='hidden md:flex w-full tracki border-3 border-[#AFAA9F] border-l-0 border-r-0 mt-5 py-5'>
            <div className='flex justify-center text-justify items-center flex-wrap border-3 border-[#AFAA9F] border-l-0 border-r-0 border-dashed py-10 px-10 text-[20px] leading-9'>
              Meet the people who make DevFest possible, students and professionals working together across teams to create an unforgettable event
            </div>
          </div>

          <div
            ref={arrowAreaRef}
            className='hidden md:flex w-full  items-center justify-center py-10 '
          >
            {/* <GDGCircular /> */}
            <img src={gdgCircle} alt="GDG Circular Logo" className="size-80 animate-spin  [animation-duration:6s] "/>
            <div ref={arrowRef} className='absolute animate-spin-slow'>
              <img src={arrow} alt="s" className='duration-300 ease-in-out size-40'/>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE — HEIGHT MATCHES LEFT */}
        <div
          className="w-full md:w-[60%] border-3 border-[#AFAA9F] border-t-0 border-b-0 md:pt-25 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar-width:0]"
        >
          {/* overall lead */}
          <p className='w-full border-t-0 md:border-t-3 text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed pt-0 pb-10 md:py-10 border-l-0 border-r-0'>Overall Lead</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 border-b-2 border-[#AFAA9F] mb-10'>
            {
              teamData.slice(0, 2).map(data => (
                <Card key={data.id} size="l" data={data} />
              ))
            }
          </div >
          {/* Team Leads */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Team Leads</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 border-b-2 border-[#AFAA9F] mb-10'>
            {
              teamData.slice(2, 15).map(data => (
                <Card key={data.id} size="l" data={data} color={data.id % 4} />
              ))
            }
          </div >
          {/* Technical Team */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Technical Team</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(15, 22).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
           {/* Operation & Management */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Operation & Management</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(22, 26).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
          {/* Content Creation */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Content Creation</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(26, 28).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
          {/* Network & Outreach */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Network & Outreach</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(28, 31).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
          {/* Photography & Videography */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Photography & Videography</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(31, 39).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
          {/* Design Team */}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Design Team</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(39, 42).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
          {/* Social Media Management*/}
          <p className='w-full text-center text-4xl prociono-regular font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Social Media Management</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-10 '>
            {
              teamData.slice(42, 44).map((data) => (
                <Card key={data.id} size="m" data={data} color={data.id % 4} />
              ))
            }
          </div >
        </div>
      </div>
    </div>
  )
}

export default Teams;
