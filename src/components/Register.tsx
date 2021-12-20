import styles from './register.module.scss'

const Register = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>be part of the best club in britain.</h1>
        <div className={styles.line}></div>
        <form className={styles.form}>
          <div>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Adress" />
            <input type="password" placeholder="Post Code" />
          </div>
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Register
