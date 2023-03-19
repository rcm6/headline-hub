import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

//get the current date and time
var date = moment().format("dddd, MMMM Do YYYY, h:mm a");

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  //get the weather
  const fetchWeather = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_API_KEY_OPENWEATHER;
    //const apiKey = 'd1e2d0763204896fd894698f5c6e27ee';
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=50.975426715554896&lon=-3.255184197169449&appid=${apiKey}`;
    const response = await axios.get(url);
    setWeather({
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      image: response.data.weather[0].icon,
    });
    setCity(response.data.name);
  };

  useEffect(() => {
    //get user's current location
    const getPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    if (navigator.geolocation) {
      getPosition()
        .then((position) => {
          //If user allows location service then fetch data & send it to fetchWeather function
          fetchWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((_err) => {
          //If user denies location service then send default lat/long to fetchWeather function
          fetchWeather(42.4337516, -84.019569);
          alert(
            "You have disabled location services. Allow access to your current location for real-time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }
  }, []);

  //convert temperature to celcius
  //let conTemp = parseFloat(weather.temp) - 273.15;
  //{conTemp.toFixed(0)} &#8451; {weather.descp} for {city},{' '}

  //convert temperature to celcius
  let conTemp = "";
  if (weather) {
    conTemp = parseFloat(weather.temp) - 273.15;
  }

  const DisplayWeather = () => {
    return (
      <div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.image}.png`}
            alt="..."
          />
          {conTemp.toFixed(0)} &#8451; {weather.descp} for {city},{" "}
          {weather.country} - {date}
        </div>
      </div>
    );
  };

  return (
    <div className="mainweather">
      <div className="weather">{weather && <DisplayWeather />}</div>
    </div>
  );
};

export default Weather;
