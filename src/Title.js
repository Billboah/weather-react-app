import React from "react";
import { useState } from "react";

const Title = ({ setUnits }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleUnitsChange = () => {
    const newUnits = isCelsius ? "imperial" : "metric";
    setUnits(newUnits);
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="flex justify-between">
      <h4 className="font-bold">the weather</h4>
      <button
        className="h-10 w-20 font-medium flex justify-center items-center text-2xl absolute top-3 right-3 rounded-full border shadow-lg"
        onClick={handleUnitsChange}
        aria-hidden="true"
      >
        {isCelsius ? "°C" : "°F"}
      </button>
    </div>
  );
};

export default Title;
