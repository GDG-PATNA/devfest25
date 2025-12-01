import React from 'react'
import Card from './card/Card'
import GDGCircular from './circularlogo/GDGCircular';
import { useRef, useEffect, useState } from 'react';

const teamData = [
  {
    id: 1,
    name: "Aarav Kumar",
    role: "Frontend Developer",
    bgi: "/images/team1.jpg",
    color: 1,
    linkedin: "https://linkedin.com/in/aarav",
    github: "https://github.com/aarav",
    twitter: null,
    instagram: null
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "UI/UX Designer",
    bgi: "/images/team2.jpg",
    color: 2,
    linkedin: "https://linkedin.com/in/riya",
    github: null,
    twitter: "https://twitter.com/riya",
    instagram: null
  },
  {
    id: 3,
    name: "Krish Patel",
    role: "Full Stack Developer",
    bgi: "/images/team3.jpg",
    color: 3,
    linkedin: "https://linkedin.com/in/krish",
    github: null,
    twitter: null,
    instagram: "https://instagram.com/krish"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Backend Engineer",
    bgi: "/images/team4.jpg",
    color: 4,
    linkedin: "https://linkedin.com/in/neha",
    github: "https://github.com/neha",
    twitter: null,
    instagram: null
  },
  {
    id: 5,
    name: "Manish Verma",
    role: "Android Developer",
    bgi: "/images/team5.jpg",
    color: 1,
    linkedin: "https://linkedin.com/in/manish",
    github: null,
    twitter: "https://twitter.com/manish",
    instagram: null
  },
  {
    id: 6,
    name: "Simran Kaur",
    role: "Machine Learning Engineer",
    bgi: "/images/team6.jpg",
    color: 2,
    linkedin: "https://linkedin.com/in/simran",
    github: null,
    twitter: null,
    instagram: "https://instagram.com/simran"
  },
  {
    id: 7,
    name: "Aditya Singh",
    role: "DevOps Engineer",
    bgi: "/images/team7.jpg",
    color: 3,
    linkedin: "https://linkedin.com/in/aditya",
    github: "https://github.com/aditya",
    twitter: null,
    instagram: null
  },
  {
    id: 8,
    name: "Shruti Nair",
    role: "Content Strategist",
    bgi: "/images/team8.jpg",
    color: 4,
    linkedin: "https://linkedin.com/in/shruti",
    github: null,
    twitter: "https://twitter.com/shruti",
    instagram: null
  },
  {
    id: 9,
    name: "Ritik Jha",
    role: "Cybersecurity Analyst",
    bgi: "/images/team9.jpg",
    color: 1,
    linkedin: "https://linkedin.com/in/ritik",
    github: null,
    twitter: null,
    instagram: "https://instagram.com/ritik"
  },
  {
    id: 10,
    name: "Ananya Das",
    role: "Cloud Architect",
    bgi: "/images/team10.jpg",
    color: 2,
    linkedin: "https://linkedin.com/in/ananya",
    github: "https://github.com/ananya",
    twitter: null,
    instagram: null
  },

  // --- 11 to 20 ---

  {
    id: 11,
    name: "Rohit Mehra",
    role: "React Developer",
    bgi: "/images/team11.jpg",
    color: 3,
    linkedin: "https://linkedin.com/in/rohit",
    github: null,
    twitter: "https://twitter.com/rohit",
    instagram: null
  },
  {
    id: 12,
    name: "Pooja Sinha",
    role: "Project Manager",
    bgi: "/images/team12.jpg",
    color: 4,
    linkedin: "https://linkedin.com/in/pooja",
    github: null,
    twitter: null,
    instagram: "https://instagram.com/pooja"
  },
  {
    id: 13,
    name: "Ayaan Malik",
    role: "Software Tester",
    bgi: "/images/team13.jpg",
    color: 1,
    linkedin: "https://linkedin.com/in/ayaan",
    github: "https://github.com/ayaan",
    twitter: null,
    instagram: null
  },
  {
    id: 14,
    name: "Megha Raj",
    role: "Flutter Developer",
    bgi: "/images/team14.jpg",
    color: 2,
    linkedin: "https://linkedin.com/in/megha",
    github: null,
    twitter: "https://twitter.com/megha",
    instagram: null
  },
  {
    id: 15,
    name: "Kunal Yadav",
    role: "UI Engineer",
    bgi: "/images/team15.jpg",
    color: 3,
    linkedin: "https://linkedin.com/in/kunal",
    github: null,
    twitter: null,
    instagram: "https://instagram.com/kunal"
  },
  {
    id: 16,
    name: "Ishita Roy",
    role: "Marketing Lead",
    bgi: "/images/team16.jpg",
    color: 4,
    linkedin: "https://linkedin.com/in/ishita",
    github: "https://github.com/ishita",
    twitter: null,
    instagram: null
  },
  {
    id: 17,
    name: "Harsh Thakur",
    role: "Blockchain Developer",
    bgi: "/images/team17.jpg",
    color: 1,
    linkedin: "https://linkedin.com/in/harsh",
    github: null,
    twitter: "https://twitter.com/harsh",
    instagram: null
  },
  {
    id: 18,
    name: "Nivedita Paul",
    role: "Data Analyst",
    bgi: "/images/team18.jpg",
    color: 2,
    linkedin: "https://linkedin.com/in/nivedita",
    github: null,
    twitter: null,
    instagram: "https://instagram.com/nivedita"
  },
  {
    id: 19,
    name: "Shantanu Bose",
    role: "Graphic Designer",
    bgi: "/images/team19.jpg",
    color: 3,
    linkedin: "https://linkedin.com/in/shantanu",
    github: "https://github.com/shantanu",
    twitter: null,
    instagram: null
  },
  {
    id: 20,
    name: "Aisha Karim",
    role: "Product Designer",
    bgi: "/images/team20.jpg",
    color: 4,
    linkedin: "https://linkedin.com/in/aisha",
    github: null,
    twitter: "https://twitter.com/aisha",
    instagram: null
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

  return (
    <div className="bg-[#F2EBDA] sm:px-5 lg:px-25 ">
      <div className='border-t-3 border-b-3 border-[#AFAA9F] flex justify-between items-start'>
        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="w-1/3 border-3 border-[#AFAA9F] h-fit border-t-0 sticky border-b-0"
        >
          <div className='flex justify-center items-center flex-wrap gap-6 p-6 border-3 border-[#AFAA9F] border-l-0 border-b-3 border-r-0 border-dashed mt-25 flex-col' >
            <p className="text-[80px] mr-20">Our</p>
            <p className="rounded-full border-3 border-black text-[80px] leading-[0.8] px-10 py-2 rotate-352 -translate-y-11 shadow-[0px_8px_0px_1px_black] bg-[#4285F4] text-white font-bold">
              Team
            </p>
          </div>

          <div className='w-full border-3 border-[#AFAA9F] border-l-0 border-r-0 mt-10 py-10'>
            <div className='flex justify-center items-center flex-wrap border-3 border-[#AFAA9F] border-l-0 border-r-0 border-dashed py-15 px-10 text-2xl [word-spacing:10px]'>
              Hear from industry experts, innovators, and community leaders sharing insights that can elevate your skills and perspective.
            </div>
          </div>

          <div className='w-full py-10'>
            <GDGCircular />
          </div>
        </div>

        {/* RIGHT SIDE — HEIGHT MATCHES LEFT */}
        <div
          className="w-[60%] overflow-y-auto border-3 border-[#AFAA9F] border-t-0 border-b-0 pt-25 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar-width:0]"
          style={{ height: leftHeight }}
        >
          {/* overall lead */}
          <p className='w-full text-center text-5xl font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Overall Lead</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 border-b-2 border-[#AFAA9F] mb-10'>
            {
              teamData.slice(0, 2).map(data => (
                <Card key={data.id} size="l" data={data} />
              ))
            }
          </div >
          {/* Team Leads */}
          <p className='w-full text-center text-5xl font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Team Leads</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 border-b-2 border-[#AFAA9F] mb-10'>
            {
              teamData.slice(2, 8).map(data => (
                <Card key={data.id} size="m" data={data} />
              ))
            }
          </div >
          {/* Core Team Members */}
          <p className='w-full text-center text-5xl font-bold border-3 border-[#AFAA9F] border-dashed py-10 border-l-0 border-r-0'>Core Team Members</p>
          <div className='flex justify-evenly items-center flex-wrap gap-6 p-6 pb-50 '>
            {
              teamData.slice(8, 20).map((data) => (
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
