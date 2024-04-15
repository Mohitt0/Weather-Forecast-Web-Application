import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWeatherData } from "../redux/weatherSlice";
import ErrorBox from "../components/Reusable/ErrorBox";
import NavbarSection from "../components/navbar/NavbarSection";
import Loading from "../components/Reusable/Loading";
import { ALL_DESCRIPTIONS } from "../utilities/DateConstant";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "../utilities/DataUtils";
import { transformDateFormat } from "../utilities/DateTimeUtils";
import TodayWeather from "../components/todayWeather/TodayWeather";
import WeeklyForecast from "../components/weeklyForecast/WeeklyForecast";
import { Row, Col } from 'react-bootstrap';
const WeatherPage = () => {
  let appContent;
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const dispatch = useDispatch();
  const { cityName } = useParams();
  const { weatherData, forecastData, loading, error } = useSelector(
    (state) => state.weather
  );
  const currentDate = transformDateFormat();
  const date = new Date();
  let dt_now = Math.floor(date.getTime() / 1000);
  useEffect(() => {
    dispatch(fetchWeatherData(cityName));
  }, [dispatch, cityName]);

  useEffect(() => {
    const all_today_forecasts_list = getTodayForecastWeather(
      forecastData,
      currentDate,
      dt_now
    );

    const all_week_forecasts_list = getWeekForecastWeather(
      forecastData,
      ALL_DESCRIPTIONS
    );
    setTodayForecast(all_today_forecasts_list);
    setTodayWeather(weatherData);
    setWeekForecast({
      list: all_week_forecasts_list,
    });
  }, [weatherData, forecastData]);
  if (todayWeather && todayForecast && weekForecast) {
    appContent = (
      <React.Fragment>
        <Row>
      <Col xs={12} md={todayWeather ? 6 : 12}>
        <Row>
          <Col xs={12}>
            <TodayWeather data={todayWeather} forecastList={todayForecast} />
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6}>
        <WeeklyForecast data={weekForecast} />
      </Col>
    </Row>
      </React.Fragment>
    );
  }
  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }
  if (loading) {
    appContent = <Loading />;
  }

  return (
    <div className="max-w-[95%] sm:max-w-[80%] md:max-w-screen-lg w-full h-full mx-auto pt-4 pb-12 pl-[24px] pr-[24px]  rounded-none sm:rounded-tl-lg sm:rounded-tr-lg shadow-none sm:shadow-md">
      <div className="grid gap-2">
        <NavbarSection />
        {appContent}
      </div>
    </div>
  );
};

export default WeatherPage;
