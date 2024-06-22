import React from "react";
import axios from "axios";
import "./Weeklyforecast.css";
import { useState, useEffect } from "react";
//import Forecastday from "./Forecastday";
import Displayforecast from "./Displayforecast";

export default function Weeklyforecast(props) {
  //console.log(props);
  let [ready, setReady] = useState(false);
  let [forecastweather, setWeather] = useState(null);

  function setWeeklyForecast(response) {
    // console.log(response);
    setReady(true);
    setWeather(response.data.daily);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="WeeklyForecast">
        <div className="row">
          <div className="col">
            <Displayforecast data={forecastweather[0]} />{" "}
          </div>
          <div className="col">
            <Displayforecast data={forecastweather[1]} />{" "}
          </div>
          <div className="col">
            <Displayforecast data={forecastweather[2]} />{" "}
          </div>
          <div className="col">
            <Displayforecast data={forecastweather[3]} />{" "}
          </div>
          <div className="col">
            <Displayforecast data={forecastweather[4]} />{" "}
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
