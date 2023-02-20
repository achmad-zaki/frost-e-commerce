import React, { useState } from 'react'
import { IoCaretDownSharp } from 'react-icons/io5'
import { FiX } from 'react-icons/fi'
import Listview from '../assets/icons/Listview.svg'
import Gridview from '../assets/icons/Gridview.svg'
import Filter from '../assets/icons/Filter.svg'
import GridView from './GridView'
import Arrival1 from '../assets/images/arrival-1.png'
import Arrival2 from '../assets/images/arrival-2.png'
import Arrival3 from '../assets/images/arrival-3.png'
import Arrival4 from '../assets/images/arrival-4.png'

const CategoryDetail = () => {
  const arrival = [
    {
      img: Arrival1,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival2,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival3,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      desc: '$79.99'
    },
  ]
  const [view, setView] = useState(false)
  return (
    <div className='pt-24 flex flex-col gap-3 md:w-1/2 md:mx-auto'>
      <div className="flex items-center justify-between">
        <span>4500 APPAREL</span>
        <div className='flex items-center gap-4'>
          <button className="bg-[#F9F9F9] hover:bg-[#eeeded] py-2 px-3 rounded-full flex items-center justify-center gap-2">
            <span className='text-[13px] text-[#555555]'>New</span>
            <IoCaretDownSharp className='text-[#333333] text-[10px]'/>
          </button>
          <button className="bg-[#F9F9F9] hover:bg-[#eeeded] p-3 rounded-full flex items-center justify-center" onClick={() => setView(!view)}>
          {view === false ?
            <img src={Listview} className='' alt="" />
            :
            <img src={Gridview} clasname='' alt="" />
          }
          </button>
          <button className="bg-[#F9F9F9] hover:bg-[#eeeded] p-3 rounded-full flex items-center justify-center">
              <img src={Filter} alt="" />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-3'>
        <div className='border border-[#DEDEDE] flex items-center py-2 px-3 rounded-full gap-2'>
          <span className='text-sm font-normal text-[#333333]'>Unisex</span>
          <button><FiX className='text-sm'/></button>
        </div>
        <div className='border border-[#DEDEDE] flex items-center py-2 px-3 rounded-full gap-2'>
          <span className='text-sm font-normal text-[#333333]'>All apparel</span>
          <button><FiX className='text-sm'/></button>
        </div>
      </div>
      <div className={`container mx-auto grid ${view ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>       
        {arrival.map((item, index) => (
          <GridView
            view={view}
            key={index}
            images={item.img}
            brand='Unisex'
            title='JK45 Jackets & Gilets'
            price='$99.99'
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryDetail