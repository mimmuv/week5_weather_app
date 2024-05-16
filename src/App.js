import React from "react";
import Weatherform from "./Weatherform";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weatherform defaultCity="Harare" />
        <small>
          Coded by{" "}
          <a href="https://bejewelled-faun-042079.netlify.app/" target="_blank">
            {" "}
            Miriro.{" "}
          </a>{" "}
          See my..
          <a
            href="https://github.com/mimmuv/miriro-vanilla-weather-app"
            target="_blank"
          >
            GitHub repository.
          </a>
        </small>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
