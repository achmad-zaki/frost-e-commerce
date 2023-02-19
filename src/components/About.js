import React from 'react'
import Miroodles1 from '../assets/icons/Miroodles Sticker-1.svg'
import Miroodles2 from '../assets/icons/Miroodles Sticker-2.svg'
import Miroodles3 from '../assets/icons/Miroodles Sticker-3.svg'
import Miroodles4 from '../assets/icons/Miroodles Sticker-4.svg'
import Line from '../assets/icons/line.svg'
import Scribble from '../assets/icons/scribble.svg'

const About = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center bg-[#F2F2F2] mt-20 py-5 md:w-1/2 md:mx-auto'>
        <div className="text-center pt-5">
            <h1 className='text-primary font-black italic text-4xl'>FROST</h1>
            <p className='text-[#555555] w-10/12 mx-auto mt-3 tracking-[1%] text-sm'>
              Making a luxurious lifestyle accessible for a generous group of women is our 
              daily drive.
            </p>
        </div>
        <img src={Line} className='py-10' alt="" />
        <div className="grid justify-items-end grid-cols-2 gap-5 px-3">
          <div className='text-center'>
            <img src={Miroodles1} className='block mx-auto' alt="" />
            <h3 className='mt-3'>Fast shipping. Free on orders over $25.</h3>
          </div>
          <div className='text-center'>
            <img src={Miroodles2} className='block mx-auto' alt="" />
            <h3 className='mt-3'>Sustainable process from start to finish.</h3>
          </div>
          <div className='text-center'>
            <img src={Miroodles3} className='block mx-auto' alt="" />
            <h3 className='mt-3'>Unique designs and high-quality materials.</h3>
          </div>
          <div className='text-center'>
            <img src={Miroodles4} className='block mx-auto' alt="" />
            <h3 className='mt-3'>Fast shipping. Free on orders over $25.</h3>
          </div>
        </div>
        <img src={Scribble} className='mt-14' alt="" />
    </div>
  )
}

export default About