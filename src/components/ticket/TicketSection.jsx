import React from 'react'

const TicketSection = () => {
    return (
        <div className='px-5 lg:px-25 bg-[#F2EBDA] '>
            <div className='py-25 sm:px-10 border-3 border-[#AFAA9F] border-t-0 border-b-0 border-solid flex flex-col justify-center items-center'>
                <div className='bg-[#373737] w-full rounded-[50px] border-b-6 border-white shadow-[0px_3px_0px_4px_black] flex flex-col justify-start items-center overflow-hidden'>
                    <h1 className='text-white text-center pt-10 text-2xl md:text-4xl font-bold '>Get Your Ticket Now</h1>
                    <p className='text-white text-sm mt-1 md:mt-3 md:text-2xl'>Join the Community-Led Event of the Year</p>
                    <a href="#ticket" className='bg-[#F4D737] mt-8 md:mt-15 md:mb-15 px-10 py-2 rounded-full border-2 border-black shadow-[0px_2px_0px_2px_black] text-2xl'>Get Ticket!</a>
                    <img className='w-2/3 pb-10 hidden md:flex filter-[drop-shadow(0_0_0px_white)_drop-shadow(0_0_22px_white)]' src="/src/assets/Ticket-desktop.svg" alt="" />
                    <img className='mt-0 w-2/3 translate-y-15 flex md:hidden filter-[drop-shadow(0_0_0px_white)_drop-shadow(0_0_22px_white)]' src="/src/assets/Ticket-mobile.svg" alt="" />
                </div>
            </div>
            <div className='border-t-3 -translate-y-5 mb-10 border-dashed border-[#AFAA9F]'></div>

        </div>
    )
}

export default TicketSection
