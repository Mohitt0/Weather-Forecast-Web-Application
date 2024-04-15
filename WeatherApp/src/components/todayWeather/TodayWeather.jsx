import React from 'react'
import Details from './details/Details'
import AirConditions from './airConditions/AirConditions'
import { Row } from 'react-bootstrap';
import DailyForecast from './dailyForecast/DailyForecast';
const TodayWeather = ({data,forecastList}) => {
   const containerStyle = {
    padding: '3rem 0rem 0rem' // Mimicking the padding in Material-UI sx
  };
  return (
    <Row style={containerStyle}>
      <Details data={data} />
      <AirConditions data={data} />
      <DailyForecast data={data} forecastList={forecastList} />
    </Row>
  )
}

export default TodayWeather