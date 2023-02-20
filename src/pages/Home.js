import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import Arrival from '../components/Arrival'
import Sponsor from '../components/Sponsor'
import Collection from '../components/Collection'
import Video from '../components/Video'
import Promo from '../components/Promo'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import About from '../components/About'
import Sosmed from '../components/Sosmed'
import Footer from '../components/Footer'

const Home = () => {
    const [navbar, setNavbar] = useState(false)
  return (
    <div className="relative bg-white">
      <Navbar setNavbar={setNavbar}/>
      <div className={`fixed transition-all ease-out duration-500 ${navbar ? 'left-0 top-0 w-full h-full z-30': '-left-full'}`}>
        <SideNavbar setNavbar={setNavbar}/>
      </div>
      <Banner/>
      <Arrival/>
      <Sponsor/>
      <Collection/>
      <Video/>
      <Promo/>
      <Trending/>
      <About/>
      <Sosmed/>
      <Footer/>
    </div>
  )
}

export default Home