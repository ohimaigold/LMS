import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './aboutbanner.css'

const AboutUsBanner = () => {
  return (
    <div className='about-div-with-background border mt-5'>
      <Container>
        <Row className='about-quote-container mt-5 me-1'>
          <h1>"When you want something in life, you just gotta reach out and grab it."</h1>
          <p>― Christopher McCandless.</p>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUsBanner
