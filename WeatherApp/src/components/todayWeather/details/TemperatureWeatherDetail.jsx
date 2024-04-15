import React from 'react'
import { kelvinToCelsius } from '../../../utilities/DataUtils';

const TemperatureWeatherDetail = (props) => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontWeight: '600',
    fontSize: '16px', // default size for md breakpoint
    color: 'white',
    textTransform: 'uppercase',
    lineHeight: 1,
    marginBottom: '8px',
  };
    const temperature_celsius = kelvinToCelsius(props.temperature);
  return (
    <div style={boxStyle}>
    <h3 className="font-semibold text-white uppercase text-xs sm:text-sm md:text-base mb-2">
      {Math.round(temperature_celsius)} °C
    </h3>
    <h4 className="text-xs sm:text-sm md:text-base text-white/70 leading-normal">
      {props.description}
    </h4>
  </div>
  
  )
}

export default TemperatureWeatherDetail