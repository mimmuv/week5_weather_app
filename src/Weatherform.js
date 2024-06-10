import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Changeunits from "./Changeunits";
import "./Weatherform.css";
import Formatdate from "./Formatdate";
import Weeklyforecast from "./Weeklyforecast";

export default function Weatherform(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    console.log(response);
    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=866a208a73eeff02182218e9441647a1&units=metric`;

    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weather.ready) {
    return (
      <div className="weatherform">
        <div className="container">
          <h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    onChange={changeCity}
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
          <h2 className="cityName">{weather.city}</h2>
          <ul>
            <li>
              <Formatdate date={weather.date} />
            </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 icontemp">
              {" "}
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weathericon"
              />
              <span>
                <Changeunits celcius={weather.temp} />
              </span>
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
          <Weeklyforecast />
        </div>
      </div>
    );
  } else {
    search();

    return "fetching data...";
  }
}
