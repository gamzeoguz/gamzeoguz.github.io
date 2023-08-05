import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BurakBora from '../assets/education/bbal.png';
import Marmara from '../assets/education/marmaralogo.png'

function Education() {
  return (
    <> 
    <section className='edu' id='edu'>
      <Container>
        <Row className="align-items-center">
          <h1>Education</h1> 
                      <VerticalTimeline>
                          <VerticalTimelineElement
                              className="vertical-timeline-element--education"
                              date="2019 - 2023"
                              contentStyle={{ background: 'rgba(53, 149, 230, 0.21)', color: '#fff' }}
                              contentArrowStyle={{ borderRight: '7px solid  rgba(53, 149, 230, 0.21)' }}
                              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                              icon = {
                                <div className='divlogo'>
                                <img src={Marmara} />
                                </div>
                              }
                          >
                              <h3 className="vertical-timeline-element-title">Bachelor's Degree, Computer Engineering</h3>
                              <h4 className="vertical-timeline-element-subtitle">Marmara University</h4>
                              <p>
                                  Graduated as an Honor Student in July 2023. <br></br><br></br>
                                  <ul className='bulletPoints'>
                                    <li>During my studies, I voluntarily take part in a research project where my tasks include summarization and English translation of literature, preparation of the paper, ensuring the paper's format is aligned with conference format, researching machine learning algorithms, and summarizing them.</li>
                                  </ul>                                
                              </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                              className="vertical-timeline-element--education"
                              date="2018"
                              contentStyle={{ background: 'rgba(53, 149, 230, 0.21)', color: '#fff' }}
                              contentArrowStyle={{ borderRight: '7px solid  rgba(53, 149, 230, 0.21)' }}
                              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                              icon = {
                                <div className='divlogo'>
                                <img src={BurakBora} />
                                </div>
                              }
                          >
                              <h3 className="vertical-timeline-element-title">High School Diploma</h3>
                              <h4 className="vertical-timeline-element-subtitle">Burak Bora Anatolian High School</h4>
                              <p>
                                  Honor Student
                              </p>
                          </VerticalTimelineElement>
                      </VerticalTimeline>
                  </Row>
      </Container>
    </section>
    </>
  )
}



export default Education