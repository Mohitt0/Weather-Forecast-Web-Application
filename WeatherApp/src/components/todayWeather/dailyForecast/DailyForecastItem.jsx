import React from 'react'
import { Container } from 'react-bootstrap'
import { kelvinToCelsius } from '../../../utilities/DataUtils';

const DailyForecastItem = (props) => {
  const temperature_celsius = kelvinToCelsius(props?.item?.temperature);
  return (
    <Container
    style={{
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
      borderRadius: '8px',
      boxShadow:
        'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      textAlign: 'center',
      padding: '4px 0',
      width: '100%',
    }}
  >
    <h3
      style={{
        fontWeight: '400',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        padding: '4px',
        
      }}
    >
      {props.item.time}
    </h3>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: '4px',
      }}
    >
      <img
        style={{
          width: '42px',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          margin: '0 auto',
        }}
        alt="weather"
        src={`/icons/${props.item.icon}.png`}
      />
    </div>
    <h3
      style={{
        fontWeight: '600',
        fontSize: '14px',
        color: 'white',
        textTransform: 'uppercase',
        lineHeight: 1,
        marginBottom: '8px',
      }}
    >
      {Math.round(temperature_celsius)+ ' °C'}
    </h3>
  </Container>
  )
}

export default DailyForecastItem