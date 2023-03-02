import React from 'react'
import { FiHeart } from 'react-icons/fi'
import Plus from '../assets/icons/Plus.svg'

const AddBasket = () => {
  return (
    <div className='bg-primary p-4 flex items-center justify-between text-white'>
        <div className="flex items-center gap-5">
            <button>
                <img src={Plus} width={30} alt="" />
            </button>
            <div className='text-sm tracking-[1%] font-normal'>ADD TO BASKET</div>
        </div>
        <button>
            <FiHeart className='text-3xl'/>
        </button>
    </div>
  )
}

export default AddBasket