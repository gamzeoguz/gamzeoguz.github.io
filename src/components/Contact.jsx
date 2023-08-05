import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import personal from '../assets/images/Resim4.png'
import { useState, useEffect } from 'react'
import icon1 from '../assets/images/social (1)2.png'
import icon2 from '../assets/images/social2.png'
import icon3 from '../assets/images/gmail.png'
import Card from 'react-bootstrap/Card';

function Contact() {/*
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onChange = e => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault();
    const value = Object.fromEntries(data.entries());
    console.log(value);
  }


  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className="align-items-center">
          <h1>Contact</h1>
          <Col xs={12} md={6} xl={5}>
            <img src={personal} alt="Header image" />
          </Col >
          <Col xs={12} md={6} xl={5}>
            <br></br>
            <form onSubmit={onSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </Col>
                <Col sm={12} className='px-1'>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={form.subject}
                    onChange={onChange}
                  />
                </Col>
                <Col sm={12} className='px-1'>
                  <textarea rows="6"
                    name='message'
                    placeholder='Message'
                    value={form.message}
                    onChange={onChange}
                    id='text-area'
                    required
                  ></textarea>
                  <button type='submit'><span>{buttonText}</span></button>
                </Col>
              </Row>               
            </form>
          </Col>
        </Row>
      </Container>
    </section>*/

    return (
      <section className='contact' id='contact'>
        <Container>
          <Row className="align-items-center">
            <h1>Contact</h1>
            <Col xs={12} md={6} xl={5}>
            <img src={personal} alt="Header image" />
          </Col >
          <Col xs={12} md={6} xl={5}>
          <Card style={{ width: '18rem', padding: "2%", marginLeft: "30%" }} className='card'>
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Card.Text>Istanbul, Turkiye</Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>gamzeoguz.swe @ gmail.com</Card.Text>
                <Card.Title>Socials</Card.Title>
                <Card.Text>
                    <div className='social-icon'>
                      <a href='https://www.linkedin.com/in/gamzeoguz/'><img src={icon1} alt="" /></a>
                      <a href='https://github.com/gamzeoguz'><img src={icon2} alt="" /></a>
                      <a href='mailto:gamzeoguz@marun.edu.tr'><img src={icon3} alt="" /></a>
                    </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Contact