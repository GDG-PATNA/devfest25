import React from 'react'
import aiImpactImg from '../../assets/ai-impact-logo.png'

function AiImpactSummit() {
  return (
    <div className='className="lg:h-screen w-full flex px-4 md:px-32 bg-[#F7EEDC]  overflow-hidden'>
        <div className=" relative flex w-full border-l-3 items-center border-r-3  border-b-3 border-gray-500/50">
        <span className='border-r-3 pr-5 md:min-w-2xs hover:bg-amber-200 mx-5 flex items-center border-dashed border-gray-500/50 h-full'>
        <img src={aiImpactImg} className='w-xs md:p-6' alt="" />
        </span>
        <span className='p-5 lg:p-10 items-center '>
           <p className='md:text-6xl font-product-bold text-neutral-600'>
            Official <br className='md:hidden lg:hidden'/>Pre-Summit Event of the <br className='hidden lg:block'/> AI Impact Summit 2026
         </p>
        </span>
        </div>
        

    </div>
  )
}

export default AiImpactSummit