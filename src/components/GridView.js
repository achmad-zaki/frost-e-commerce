import React from 'react'

const GridView = ({images, brand, title, price, view}) => {
  return (
    <>
    {view === false ?
      <div className='text-center'>
        <img src={images} alt="" />
        <div className="pt-5">
          {brand && 
            <h3 className='text-xs text-[#000000]'>{brand}</h3>
          }
          <h3 className='text-xs text-[#555555]'>{title}</h3>
          <p className="text-primary text-[15px]">{price}</p>
        </div>
      </div>
      :
      <div className='flex items-center gap-5'>
        <img src={images} width={150} alt="" />
        <div className="pt-5 flex flex-col gap-2">
          {brand && 
            <h3 className='text-sm text-[#000000] tracking-[2px] uppercase'>{brand}</h3>
          }
          <h3 className='text-xs text-[#555555]'>{title}</h3>
          <p className="text-primary text-[15px]">{price}</p>
          <div className="flex items-center gap-3 text-[#555555]">
            <span className='text-xs'>Size</span>
            <button className='border-2 border-[#DEDEDE] hover:border hover:bg-[#f7f7f7] transition duration-300 text-[10px] rounded-full w-8 h-8'>S</button>
            <button className='border-2 border-[#DEDEDE] hover:border hover:bg-[#f7f7f7] transition duration-300 text-[10px] rounded-full w-8 h-8'>M</button>
            <button className='border-2 border-[#DEDEDE] hover:border hover:bg-[#f7f7f7] transition duration-300 text-[10px] rounded-full w-8 h-8'>L</button>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default GridView