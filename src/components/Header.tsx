import styles from './header.module.scss'
import { ImInstagram } from 'react-icons/im'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.logo}>V&V</h1>
        <div className={styles.location}>
          <p>check our primary shop </p>{' '}
          <HiLocationMarker className={styles.pin} />
        </div>
        <div className={styles.socialIcons}>
          <FaTwitter className={styles.icon} />
          <FaFacebookF className={styles.icon} />
          <ImInstagram className={styles.icon} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">locations</a>
            </li>
            <li>
              <a href="#">our roasters</a>
            </li>
            <li>
              <a href="#">our story</a>
            </li>
            <li>
              <a href="#">news</a>
            </li>
            <li>
              <a href="#">suppliers</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
