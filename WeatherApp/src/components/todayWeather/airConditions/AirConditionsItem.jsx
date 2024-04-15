import React from "react";
import { PiThermometerLight } from "react-icons/pi";
import { LuWind } from "react-icons/lu";
import { BsClouds } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { Col, Row } from 'react-bootstrap'
const AirConditionsItem = (props) => {
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
    <Col xs={3} style={{ padding: '0', height: '80px' }}>
      <Row style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(255, 255, 255, .7)', padding: 0 }}>
          {iconContent}
          <div style={{ color: 'rgba(255, 255, 255, .7)', fontSize: '14px', paddingLeft: '6px', paddingTop: '2px' }}>
            {props.title}
          </div>
        </div>
      </Row>
      <Row style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{  fontWeight: '600', fontSize: '16px', color: 'white', lineHeight: 1 }}>
          {props.value}
        </div>
      </Row>
    </Col>
  
  
  );
};

export default AirConditionsItem;
