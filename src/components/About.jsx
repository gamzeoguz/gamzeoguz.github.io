import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import about from '../assets/images/Resim5.png'

function About() {
  return (
    <section className='about' id='about'>
      <Container>
        <Row className="align-items-center">
          <h1>About Me</h1>
          <Col xs={12} md={6} xl={5}>
            <p>I have recently graduated from Marmara University with a Bachelor's Degree in <span className='highlight'>Computer Engineering.</span> <br></br> <br></br> I like developing full-stack apps where I got the opportunity to see how backend and frontend interact with each other. I also like thinking from the point of view of the user. <br></br> <br></br> In my free time, I like listening to new songs, reading about new topics and practising guitar.   </p>
          </Col >
          <Col xs={12} md={6} xl={5}>
            <img src={about} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About