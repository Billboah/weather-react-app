import React from "react";
import { DateTime } from "luxon";
import { iconUrlFromCode } from "./weatherService";

const CurrentWeather = ({
  weather: { details, temp, icon, name, timezone, dt, country },
}) => {
  return (
    <div className="flex gab-3 sm:gab-5 md:gap-9 ">
      <div className="text-7xl md:text-9xl flex justify-center items-center">
        <div>{temp.toFixed()}&deg;</div>
      </div>
      <div className="px-5 flex flex-col justify-between py-9 md:py-16">
        <div className="text-2xl md:text-4xl font-medium">
          {name}/{country}
        </div>
        <div className="text-sm pt-3">
          {DateTime.fromSeconds(dt)
            .setZone(timezone)
            .toFormat("cccc, dd/MM/yyyy hh:mm a")}
        </div>
      </div>
      <div className="text-sm flex flex-col justify-between items-center  py-6 md:py-16">
        <img className="h-20" src={iconUrlFromCode(icon)} alt="" />
        <div>{details}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
