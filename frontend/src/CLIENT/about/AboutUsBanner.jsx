import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './aboutbanner.css'

const AboutUsBanner = () => {
  return (
    <div className='about-div-with-background border mt-5'>
      <Container>
        <Row className='about-quote-container mt-5 me-1'>
          <h1>"Don't settle down and sit in one place. Move around, be nomadic, make each day a new horizon."</h1>
          <p>― Jon Krakauer, Into the Wild.</p>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUsBanner
