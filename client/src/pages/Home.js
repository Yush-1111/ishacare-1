import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Home/Hero'
import Process from '../components/Home/Process'
import Therapist from '../components/Home/Therapist'

const Home = () => {
  return (
    <Container>
      <div className='body'>
        <Hero />
        <Process />
        <Therapist />
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .body {
    color: black;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    scroll-behavior: smooth;
  }
`
