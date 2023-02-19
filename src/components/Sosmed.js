import React from 'react'
import Instagram from '../assets/icons/instagram.svg'
import Sosmed1 from '../assets/images/sosmed-1.png'
import Sosmed2 from '../assets/images/sosmed-2.png'
import Sosmed3 from '../assets/images/sosmed-3.png'
import Sosmed4 from '../assets/images/sosmed-4.png'

const Sosmed = () => {
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center md:w-1/2 md:mx-auto'>
        <div className="text-center">
            <h1 className='tracking-[4px] font-normal text-lg mb-3'>FOLLOW US</h1>
            <img src={Instagram} className='block mx-auto' alt="" />
        </div>
        <div className="grid grid-cols-2 gap-4 px-3">
            <div className='relative'>
                <img src={Sosmed1} alt="" />
                <h3 className='absolute bottom-2 left-2 text-white font-normal text-sm tracking-[1px] z-10'>@mia</h3>
                <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] h-[20vh] w-full'></div>
            </div>
            <div className='relative'>
                <img src={Sosmed2} alt="" />
                <h3 className='absolute bottom-2 left-2 text-white font-normal text-sm tracking-[1px] z-10'>@_jihyn</h3>
                <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] h-[20vh] w-full'></div>
            </div>
            <div className='relative'>
                <img src={Sosmed3} alt="" />
                <h3 className='absolute bottom-2 left-2 text-white font-normal text-sm tracking-[1px] z-10'>@mia</h3>
                <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] h-[20vh] w-full'></div>
            </div>
            <div className='relative'>
                <img src={Sosmed4} alt="" />
                <h3 className='absolute bottom-2 left-2 text-white font-normal text-sm tracking-[1px] z-10'>@_jihyn</h3>
                <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] h-[20vh] w-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Sosmed