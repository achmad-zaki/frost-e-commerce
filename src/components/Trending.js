import React from 'react'

const Trending = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center pt-20 md:w-1/2 md:mx-auto'>
        <div className="text-center">
            <h1 className='tracking-[4px] text-lg font-normal'>@TRENDING</h1>
        </div>
        <div className="flex items-center flex-wrap gap-3 px-4">
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#2023</span>
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#spring</span>
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#collection</span>
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#fall</span>
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#dress</span>
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#autmncollection</span>
            <span className="bg-[#F5F5F5] py-3 px-3 rounded-full text-sm">#openfaction</span>
        </div>
    </div>
  )
}

export default Trending