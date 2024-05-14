import React from "react";
import Weatherform from "./Weatherform";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weatherform defaultCity="Harare" />
        <small>
          Coded by Miriro. See my..
          <a
            href="https://github.com/mimmuv/miriro-vanilla-weather-app"
            target="_blank"
          >
            GitHub repository.
          </a>
        </small>
        <br />
        <br />
        <Weather city="London" />
      </div>
    </div>
  );
}

export default App;
