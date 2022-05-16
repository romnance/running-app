import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function MarqueeText() {
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  const WEATHER_API =
    "//api.openweathermap.org/data/2.5/weather?lat=59.3326&lon=18.0649&units=metric&appid=b6e3fffce345ff642781561151cc05ea";
  const getWeather = (API) => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        var datadesc = data.weather[0].description;
        const datadesc2 = datadesc.charAt(0).toUpperCase() + datadesc.slice(1);
        setWeather(datadesc2);
        var temp = Math.round(data.main.temp);
        setTemperature(temp);
        var wind = data.wind.speed;
        setWind(wind);
        const baseUrl = "http://openweathermap.org/img/wn/";
        const path1 = data.weather[0].icon;
        const path2 = "@2x.png";
        const fullUrl = `${baseUrl}/${path1}${path2}`;
        setIcon(fullUrl);
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  };

  useEffect(() => {
    getWeather(WEATHER_API);
  }, []);

  return (
    <div className="Marquee-container">
      <Marquee
        style={{ height: "45px", fontWeight: "600" }}
        pauseOnHover={true}
        speed={100}
        gradientColor={[255, 139, 46]}
        gradientWidth={20}
      >
        <p>Stockholm </p>
        <p>
          <img className="Weather-icon" src={icon} alt="weather-icon" />
        </p>
        <p>{temperature}° C </p>
        <p>{weather} </p>
        <p>Wind {wind} m/s S</p>
        <p>There is no bad weather, just soft runners</p>
      </Marquee>
    </div>
  );
}

export default MarqueeText;
