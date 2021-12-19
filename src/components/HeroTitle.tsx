import styles from './heroTitle.module.scss'

const HeroTitle = () => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          roasted to order. <br />
          delivered to your door.
        </h1>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default HeroTitle
