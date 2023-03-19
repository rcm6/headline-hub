import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import moment from "moment";

//get the current date and time
var date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss a');

// geolocation

/*

if (navigator.geolocation) {
  this.getPosition()
    //If user allows location service then fetch data & send it to weather function
    .then((position) => {
      this.Weather(position.coords.latitude, position.coords.longitude);
    })
    .catch((err) => {
      //If user denies location service then send default lat/long to weather function
      this.Weather(42.4337516, -84.019569);
      alert(
        "You have disabled location services. Allow access to your current location for real-time weather."
      );
    });
} else {
  alert("Geolocation not available");
}
*/

////////////////////////////////////////////////////////////////////////



//get the weather
function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    //const apiKey = process.env.REACT_APP_API_KEY

    const apiCall = async (e) => {
        e.preventDefault()
        const apiKey = process.env.REACT_APP_API_KEY_OPENWEATHER;
        //const apiKey = 'd1e2d0763204896fd894698f5c6e27ee';
        //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=50.975426715554896&lon=-3.255184197169449&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            country: res.data.sys.country,
            image: res.data.weather[0].icon,
        })

        setCity(res.data.name)

    }

    //convert temperature to celcius
    let conTemp = parseFloat(weather.temp) - 273.15;

    

    const DisplayWeather = () => {

      
        return <div>

  <div><img src="https://openweathermap.org/img/wn/01d.png" alt="..." /> {conTemp.toFixed(0)} &#8451; {weather.descp} for {city}, {weather.country} - {date}</div>
        </div>
    }
    return (<>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <button className="btn btn-light" >click to load weather</button>
                </form>

                {weather && <DisplayWeather />}
            </div>
        </div>
    </>
    )
}



export default Weather;