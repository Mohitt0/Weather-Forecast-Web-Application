import React from 'react'
import { getWeekDays } from '../../utilities/DateTimeUtils';
import ErrorBox from '../Reusable/ErrorBox';
import Layout from '../Reusable/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import DayWeatherDetails from './DayWeatherDetails'
import WeeklyForecastItem from './WeeklyForecastItem';
import UnfedForecast from './UnfedForecast'
import {kelvinToCelsius} from "../../utilities/DataUtils"
const WeeklyForecast = ({data}) => {
  const forecastDays = getWeekDays();
  const noDataProvided =
    !data ||
    !data.list ||
    data.list.length === 0;

  let content = (
    <div style={{ width: '100%' }}>
      <ErrorBox type="error" />
    </div>
  );
  if(!noDataProvided){
    content=(
     
      <Row xs={12} className="d-flex flex-column gap-[4px] p-0">
        {data?.list?.map((item, idx) => {
            const temperature_celsius = kelvinToCelsius(item?.temp);
            return (
          <Col key={idx} xs={12} className="flex justify-between align-items-center" style={{ padding: '2px 0 2px', background: 'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px', borderRadius: '8px' }}>
            <DayWeatherDetails
              day={forecastDays[idx]}
              src={`/icons/${item?.icon}`}
              description={item?.description}
            />
    
            <div className="d-flex flex-column align-items-center ">
              <WeeklyForecastItem
                type="temperature"
                value={Math.round(temperature_celsius) + ' °C'}
                color="black"
              />
              <WeeklyForecastItem
                type="clouds"
                value={item?.clouds + ' %'}
                color="black"
              />
            </div>
    
            <div className="d-flex flex-column align-items-center">
              <WeeklyForecastItem
                type="wind"
                value={item?.wind + ' m/s'}
                color="green"
              />
              <WeeklyForecastItem
                type="humidity"
                value={item?.humidity + ' %'}
                color="green"
              />
            </div>
          </Col>
  )})}
        {data?.list?.length === 5 && (
          <Col xs={12} className="d-flex align-items-center" style={{ padding: '2px 0 2px', background: 'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px', borderRadius: '8px' }}>
            <UnfedForecast
              day={forecastDays[5]}
              value="NaN"
            />
          </Col>
        )}
      </Row>
      
    )
  }
  return (
    <Layout
      title="WEEKLY FORECAST"
      content={content}
      mb="0.8rem"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 0 0',
      }}
    />
  )
}

export default WeeklyForecast