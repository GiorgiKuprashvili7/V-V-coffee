import AboutUs from '../components/AboutUs'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroTitle from '../components/HeroTitle'
import OurMission from '../components/OurMission'
import Register from '../components/Register'
import TitleTwo from '../components/TitleTwo'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroTitle />
      <AboutUs />
      <TitleTwo />
      <FeaturedProducts />
      <Register />
      <OurMission />
      <Footer />
    </div>
  )
}

export default Home
