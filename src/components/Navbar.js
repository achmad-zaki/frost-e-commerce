import React from 'react'
import Search from '../assets/icons/Search.svg'
import Humberger from '../assets/icons/Humberger.svg'
import Bag from '../assets/icons/Shopping-bag.svg'

const Navbar = ({setNavbar}) => {
  return (
    <header className="py-4 fixed w-full top-0 z-20 bg-white md:w-1/2 md:inset-x-[25%] drop-shadow-thin">
      <div className="px-5 flex items-center justify-between">
        <button onClick={() => setNavbar(true)}>
          <img src={Humberger} alt="" />
        </button>
        <div className="text-4xl ml-8">
          <h1 className='font-black italic text-primary uppercase'>Frost</h1>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <img src={Search} alt="" />
          </button>
          <button>
            <img src={Bag} alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar