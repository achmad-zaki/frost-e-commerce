import React from 'react'
import imgCollections from '../assets/images/image-collections.png'

const Collection = () => {
  return (
    <div className='flex flex-col items-center justify-center md:w-1/2 md:mx-auto'>
        <div className='pb-5'>
            <h1 className='tracking-[4px] text-[18px]'>COLLECTIONS</h1>
        </div>
        <div className='relative'>
            <img src={imgCollections} alt="" />
            <h1 className='absolute top-10 right-5 text-[42px] font-bold italic'>SUMMER</h1>
            <p className='absolute top-24 right-[19%] tracking-[4px] text-[13px] font-normal'>COLLECTION</p>
        </div>
    </div>
  )
}

export default Collection