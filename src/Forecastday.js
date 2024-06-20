import React from "react";

export default function Forecastday(props) {
  console.log(props);
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  //let weeklyDay = weekdays[props.date.getDay()];
  let date = new Date(props.date * 1000);
  let weekdayIndex = date.getDay();
  let weekday = weekdays[weekdayIndex];

  return <div>{weekday}</div>;
}
