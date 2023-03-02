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
          <button className='hover:border border-[#888888] focus:ring-2 focus:ring-[#888888] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className="bg-[#0F140D] h-4 w-4 rounded-full"></div>
          </button>
          <button className='hover:border border-[#888888] focus:ring-2 focus:ring-[#888888] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className="bg-[#DD8560] h-4 w-4 rounded-full"></div>
          </button>
          <button className='hover:border border-[#888888] focus:ring-2 focus:ring-[#888888] h-6 w-6 rounded-full flex items-center justify-center'>
            <div className="bg-[#E1E0DB] h-4 w-4 rounded-full"></div>
          </button>
        </div>
        <div className='flex items-center gap-2 ml-5'>
          <span className='text-[12px]'>Size</span>
          <button className='type-size'>S</button>
          <button className='type-size'>M</button>
          <button className='type-size'>L</button>
        </div>
      </div>
    </>
  )
}

export default Variation