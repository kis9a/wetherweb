import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  // const fahrenheit =(data.main.temp * 1.8)
  return (
    <div>
      <h1>
        {data.name} - {data.sys.country}
      </h1>
      <div>
        <p>{data.weather[0].description}</p>
        <p>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="img"
          />
        </p>
      </div>
      <div>
        <p>{data.main.temp}K</p>
      </div>
    </div>
  );
};

export default Weather;
