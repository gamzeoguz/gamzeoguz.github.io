import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects from '../assets/images/Resim3.png'

function Projects() {
  return (
    <section className='projects' id='projects'>
      <Container>
        <Row className="align-items-center">
          <h1>Projects</h1>
          <Col xs={12} md={6} xl={5}>
            <Card style={{ width: '18rem', padding: "2%", marginLeft: "10%" }} className='card'>
              <Card.Img variant="top" src={''} />
              <Card.Body>
                <Card.Title>Personal Website</Card.Title>
                <br></br>
                <Card.Text>
                  I have built this website using HTML, CSS Javascript, React technologies. Aside from CSS, I used React Bootstrap library for styling. 
                </Card.Text>
                <Button className='btn' variant="primary"><Card.Link className='btn-link' href="https://github.com/gamzeoguz/gamzeoguz.github.io">Go to project</Card.Link></Button>
              </Card.Body>
            </Card>

          </Col >
          <Col xs={12} md={6} xl={5}>
            <img src={projects} alt="Header image" />
          </Col>
      
        </Row>
      </Container>
    </section>
  )
}

export default Projects