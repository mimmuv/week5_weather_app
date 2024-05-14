import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [output, setOutput] = useState("");
  //const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    //setLoaded(true);
    //setTemperature();
    console.log(response);

    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      ready: true,
    });
    // if (response.data !== null || response.data !== undefined) {
    // setLoaded(false);

    // if (response.data === null) {
    //   setOutput(<p>testing</p>);
    // }

    //if (response.data !== null || response.data !== undefined) {
    if (weather.ready) {
      setOutput(
        <div className="Container">
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="cityname">{response.data.name}</li>
                <li>
                  <img
                    src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                    alt="icon"
                  />
                </li>
                <li>Temperature: {weather.temp}°C</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Description: {response.data.weather[0].description}</li>
                <li>Humidity: {response.data.main.humidity}%</li>
                <li>Wind: {Math.round(response.data.wind.speed)}km/hr </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      setOutput("test");
    }
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function fetchData(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=866a208a73eeff02182218e9441647a1&units=metric`;

    axios
      .get(url)
      .then(showWeather)
      .catch((error) => setOutput("enter valid city"));
  }
  return (
    <div className="weather">
      <form onSubmit={fetchData}>
        <input
          type="text"
          onChange={updateCity}
          placeholder="start typing to search"
        />
        <button>Search</button>
      </form>

      <div className="message">{output}</div>
    </div>
  );
}
