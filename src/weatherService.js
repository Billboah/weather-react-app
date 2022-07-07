const API_KEY = "e33eab6c37db46d8e69931c9079506b9";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

const formatCurrentWeather = (data) => {
  const {
    weather,
    name,
    timezone,
    dt,
    sys: { country },
    main: { temp, humidity },
    wind: { speed },
    clouds: { all },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    temp,
    humidity,
    details,
    icon,
    name,
    dt,
    country,
    speed,
    all,
    timezone,
  };
};
const getFormatedWeatherData = async (searchParams) => {
  const formatedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  return formatedCurrentWeather;
};

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormatedWeatherData;

export { iconUrlFromCode };
