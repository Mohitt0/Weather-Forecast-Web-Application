import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../Reusable/Layout";
import ErrorBox from "../../Reusable/ErrorBox";
import DailyForecastItem from "./DailyForecastItem";

const DailyForecast = ({ data, forecastList }) => {
  const noDataProvided =
    !data || !forecastList || data.cod === "404" || forecastList.cod === "404";
  let subheader;
  if (!noDataProvided && forecastList.length > 0) {
    subheader = (
      <Container
        as="h5"
        style={{
          fontSize: "12px",
          textAlign: "center",
          lineHeight: 1,
          color: "#04C4E0",
          
          marginBottom: "1rem",
        }}
      >
        {forecastList.length === 1
          ? "1 available forecast"
          : `${forecastList.length} available forecasts`}
      </Container>
    );
  }
  let content;
  if (noDataProvided) content = <ErrorBox flex="1" type="error" />;
  if (!noDataProvided && forecastList.length > 0) {
    content = (
     
        <Row className="gap-4 p-0 justify-center">
          {forecastList.map((item, idx) => (
            <Col key={idx} xs={4} sm={2} className="d-flex flex-column align-items-center p-0" style={{ marginBottom: '1rem' }}>
              <DailyForecastItem item={item} data={data} />
            </Col>
          ))}
        </Row>
      
    );
  }

  if (!noDataProvided && forecastList && forecastList.length === 0) {
    subheader = (
      <ErrorBox
        flex="1"
        type="info"
        margin="2rem auto"
        errorMessage="No available forecasts for tonight."
      />
    );
  }
  return (
    <Layout
    title="TODAY'S FORECAST"
    content={content}
    sectionSubHeader={subheader}
    sx={{ marginTop: '2.9rem' }}
    mb="0.3rem"
  />
  )
};

export default DailyForecast;
