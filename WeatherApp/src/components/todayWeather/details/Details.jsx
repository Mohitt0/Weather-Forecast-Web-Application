import React from "react";
import ErrorBox from "../../Reusable/ErrorBox";
import Layout from "../../Reusable/Layout";
import CityDateDetails from "./CityDateDetails";
import { getDayMonthFromDate } from "../../../utilities/DateTimeUtils";
import TemperatureWeatherDetail from "./TemperatureWeatherDetail";
import WeatherIconDetail from "./WeatherIconDetail";
import { Col, Row } from "react-bootstrap";
const dayMonth = getDayMonthFromDate();
const Details = ({ data }) => {
  const noDataProvided = !data || data.cod === "404";
  let content = <ErrorBox flex="1" type="error" />;
  if (!noDataProvided) {
    const city = data.name;
    const temperature = data?.main?.temp;
    const weather = data?.weather;

    if (city && temperature !== undefined && weather.length > 0) {
      const description = weather[0]?.description;
      content = (
        <>
          <Row>
            <Col xs={4} style={{ height: "80px" }}>
              <CityDateDetails city={city} date={dayMonth} />
            </Col>
            <Col xs={4} style={{ height: "80px" }}>
              <TemperatureWeatherDetail
                temperature={temperature}
                description={description}
              />
            </Col>
            <Col
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
              }}
            >
              <WeatherIconDetail iconID={weather[0]?.icon} />
            </Col>
          </Row>
        </>
      );
    } else {
      content = <ErrorBox flex="1" type="error" />;
    }
  }

  return <Layout title="CURRENT WEATHER" content={content} />;
};

export default Details;
