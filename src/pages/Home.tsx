import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import HeroTitle from '../components/HeroTitle'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroTitle />
      <AboutUs />
    </div>
  )
}

export default Home
