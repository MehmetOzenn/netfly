import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_btn from '../../assets/play_icon.png'
import info_btn from '../../assets/info_icon.png'
import './Style.css'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../Layout/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati vero temporibus?</p>
          <div className="hero-buttons">
            <button className='btn'><img src={play_btn} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_btn} alt="" />More Info</button>
          </div>
          <TitleCards title={'now_playing'} componentHeader={'Now Playing'}/>
        </div>        
      </div>
      <div className="more-cards">
        <TitleCards title={'popular'} componentHeader={'Popular'}/>
        <TitleCards title={'top_rated'} componentHeader={'Top Rated'}/>
        <TitleCards title={'upcoming'} componentHeader={'Upcoming'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home