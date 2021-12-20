import styles from './aboutUs.module.scss'
import image from '../assets/coffee5.png'
import years from '../assets/45years.png'
import { GiCoffeeBeans } from 'react-icons/gi'

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <p className={styles.scrollDown}>scroll down</p>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
        </div>
        <div className={styles.textContainer}>
          <h1>about us</h1>
          <div className={styles.line}></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            tempora blanditiis adipisci enim facilis? Atque nam porro doloremque
            beatae nulla Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi neque at, harum doloremque veritatis optio
            repudiandae esse unde consequuntur explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            perferendis tempora sed Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Molestias, delectus.
          </p>
        </div>
        <div className={styles.yearsContainer}>
          <img src={years} alt="" />
        </div>
        <div className={styles.iconsContainer}>
          <GiCoffeeBeans />
          <GiCoffeeBeans />
          <GiCoffeeBeans />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
