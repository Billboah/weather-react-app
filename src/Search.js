import React, { useEffect, useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

const Search = ({ setQuery, weather: { icon } }) => {
  const [city, setCity] = useState("");
  const [background, setBackground] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.length === 0) {
      alert("Please enter a city name");
    } else {
      setQuery({ q: city });
      setCity("");
    }
  };
  useEffect(() => {
    if (
      icon === "01n" ||
      icon === "02n" ||
      icon === "03n" ||
      icon === "04n" ||
      icon === "09n" ||
      icon === "10n" ||
      icon === "11n" ||
      icon === "13n" ||
      icon === "50n"
    ) {
      setBackground("bg-gray-500");
    } else {
      setBackground("bg-red-400");
    }
  }, [icon]);

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="flex ">
        <input
          className="w-4/5 bg-transparent border-0 outline-0 border-b-2 border-white border-opacity-50 m-0 pl-0 pr-1 pb-0.5 focus:outline-none placeholder-white capitalize "
          type="text"
          value={city}
          placeholder="Search location..."
          onChange={(e) => setCity(e.currentTarget.value)}
        />
      </div>
      <button
        className={`p-7 ${background} absolute top-0 right-0 hover:bg-white hover:bg-opacity-40`}
      >
        <UilSearch size={30} />
      </button>
    </form>
  );
};

export default Search;
