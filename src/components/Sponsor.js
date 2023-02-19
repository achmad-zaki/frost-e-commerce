import React from 'react'
import Line from '../assets/icons/line.svg'
import Prada from '../assets/sponsor/Prada.svg'
import Burberry from '../assets/sponsor/Burberry.svg'
import Boss from '../assets/sponsor/Boss.svg'
import Catier from '../assets/sponsor/Catier.svg'
import Gucci from '../assets/sponsor/Gucci.svg'
import Tiffany from '../assets/sponsor/Tiffany & Co.svg'

const Sponsor = () => {
  return (
    <div className='flex flex-col items-center justify-center py-14 md:w-1/2 md:mx-auto'>
        <div className="pb-12">
            <img src={Line} alt="" />
        </div>
        <div className="px-3 grid items-center justify-items-center grid-cols-3 gap-5">
            <img src={Prada} alt="" />
            <img src={Burberry} alt="" />
            <img src={Boss} alt="" />
            <img src={Catier} alt="" />
            <img src={Gucci} alt="" />
            <img src={Tiffany} alt="" />
        </div>
        <div className="pt-12">
            <img src={Line} alt="" />
        </div>
    </div>
  )
}

export default Sponsor