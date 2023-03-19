import React from 'react'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SideNavbar = ({setNavbar}) => {
  const nav = [
    {
      link: 'Home',
      path: '/'
    },
    {
      link: 'About',
      path: '/about'
    },
    {
      link: 'Contact',
      path: '/contact'
    },
    {
      link: 'Blog',
      path: '/blog'
    }
  ]
  return (
    <nav className='relative w-3/4 h-full bg-primary flex items-center justify-center md:w-1/2 md:mx-auto'>
      <button className='absolute top-3 right-3' onClick={() => setNavbar(false)}>
        <FiX className='text-3xl text-white'/>
      </button>
      <ul className='flex flex-col items-center gap-10 text-white'>
        {nav.map((item, index) => (
        <li key={index}>
          <Link className='text-xl' to={item.path}>{item.link}</Link>
        </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNavbar