import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NolymitAI from '../assets/companies/nolymitlogo.png'
import OrionInnovation from '../assets/companies/OI_logo.png'
import TurkiyeFinans from '../assets/companies/turkiye-finans.png'
import Kariyernet from '../assets/companies/kariyernet.png'

function Experiences() {
  return (
    <> 
    <section className='work' id='work'>
      <Container>
        <Row className="align-items-center">
          <h1>Work Experiences</h1> 
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgba(53, 149, 230, 0.21)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(53, 149, 230, 0.21)' }}
        date="Jul 2023 - Aug 2023"
        iconStyle={{ background: 'rgb(75, 112, 242)', color: '#fff' }}
        icon = {
          <div className='divlogo'>
          <img src={Kariyernet} />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern, <span>Kariyer.net</span></h3>
        <h4 className="vertical-timeline-element-subtitle">Istanbul, Turkiye</h4>
        <p>
        <ul className='bulletPoints'>
            <li>Developed a full-stack application using Vue.js, .Net 7, MS SQL Server, Redis technologies.</li>
            <li>Wrote APIs in the backend.</li>
            <li>Made HTTP requests with Axios and performed CRUD operations.</li>
            <li>Used Redis to test distributed cache and memory cache mechanisms.</li>
            <li>Ran Elasticsearch on Docker. Created and deleted indices. Observed the results via Elasticvue extension.</li>
            <li>Created an app using Next.js 13 which lists data from Fake Store API endpoint. Used App Router.</li>
        </ul>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2023 - Jun 2023"
        contentStyle={{ background: 'rgba(53, 149, 230, 0.21)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(53, 149, 230, 0.21)' }}
        iconStyle={{ background: 'rgb(75, 112, 242)', color: '#fff' }}
        icon = {
          <div className='divlogo'>
          <img src={TurkiyeFinans} />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern, <span>Turkiye Finans Participation Bank</span> </h3>
        <h4 className="vertical-timeline-element-subtitle">Istanbul, Turkiye</h4>
        <p>
        <ul className='bulletPoints'>
          <li>Interned at Payment Systems Development Department.</li>
          <li>Wrote SQL queries to gather data from database and formatted them utilizing Excel.</li>
          <li>Assisted with preparation of stored procedures.</li>
        </ul>        
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2022 - Jan 2023"
        contentStyle={{ background: 'rgba(53, 149, 230, 0.21)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(53, 149, 230, 0.21)' }}
        iconStyle={{ background: 'rgb(75, 112, 242)', color: '#fff' }}
        icon = {
          <div className='divlogo'>
          <img src={OrionInnovation} />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern, <span>Orion Innovation Turkey</span> </h3>
        <h4 className="vertical-timeline-element-subtitle">Istanbul, Turkiye</h4>
        <p>
          <ul className='bulletPoints'>
            <li>Made PostgreSQL Node.js connection.</li>
            <li>Performed SOAP requests with Node.js.</li>
            <li>Consumed a SOAP web service in Node.js.</li>
            <li>Used SoapUI tool to record input and output XML messages.</li>
            <li>Made open-source contribution to SOAP module.</li>
          </ul>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2022 - Nov 2022"
        contentStyle={{ background: 'rgba(53, 149, 230, 0.21)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(53, 149, 230, 0.21)' }}
        iconStyle={{ background: 'rgb(75, 112, 242)', color: '#fff' }}
        icon = {
          <div className='divlogo'>
          <img src={NolymitAI} />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern, <span>NolymitAI</span></h3>
        <h4 className="vertical-timeline-element-subtitle">San Jose, US (Remote)</h4>
        <p>
        <ul className='bulletPoints'>
            <li>Developed a multilingual chatbot.</li>
            <li>Implemented and deployed full-stack web changes.</li>
            <li>Performed tests and wrote test reports.</li>
        </ul>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </Row>
      </Container>
    </section>
    </>
  )
}

export default Experiences