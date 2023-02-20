import React, { useState } from 'react'
import CategoryDetail from '../components/CategoryDetail'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'

const Category = () => {
    const [navbar, setNavbar] = useState(false)
  return (
    <div className='bg-white'>
        <Navbar setNavbar={setNavbar}/>
        <div className={`fixed transition-all ease-out duration-500 ${navbar ? 'left-0 top-0 w-full h-full z-30': '-left-full'}`}>
            <SideNavbar setNavbar={setNavbar}/>
        </div>
        <div className="container mx-auto px-4">
            <CategoryDetail/>
        </div>
        <Footer/>
    </div>
  )
}

export default Category