import React from 'react'
import Line from '../assets/icons/line.svg'
import Arrival1 from '../assets/images/arrival-1.png'
import Arrival2 from '../assets/images/arrival-2.png'
import Arrival3 from '../assets/images/arrival-3.png'
import Arrival4 from '../assets/images/arrival-4.png'
import Arrow from '../assets/icons/Arrow.svg'

const Arrival = () => {
  const tab = [
    {
      link: 'All',
      path: '#all',
      status: 'active'
    },
    {
      link: 'Apparel',
      path: '#apparel'
    },
    {
      link: 'Dress',
      path: '#dress'
    },
    {
      link: 'Tshirt',
      path: '#tshirt'
    },
    {
      link: 'Bag',
      path: '#bag'
    }
  ]

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
    }
  ]
  return (
    <div className="flex flex-col gap-5 items-center justify-center pt-10 xl:pt-20 md:w-1/2 md:mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-normal tracking-[4px]">NEW ARRIVAL</h1>
        <img src={Line} alt="" />
      </div>
      <ul className="flex items-center gap-8">
        {tab.map((item, index) => (
        <li key={index}>
          <a href={item.path} className={`relative text-sm ${item.status}`}>{item.link}</a>
        </li>
        ))}
      </ul>
      <div className="container mx-auto px-3 grid grid-cols-2 gap-3">
        {arrival.map((item, index) => (
        <div className='text-center' key={index}>
          <img src={item.img} alt="" />
          <div className="pt-5">
            <h3 className='text-xs'>{item.title}</h3>
            <p className="text-primary text-[15px]">{item.desc}</p>
          </div>
        </div>
        ))}
      </div>
      <div className='flex items-center gap-2'>
        <a href='#exploremore' className='font-normal'>Explore More</a>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default Arrival