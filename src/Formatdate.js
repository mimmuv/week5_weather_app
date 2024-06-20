import React from "react";

export default function Formatdate(props) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = weekDays[props.date.getDay()];
  let currentHour = props.date.getHours();
  let currentMinutes = props.date.getMinutes();

  return (
    <div>
      {weekDay}, {currentHour}:{currentMinutes}
    </div>
  );
}
