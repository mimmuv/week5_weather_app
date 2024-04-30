import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [message, setMessage] = useState(" ");
  //const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  // function searchSubmit(event) {
  //   event.preventDefault();
  // }

  function showWeather(response) {
    //setLoaded(true);
    //setTemperature();
    console.log(response);

    // if (response.data !== null || response.data !== undefined) {
    // setLoaded(false);
    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    if (response.data !== null || response.data !== undefined) {
      setMessage(
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)}km/hr </li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={weather.description}
            />
          </li>
        </ul>
      );
    } else {
      setMessage("test");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function fetchData(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=866a208a73eeff02182218e9441647a1&units=metric`;

    axios
      .get(url)
      .then(showWeather)
      .catch((error) => setMessage("enter valid city"));
  }
  return (
    <div>
      <form onSubmit={fetchData}>
        <input
          type="text"
          onChange={updateCity}
          placeholder="start typing to search"
        />
        <button>Search</button>
      </form>
      <div>{message}</div>
    </div>
  );
}
