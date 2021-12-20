import styles from './ourMission.module.scss'
import img1 from '../assets/45years.png'
import img2 from '../assets/coffee3.png'

const OurMission = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.img1Container}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.textContainer}>
          <h1>our misssion</h1>
          <div className={styles.line}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia exercitationem recusandae amet assumenda delectus, magni
            deleniti incidunt ex enim reprehenderit sint aspernatur quo unde
            placeat? Ipsam provident quam natus.
          </p>
        </div>
        <div className={styles.img2Container}>
          <img src={img2} alt="" />
        </div>
        <h1 className={styles.h1}>vim & vigour</h1>
        <h4 className={styles.h4}>follow us</h4>
      </div>
    </section>
  )
}

export default OurMission
