import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {
  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={true}
        stopOnHover={false}
        interval={2000}
        showIndicators={false}
      >
        <div className='hero container'>
          <div className='hero-con'>
            <h1 className='hero-head'>Isha Wellness Center</h1>
            <p className='hero-para'>
              An innovative holistic treatment program which focus on
              strengthening of all aspects of wellness in your life. Primary
              objective of developing this system is to avail wellness therapy
              services through wellness facilitators all over the globe.
            </p>
          </div>
        </div>
        <div className='hero container'>
          <div className='hero-con'>
            <h1 className='hero-head'>Isha Wellness Center</h1>
            <p className='hero-para'>
              An innovative holistic treatment program which focus on
              strengthening of all aspects of wellness in your life. Primary
              objective of developing this system is to avail wellness therapy
              services through wellness facilitators all over the globe.
            </p>
          </div>
        </div>
        <div className='hero container'>
          <div className='hero-con'>
            <h1 className='hero-head'>Isha Wellness Center</h1>
            <p className='hero-para'>
              An innovative holistic treatment program which focus on
              strengthening of all aspects of wellness in your life. Primary
              objective of developing this system is to avail wellness therapy
              services through wellness facilitators all over the globe.
            </p>
          </div>
        </div>
      </Carousel>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  .container {
    min-height: 100vh;
    padding: 3rem 0;
  }

  .hero {
    position: absolute;
    height: 100vh;
    width: 100%;
    margin-bottom: 30px;
    background-image: url(/images/hero-background.jpg);
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 3;
  }
  .hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: -1;
  }
  .hero img {
    position: absolute;
    top: 5px;
    left: 4px;
  }

  .hero-con {
    font-weight: 400;
    margin-left: 20px;
    z-index: 2;
    color: white;
    width: 42%;
    position: absolute;
    top: 45%;
    right: 0;
    margin-right: 5rem;
    text-align: right;
  }
  .hero-head {
    margin-bottom: 10px;
    color: #f4c9db;
  }
  .hero-para {
    font-size: 17px;
    letter-spacing: 1px;
    word-spacing: 2px;
  }
  .carousel > .control-dots .dot {
    background: #f4c9db;
  }
`
