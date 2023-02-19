import React from 'react'
import { FiX } from 'react-icons/fi'

const SideNavbar = ({setNavbar}) => {
  const nav = [
    {
      link: 'About',
      path: '#about'
    },
    {
      link: 'Contact',
      path: '#contact'
    },
    {
      link: 'Blog',
      path: '#blog'
    }
  ]
  return (
    <nav className='w-full h-full backdrop-blur-md flex items-center justify-center md:w-1/2 md:mx-auto'>
      <button className='absolute top-5 right-5' onClick={() => setNavbar(false)}>
        <FiX className='text-3xl'/>
      </button>
      <ul className='flex flex-col items-center gap-10'>
        {nav.map((item, index) => (
        <li key={index}>
          <a className='text-xl' href={item.path}>{item.link}</a>
        </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNavbar