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
  return (
    <div className="relative">
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