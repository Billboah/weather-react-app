import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Details from "./Details";
import Title from "./Title";
import Cities from "./Cities";
import getFormatedWeatherData from "./weatherService";
import cloudyDay from "./assets/day/cloudy.webp";
import cloudyNight from "./assets/night/cloudy.webp";
import clearDay from "./assets/day/clear.jpeg";
import clearNight from "./assets/night/clear.webp";
import rainyDay from "./assets/day/rainy.webp";
import rainyNight from "./assets/night/rainy.webp";
import snownyDay from "./assets/day/snowny.webp";
import snownyNight from "./assets/night/snowny.jpeg";
import mistDay from "./assets/day/mist.jpg";
import mistNight from "./assets/night/night.jpg";

function App() {
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState("");
  const [query, setQuery] = useState("");
  let [bodyBackground, setBodyBackground] = useState({
    backgroundImage: `url(${rainyNight})`,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormatedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    if (query === "") {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    let icon = weather.icon;
    if (icon === "02d" || icon === "03d" || icon === "04d") {
      setBodyBackground({ backgroundImage: `url(${cloudyDay})` });
    } else if (icon === "02n" || icon === "03n" || icon === "04n") {
      setBodyBackground({
        backgroundImage: `url(${cloudyNight})`,
      });
    } else if (icon === "01d") {
      setBodyBackground({ backgroundImage: `url(${clearDay})` });
    } else if (icon === "01n") {
      setBodyBackground({ backgroundImage: `url(${clearNight})` });
    } else if (icon === "09d" || icon === "10d" || icon === "11d") {
      setBodyBackground({ backgroundImage: `url(${rainyDay})` });
    } else if (icon === "09n" || icon === "10n" || icon === "11n") {
      setBodyBackground({ backgroundImage: `ulr(${rainyNight})` });
    } else if (icon === "13d") {
      setBodyBackground({ backgroundImage: `url(${snownyDay})` });
    } else if (icon === "13n") {
      setBodyBackground({ backgroundImage: `url(${snownyNight})` });
    } else if (icon === "50d") {
      setBodyBackground({ backgroundImage: `url(${mistDay})` });
    } else {
      setBodyBackground({ backgroundImage: `url(${mistNight})` });
    }
  }, [weather.icon]);

  return (
    <div
      style={bodyBackground}
      className="bg-no-repeat bg-center bg-cover min-h-min min-w-min h-screen w-full"
    >
      <div
        className={`flex flex-col md:flex md:flex-row justify-between w-full bg-black bg-opacity-30    h-screen text-white `}
      >
        <div className="flex flex-col md:h-screen  justify-between h-2/5 pl-12 pb-20 pt-12 pr-25 w-full relative">
          <Title setUnits={setUnits} units={units} />
          {weather && <CurrentWeather weather={weather} />}
        </div>
        <div className="bg-white bg-opacity-20 py-10 px-10 w-full md:w-2/5 md:h-full overflow-y-auto h-3/5 border-1-inherit shadow-lg md:text-5 relative">
          <Search setQuery={setQuery} weather={weather} />
          <Cities setQuery={setQuery} />
          {weather && <Details weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;
