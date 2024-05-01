import React from "react";

import "./Testweather.css";

import "bootstrap/dist/css/bootstrap.css";

function Testweather() {
  return (
    <div className="testweather">
      <div className="container">
        <h1>
          <form id="search-city">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  id="change-city"
                  placeholder="type to change city"
                />{" "}
              </div>
              <div className="col-3">
                <input type="submit" id="search-button" value="search" />
              </div>
            </div>
          </form>
        </h1>

        <br />
        <h2 id="city-name">Harare</h2>
        <ul>
          <li id="date-today">Monday, June 12th 2023</li>
          <li id="description">Windy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="weathericon"
              id="weather-icon"
            />{" "}
            29℃
          </div>

          <div className="col-6" id="weather-elements">
            <ul>
              <li>
                Humidity: <span id="humidity">48 </span>%
              </li>
              <li>
                Wind Speed: <span id="wind">13 </span>km/hr
              </li>
              <li>
                Precipitation: <span id="precipitation">13 </span>%
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Testweather;
