import React from "react";
import Forecastday from "./Forecastday";

export default function Displayforecast(props) {
  let forecastweather = props.data;

  return (
    <div className="forecastDay">
      <div>
        <Forecastday date={forecastweather.dt} />
      </div>
      <div>
        <img
          className="weeklyicon"
          src={`https://openweathermap.org/img/wn/${forecastweather.weather[0].icon}@2x.png`}
          alt="weeklyweathericon"
        />
      </div>
      <span className="maxTemp">{Math.round(forecastweather.temp.max)}º</span>
      &nbsp;
      <span className="minTemp">{Math.round(forecastweather.temp.min)}º</span>
    </div>
  );
}
