import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const DayWeatherDetails = (props) => {
  return (
  
    <Row  className="flex-column align-items-start pl-8">
 
        <p
          style={{
        
            fontWeight: '600',
            fontSize: '14px',
            color: 'white',
            lineHeight: 1,
            height: '31px',
            alignItems: 'center',
            display: 'flex',
            padding:"0"
          }}
        >
          {props.day}
        </p>
      
      <Col xs="auto" sm="auto" md="auto" className="d-flex align-items-center p-0">
        <Image
          src={props.src}
          style={{
            width: '24px',
            height: 'auto',
            marginRight: '4px',
          }}
          alt="weather"
        />
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255, .8)',
            lineHeight: 1,
            padding:"0"
          
          }}
        >
          {props.description}
        </p>
      </Col>
    </Row>

  )
}

export default DayWeatherDetails