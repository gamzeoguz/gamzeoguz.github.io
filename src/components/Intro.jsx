import React from 'react'
//import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import header from '../assets/images/6200_8_09(2).png'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

function Intro() {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp animate__delay-2s" : ""}>
                  <h1 className='name'>{`Gamze Oguz `}</h1>
                  <span className='wrap'>{`Computer Engineer`}</span>
                </div>}
            </TrackVisibility>
            <br></br><br></br>
            <p className='typewriter'>I like developing full-stack applications.</p><br></br>
            <a href='https://www.linkedin.com/in/gamzeoguz/'><button className='vvd'><span>Let's Connect</span></button></a>
          </Col >
          <Col xs={12} md={6} xl={5}>
            <img src={header} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Intro