import React from 'react'
import { Container } from 'react-bootstrap'
import WeeklyForecastItem from './WeeklyForecastItem'

const UnfedForecast = (props) => {
  return (
    <>
  <Container className="d-flex flex-column align-items-start" style={{ paddingLeft: '12px', '@media (min-width: 576px)': { paddingLeft: '20px' }, '@media (min-width: 768px)': { paddingLeft: '32px' } }}>
    <p style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px', color: 'white', lineHeight: 1, height: '31px', alignItems: 'center', display: 'flex' }}>
      {props.day}
    </p>
    <div className="d-flex align-items-center" style={{ height: '31px' }}>
      <img src={props.src} style={{ width: '24px', height: 'auto', marginRight: '4px' }} alt="weather" />
      <p style={{ fontSize: '12px', color: 'rgba(255,255,255, .8)', lineHeight: 1, fontFamily: 'Roboto Condensed' }}>
        {props.value}
      </p>
    </div>
  </Container>

  <Container className="d-flex flex-column align-items-center justify-content-center">
    <WeeklyForecastItem type="temperature" value={props.value} color="black" />
    <WeeklyForecastItem type="clouds" value={props.value} color="black" />
  </Container>

  <Container className="d-flex flex-column align-items-center justify-content-center">
    <WeeklyForecastItem type="wind" value={props.value} color="green" />
    <WeeklyForecastItem type="humidity" value={props.value} color="green" />
  </Container>
</>
  )
}

export default UnfedForecast