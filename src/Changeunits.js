import React, { useState } from "react";
import "./Changeunits.css";

export default function Changeunits(props) {
  const [unit, setUnit] = useState("celcius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="changeUnits">
        {Math.round(props.celcius)} ℃ |{" "}
        <a href="/" onClick={displayFahrenheit}>
          ℉{" "}
        </a>
      </div>
    );
  } else {
    return (
      <div className="changeUnits">
        {Math.round((props.celcius * 9) / 5 + 32)}{" "}
        <a href="/" onClick={displayCelcius}>
          ℃{" "}
        </a>
        | ℉
      </div>
    );
  }
}
