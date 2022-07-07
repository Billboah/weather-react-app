import React from "react";

const Title = ({ setUnits }) => {
  const handleUnitsChange = () => {
    let celcius = document.querySelector("#celcius");
    let farin = document.querySelector("#farin");
    let farinSetting = farin.style.display;
    if (farinSetting === "block") {
      celcius.style.display = "block";
      farin.style.display = "none";
    } else {
      celcius.style.display = "none";
      farin.style.display = "block";
    }
  };

  return (
    <div className="flex justify-between">
      <h4 className="font-bold">the weather</h4>
      <div
        className="text-3xl absolute top-3 right-3 p-4 rounded-full  bg-white bg-opacity-20  "
        onClick={handleUnitsChange}
        aria-hidden="true"
      >
        <button
          id="celcius"
          className="block font-medium"
          onClick={(e) => setUnits(e.currentTarget.name)}
          name="imperial"
        >
          &deg;C
        </button>
        <button
          id="farin"
          className="hidden font-medium"
          onClick={(e) => setUnits(e.currentTarget.name)}
          name="metric"
        >
          &deg;F
        </button>
      </div>
    </div>
  );
};

export default Title;
