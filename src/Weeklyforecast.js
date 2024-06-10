import React from "react";

import "./Weeklyforecast.css";

export default function Weeklyforecast() {
  return (
    <div className="WeeklyForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <div>⛅️</div>
          <span className="maxTemp">25º</span>
          <span className="minTemp">5º</span>
        </div>
      </div>
    </div>
  );
}
