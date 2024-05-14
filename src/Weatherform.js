import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./Weatherform.css";

export default function Weatherform() {
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  if (weather.ready) {
    return (
      <div className="weatherform">
        <div className="container">
          <h1>
            <form id="search-city">
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    className="changecity"
                    placeholder="type to change city"
                  />{" "}
                </div>
                <div className="col-3">
                  <input type="submit" className="search" value="search" />
                </div>
              </div>
            </form>
          </h1>

          <br />
          <h2 id="city-name">{weather.city}</h2>
          <ul>
            <li id="date-today">Monday, June 12th 2023</li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              {" "}
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weathericon"
                id="weather-icon"
              />{" "}
              {Math.round(weather.temp)}℃
            </div>

            <div className="col-6" id="weather-elements">
              <ul>
                <li>
                  Humidity: <span>{weather.humidity} </span>%
                </li>
                <li>
                  Wind Speed: <span>{weather.wind} </span>km/hr
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  } else {
    let city = "harare";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=866a208a73eeff02182218e9441647a1&units=metric`;

    axios
      .get(url)
      .then(showWeather)
      .catch((error) => "enter valid city");

    return "fetching data...";
  }
}
