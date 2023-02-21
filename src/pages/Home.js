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