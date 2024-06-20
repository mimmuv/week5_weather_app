import React from "react";
import axios from "axios";
import "./Weeklyforecast.css";
import { useState } from "react";

export default function Weeklyforecast(props) {
  //console.log(props);
  let [ready, setReady] = useState(false);
  let [forecastweather, setWeather] = useState(null);

  // function getWeeklyData() {

  // }

  function setWeeklyForecast(response) {
    console.log(response);
    setReady(true);
    setWeather(response.data.daily);
  }
  if (ready) {
    return (
      <div className="WeeklyForecast">
        <div className="row">
          <div className="col">
            <div className="forecastDay">{forecastweather[0].dt}</div>
            <div>
              <img
                className="weeklyicon"
                src={`https://openweathermap.org/img/wn/${forecastweather[0].weather[0].icon}@2x.png`}
                alt="weeklyweathericon"
              />
            </div>
            <span className="maxTemp">
              {Math.round(forecastweather[0].temp.max)}º
            </span>
            &nbsp;
            <span className="minTemp">
              {Math.round(forecastweather[0].temp.min)}º
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(setWeeklyForecast);
  }
}
