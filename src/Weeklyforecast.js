import React from "react";
import axios from "axios";
import "./Weeklyforecast.css";

export default function Weeklyforecast(props) {
  //console.log(props);

  // function getWeeklyData() {
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(setWeeklyForecast);
  // }

  function setWeeklyForecast(response) {
    console.log(response);
  }
  return (
    <div className="WeeklyForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <div>⛅️</div>
          <span className="maxTemp">25º</span>
          &nbsp;
          <span className="minTemp">5º</span>
        </div>
      </div>
    </div>
  );
}
