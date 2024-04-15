import React from "react";
import { Image } from "react-bootstrap";
const WeatherIconDetail = ({ iconID }) => {
  return (
    <Image
      className="w-12 h-auto flex items-center justify-center self-center mx-auto p-0"
      alt="weather"
      src={`/icons/${iconID}.png`}
    />
  );
};

export default WeatherIconDetail;
