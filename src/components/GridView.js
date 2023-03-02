import React from 'react'
import { Link } from 'react-router-dom'

const GridView = ({images, brand, title, price, view, id}) => {
  return (
    <>
      {view === false ?
        <div className='text-center cursor-pointer hover:scale-95 transition-all duration-300'>
          <Link to={`/category/${id}`}>
            <img src={images} alt="" />
          </Link>
          <div className="pt-5">
            {brand && 
              <h3 className='text-xs text-[#000000]'>{brand}</h3>
            }
            <h3 className='text-xs text-[#555555]'>{title}</h3>
            <p className="text-primary text-[15px]">{price}</p>
          </div>
        </div>
        :
        <div className='flex items-center gap-5 hover:scale-95 transition-all duration-300 cursor-pointer'>
          <Link to={`/category/${id}`}>
            <img src={images} width={150} alt="" />
          </Link>
          <div className="pt-5 flex flex-col gap-2">
            {brand && 
              <h3 className='text-sm text-[#000000] tracking-[2px] uppercase'>{brand}</h3>
            }
            <h3 className='text-xs text-[#555555]'>{title}</h3>
            <p className="text-primary text-[15px]">{price}</p>
            <div className="flex items-center gap-3 text-[#555555]">
              <span className='text-xs'>Size</span>
              <button className='type-size'>S</button>
              <button className='type-size'>M</button>
              <button className='type-size'>L</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default GridView