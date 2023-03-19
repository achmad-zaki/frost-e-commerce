import React from 'react'
import Title from './Title'
import Blog1 from '../assets/images/Blog1.png'
import Footer from './Footer'

const Blogs = () => {
  return (
    <div className='mt-24'>
        <div className='flex flex-col justify-center md:w-1/2 md:mx-auto'>
            <Title title='BLOGS'/>
            <div className="mt-10 mx-3">
                <div className='relative object-cover cursor-pointer overflow-hidden'>
                    <img src={Blog1} className="transition-transform duration-300 ease-out hover:scale-125" alt="" />
                    <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] opacity-[70%] h-[20vh] w-full'></div>
                    <p className='absolute bottom-3 left-1 text-sm text-white tracking-[2px] mx-3 uppercase'>5 Student Athletes Join the Nike Basketball Family</p>
                </div>
                <div className="flex justify-between mt-2">
                    <div className='flex items-center gap-5'>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Fashion</div>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Tips</div>
                    </div>
                    <div className='border border-[#F5F5F5] rounded-full  px-2 py-1 text-[12px] text-[#888888]'>4 days ago</div>
                </div>
            </div>
            <div className="mt-10 mx-3">
                <div className='relative object-cover cursor-pointer overflow-hidden'>
                    <img src={Blog1} className="transition-transform duration-300 ease-out hover:scale-125" alt="" />
                    <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] opacity-[70%] h-[20vh] w-full'></div>
                    <p className='absolute bottom-3 left-1 text-sm text-white tracking-[2px] mx-3 uppercase'>5 Student Athletes Join the Nike Basketball Family</p>
                </div>
                <div className="flex justify-between mt-2">
                    <div className='flex items-center gap-5'>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Fashion</div>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Tips</div>
                    </div>
                    <div className='border border-[#F5F5F5] rounded-full  px-2 py-1 text-[12px] text-[#888888]'>4 days ago</div>
                </div>
            </div>
            <div className="mt-10 mx-3">
                <div className='relative object-cover cursor-pointer overflow-hidden'>
                    <img src={Blog1} className="transition-transform duration-300 ease-out hover:scale-125" alt="" />
                    <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] opacity-[70%] h-[20vh] w-full'></div>
                    <p className='absolute bottom-3 left-1 text-sm text-white tracking-[2px] mx-3 uppercase'>5 Student Athletes Join the Nike Basketball Family</p>
                </div>
                <div className="flex justify-between mt-2">
                    <div className='flex items-center gap-5'>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Fashion</div>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Tips</div>
                    </div>
                    <div className='border border-[#F5F5F5] rounded-full  px-2 py-1 text-[12px] text-[#888888]'>4 days ago</div>
                </div>
            </div>
            <div className="mt-10 mx-3">
                <div className='relative object-cover cursor-pointer overflow-hidden'>
                    <img src={Blog1} className="transition-transform duration-300 ease-out hover:scale-125" alt="" />
                    <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000000] opacity-[70%] h-[20vh] w-full'></div>
                    <p className='absolute bottom-3 left-1 text-sm text-white tracking-[2px] mx-3 uppercase'>5 Student Athletes Join the Nike Basketball Family</p>
                </div>
                <div className="flex justify-between mt-2">
                    <div className='flex items-center gap-5'>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Fashion</div>
                        <div className='border border-[#F5F5F5] rounded-full px-2 py-1 text-[12px] text-[#888888]'>#Tips</div>
                    </div>
                    <div className='border border-[#F5F5F5] rounded-full  px-2 py-1 text-[12px] text-[#888888]'>4 days ago</div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blogs