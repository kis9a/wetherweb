import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="box">
        <h1>
          {data.name} - {data.sys.country}
        </h1>
      </div>
      <div className="box">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="img"
        />
        <p>Weather: {data.weather[0].description}</p>
      </div>
      <div className="box">
        <p>Temperature: {data.main.temp}K</p>
      </div>
      <div className="box">
        <p>Windspeed: {data.wind.speed}K</p>
      </div>
    </div>
  );
};

export default Weather;
