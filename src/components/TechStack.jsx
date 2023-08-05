import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import javascript from '../assets/tech/javascript.png'
import nodejs from '../assets/tech/nodejs.png'
import expressjs from '../assets/tech/expressjs.svg'
import mongodb from '../assets/tech/mongodb.png'
import sqlserver from '../assets/tech/sqlserver3.svg'
import sql from '../assets/tech/sql2.png'
import react from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import git from '../assets/tech/git.png'
import java from '../assets/tech/java.svg'
import python from '../assets/tech/python.svg'

function TechStack() {
  return (
    <section className='skills' id='skills'>
      <Container>
        <Row className='justify-content-md-center'>
          <h1>Skills</h1>
            <img src={html} alt="Html" />
            <img src={css} alt="Css" />
            <img src={javascript} alt="Javascript" />
            <img src={nodejs} alt="Node.js" />
            <img src={expressjs} alt="Express.js" className='visibility' />
            <img src={mongodb} alt="Mongodb" />
            <img src={sql} alt="SQL" />
            <img src={sqlserver} alt="SQL Server" className='visibility' />
            <p></p><p></p><p></p>
            <img src={react} alt="React" />
            <img src={redux} alt="Redux" />
            <img src={git} alt="Git" />
            <img src={java} alt="Java" />
            <img src={python} alt="Python" />
        </Row>
      </Container>
    </section>
  )
}

export default TechStack