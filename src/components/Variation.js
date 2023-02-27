import React from 'react'

const Variation = ({title, price}) => {
  return (
    <>
      <div className='space-y-1'>
          <h1 className="tracking-[4px] font-normal text-[16px]">
            Unisex
          </h1>
          <h3 className='font-normal text-[16px]'>
            {title}
          </h3>
          <p className='text-primary text-lg font-normal'>
            {price}
          </p>
      </div>
      <div className="mt-5 flex items-center">
        <div className='flex items-center gap-2'>
          <span className='text-[12px]'>Color</span>
          <button className='hover:border border-[#888888] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className="bg-[#0F140D] h-4 w-4 rounded-full"></div>
          </button>
          <button className='hover:border border-[#888888] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className="bg-[#DD8560] h-4 w-4 rounded-full"></div>
          </button>
          <button className='hover:border border-[#888888] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className="bg-[#E1E0DB] h-4 w-4 rounded-full"></div>
          </button>
        </div>
        <div className='flex items-center gap-2 ml-5'>
          <span className='text-[12px]'>Size</span>
          <button className='bg-[#333333] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className='text-white text-[10px]'>S</div>
          </button>
          <button className='bg-[#333333] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className='text-white text-[10px]'>M</div>
          </button>
          <button className='bg-[#333333] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className='text-white text-[10px]'>L</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Variation