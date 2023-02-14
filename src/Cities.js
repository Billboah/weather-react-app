import React from "react";

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

  return (
    <div className="flex flex-col items-baseline py-5 px-2 border-b-2 border-white border-opacity-50">
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
