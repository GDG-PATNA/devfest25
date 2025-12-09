import React from "react";
import audienceImage from "../../assets/audience.png";


export default function About() {
  return (
    <>
      <div id="aboutDevFest" className="lg:h-screen w- flex px-4 md:px-32 bg-[#F7EEDC] lg:rounded-b-[5rem] rounded-b-[3rem] h-full overflow-hidden">
        <div className=" relative  border-l-3 border-r-3  border-gray-500/50">
          <div className="flex flex-col lg:flex-row lg:gap-20 border-t-3 border-gray-500/50 items-center justify-center  lg:px-6 lg:justify-between h-full w-full py-20 lg:py-0">
            <div
              id="left"
              className="w-full lg:border-l-3  lg:border-r-3   border-gray-500/50 border-dashed h-full"
            >
              <div className="flex  pt-15 pb-5 border-b-3 lg:px-6 px-2 border-t-3 lg:border-t-0 border-dashed border-gray-500/50 flex-col">
                <h2 className="font-product-regular lg:text-8xl  text-[4.2rem] tracking-tight  ">
                  What is
                </h2>
                <h1 className="lg:-mt-30 -mt-32 font-product-bold tracking-tight text-[4.2rem]  lg:text-8xl">
                  DevFest
                  <span className=" -mx-3 text-blue-500 lg:text-[14rem] text-[9rem] ">?</span>
                </h1>
                
              </div>
               <div className="flex  pt-15 px-6 border-gray-500/50 ">
                <div className=' lg:rounded-[3rem] rounded-4xl hover:-rotate-3 active:-rotate-6 duration-300 ease-in-out border-3 border-b-8 lg:p-4 p-1 bg-white overflow-clip' > 
                    <div className=" lg:rounded-4xl rounded-3xl border-3 overflow-clip">
                    <img src={audienceImage} alt="audience at urja auditorium devfest 2024 patna" className="bg-cover h-fit -my-1 pointer-events-none select-none " /></div>
                    </div>
              </div>
            </div>
            <div id="right" className="w-full lg:border-l-3 lg:pl-6 lg:ml-15  border-gray-500/50  h-full">
               <div className="px-3 border-dashed border-gray-500/50 lg:border-l-3 border-t-3 lg:border-t-0 border-b-3 lg:border-b-0 mt-10 lg:mt-0 md:mt-0  lg:border-r-3 h-full">
                    <div className="flex flex-col font-product-regular gap-6 pt-15 lg:pt-25 pb-5  px-3 border-dashed border-gray-500/50 h-full">
                        <p className="leading-relaxed  lg:text-xl text-justify">
                            <span className='font-product-bold'>DevFest</span> is an annual, globally recognized, decentralized tech conference hosted by <span className='font-product-bold'>Google Developer Groups (GDG)</span> across the world. Every year, thousands of developers, learners, and tech enthusiasts come together to explore cutting-edge technologies, exchange knowledge, and connect with industry experts.
                        </p>

                        <p className="leading-relaxed  lg:text-xl text-justify">
                            <span className='font-product-bold'>DevFest 2025</span> marks the 14th global edition and the 4th edition in <span className='font-product-bold'>Patna</span>, focused on meaningful learning, collaboration, and strengthening the developer community in <span className='font-product-bold'>Bihar</span>. Organized by <span className='font-product-bold'>GDG Patna</span>, this year’s <span className='font-product-bold'>DevFest</span> brings a full day of expert sessions, workshops, lightning talks, demos, and networking—offering real-world learning and a platform for tech enthusiasts across the state to connect and grow together.
                        </p>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
