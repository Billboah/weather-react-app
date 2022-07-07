import React from "react";

const Details = ({ weather: { speed, humidity, all } }) => {
  return (
    <div className="py-10 px-2 border-b-2 border-b-white border-opacity-50">
      <div className="pb-5 font-bold">Weather Details</div>
      <li className="py-6 flex justify-between">
        <span>Cloudy</span>
        <span id="wind">{all}%</span>
      </li>
      <li className="py-6 flex justify-between">
        <span>Humidity</span>
        <span id="humidity">{humidity}%</span>
      </li>
      <li className="py-6 flex justify-between">
        <span>Wind</span>
        <span id="wind">{speed}km/h</span>
      </li>
    </div>
  );
};

export default Details;
