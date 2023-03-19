import React from 'react'
import { IoLogoTwitter } from 'react-icons/io'
import { IoLogoYoutube } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import Line from '../assets/icons/line.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col gap-7 items-center justify-center pt-10 md:w-1/2 md:mx-auto'>
        <div className="flex items-center gap-14">
            <a href="#twitter">
                <IoLogoTwitter className='text-2xl text-[#333333]'/>
            </a>
            <a href="#instagram">
                <AiFillInstagram className='text-2xl text-[#333333]'/>
            </a>
            <a href="#youtube">
                <IoLogoYoutube className='text-2xl text-[#333333]'/>
            </a>
        </div>
        <img src={Line} alt="" />
        <div className='flex flex-col text-center text-lg font-normal text-[#333333]'>
            <span>support@openui.design</span>
            <span>+60 825 876</span>
            <span>08:00 - 22:00 - Everyday</span>
        </div>
        <img src={Line} alt="" />
        <ul>
            <li className='flex gap-16'>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
        <div className="bg-[#F9F9F9] w-full h-[45px] flex items-center justify-center">
            <span className='text-[#555555] text-xs font-normal'>Copyright© OpenUI All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer