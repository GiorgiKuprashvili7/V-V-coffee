import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './featuredProducts.module.scss'
import image1 from '../assets/coffee1.png'
import image2 from '../assets/coffee5.png'
import image3 from '../assets/coffee4.png'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import guarantyImg from '../assets/guaranted.png'
import map from '../assets/map.png'

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div className={styles.arrownext} onClick={onClick}>
      <BsChevronRight />
    </div>
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div className={styles.arrowprev} onClick={onClick}>
      <BsChevronLeft />
    </div>
  )
}

const FeaturedProducts = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  }
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.sliderContainer}>
          <h1>featured products</h1>
          <div className={styles.line}></div>
          <Slider {...settings} className={styles.slider}>
            <div className={styles.sliderItem}>
              <img src={image1} alt="" />
              <p>
                <b>naui april 15 roast</b>
              </p>
              <p>adipisicing elit. Facere, tempore</p>
              <div>
                <a href="#">Place order</a>
              </div>
            </div>
            <div className={styles.sliderItem}>
              <img src={image2} alt="" />
              <p>
                <b>nescafe april 21 roast</b>
              </p>
              <p>Lorem ipsum dolor sit amet</p>
              <div>
                <a href="#">Place order</a>
              </div>
            </div>
            <div className={styles.sliderItem}>
              <img src={image3} alt="" />
              <p>
                <b>casta march 30 roast</b>
              </p>
              <p>inventore commodi provident. Iure, sequi repellendus</p>
              <div>
                <a href="#">Place order</a>
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.textContainer}>
          <h1>
            single-origin. <br /> micro roasted beans
          </h1>
          <div className={styles.line}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            necessitatibus cum doloremque? Nobis mollitia facere iusto
            reiciendis, repellat amet, eius tempore voluptatibus libero, ut
            omnis fugit dolor sequi dolore corrupti quo atque pariatur. A ipsam
            commodi nisi hic neque quam labore, sequi obcaecati tenetur ducimus
          </p>
        </div>
        <div className={styles.decorContainer}>
          <h3>it's a</h3>
          <div>
            <h2>coffee</h2>
          </div>
          <h3>thing</h3>
        </div>
        <div className={styles.guarantyContainer}>
          <img src={guarantyImg} alt="" />
        </div>
        <div className={styles.mapContainer}>
          <img src={map} alt="" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
