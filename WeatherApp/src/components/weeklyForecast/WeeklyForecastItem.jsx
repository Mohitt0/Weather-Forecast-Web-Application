import React from 'react'
import { PiThermometerLight } from "react-icons/pi";
import { LuWind } from "react-icons/lu";
import { BsClouds } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { Col, Container, Row } from 'react-bootstrap'
const WeeklyForecastItem = (props) => {
  let iconContent;
  if (props.type === 'temperature')
    iconContent = <PiThermometerLight sx={{ fontSize: '18px' }} />;
  else if (props.type === 'wind')
    iconContent = <LuWind sx={{ fontSize: '18px' }} />;
  else if (props.type === 'clouds')
    iconContent = <BsClouds sx={{ fontSize: '18px' }} />;
  else if (props.type === 'humidity')
  iconContent = <WiHumidity sx={{ fontSize: '18px' }} />;
  return (
    <Container>
    <Row className="align-items-center " style={{ height: '31px', color: 'rgba(255, 255, 255, .7)', gap: '3px' }}>
      <Col xs="auto" sm="auto" md="auto">
        {iconContent}
      </Col>
      <Col xs="auto" sm="auto" md="auto">
        <p style={{
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          lineHeight: 1,
        }}>
          {props.value}
        </p>
      </Col>
    </Row>
  </Container>
  )
}

export default WeeklyForecastItem