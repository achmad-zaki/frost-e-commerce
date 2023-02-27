import React from 'react'
import Resize from '../assets/icons/Resize.svg'
import Variation from './Variation'

const Detail = ({title, price, img}) => {
  return (
    <div className='pt-24 p-5 md:w-1/2 md:mx-auto'>
      <div className="relative">
        <img src={img} alt="" />
        <button className="absolute bg-[#9E9E9E] hover:bg-[#727272] transition duration-300 right-3 bottom-40 rounded-full p-2">
          <img src={Resize} alt="" />
        </button>
        <div className="mt-5">
          <Variation
            title={title}
            price={price}
          />
        </div>
      </div>
    </div>
  )
}

export default Detail