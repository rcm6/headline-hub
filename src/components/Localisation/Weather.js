import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Spinner } from "react-bootstrap";
import "./styles.css";

//get the current date and time
var date = moment().format("dddd, MMMM Do YYYY, h:mm a");

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  //get the weather
  const fetchWeather = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_API_KEY_OPENWEATHER;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await axios.get(url);
    setWeather({
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      image: response.data.weather[0].icon,
    });
    setCity(response.data.name);
    setLoading(false);
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
  let conTemp = "";
  if (weather) {
    conTemp = parseFloat(weather.temp) - 273.15;
  }

  const DisplayWeather = () => {
    return (
      <div>
        <div class="card text-start" id="weather-card">
          <div className="cities">
            <div className="city">
              <h2 className="card-title city-name">
                <span>{city}</span>
                <sup>{weather.country}</sup>
              </h2>
              <p className="card-text city-temp">{conTemp.toFixed(0)} &#8451;</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.image}@2x.png`}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">{date}</p>
              </div>
              <p className="card-footer bg-transparent .weather-description">
                {weather.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mainweather">
      <div className="weather text-center">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <DisplayWeather />
        )}
      </div>
    </div>
  );
};

export default Weather;
