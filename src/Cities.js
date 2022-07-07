import React from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";

const Cities = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Tokyo",
    },
    {
      id: 3,
      title: "Accra",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "London",
    },
  ];

  const handleLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };

  return (
    <div className="flex flex-col items-baseline py-5 px-2 border-b-2 border-white border-opacity-50">
      <UilLocationPoint
        className=" cursor-pointer transition ease-out hover:scale-125 m-0 animate-pulse "
        onClick={handleLocationClick}
        size={25}
      />
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-xl my-6 p-0 transition ease-out hover:scale-110"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default Cities;
