import React from 'react'
import { Link } from 'react-router-dom'

const GridView = ({images, brand, title, price, view, id}) => {
  return (
    <>
      {view === false ?
      <Link to={`/frost-e-commerce/category/${id}`}>
        <div className='text-center cursor-pointer hover:scale-95 transition-all duration-300'>
          <img src={images} alt="" />
          <div className="pt-5">
            {brand && 
              <h3 className='text-xs text-[#000000]'>{brand}</h3>
            }
            <h3 className='text-xs text-[#555555]'>{title}</h3>
            <p className="text-primary text-[15px]">{price}</p>
          </div>
        </div>
      </Link>
        :
      <Link to={`/frost-e-commerce/category/${id}`}>
        <div className='flex items-center gap-5 hover:scale-95 transition-all duration-300 cursor-pointer'>
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
      </Link>
      }
    </>
  )
}

export default GridView