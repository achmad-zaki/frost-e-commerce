import React from 'react'
import Arrival1 from '../assets/images/arrival-1.png'
import Arrival2 from '../assets/images/arrival-2.png'
import Arrival3 from '../assets/images/arrival-3.png'
import Arrival4 from '../assets/images/arrival-4.png'
import Arrow from '../assets/icons/Arrow.svg'
import { Link } from 'react-router-dom'
import GridView from './GridView'
import Title from './Title'

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
      price: '$79.99'
    },
    {
      img: Arrival2,
      title: 'JK45 Jackets & Gilets',
      price: '$79.99'
    },
    {
      img: Arrival3,
      title: 'JK45 Jackets & Gilets',
      price: '$79.99'
    },
    {
      img: Arrival4,
      title: 'JK45 Jackets & Gilets',
      price: '$79.99'
    }
  ]
  return (
    <div className="flex flex-col gap-5 items-center justify-center pt-10 xl:pt-20 md:w-1/2 md:mx-auto">
      <Title
        title='new arrival'
      />
      <ul className="flex items-center gap-8">
        {tab.map((item, index) => (
        <li key={index}>
          <a href={item.path} className={`relative text-sm ${item.status}`}>{item.link}</a>
        </li>
        ))}
      </ul>
      <div className="container mx-auto px-3 grid grid-cols-2 gap-3">
        {arrival.map((item, index) => (
          <GridView
            view={false}
            key={index}
            images={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className='flex items-center gap-2'>
        {/* <Link to="/category" className='font-normal'>Explore More</Link> */}
        <a href="/category" className='font-normal'>Explore More</a>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default Arrival