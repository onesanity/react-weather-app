import React, {useState} from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherDailyForecast from "./WeatherDailyForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      currentDate: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
    });
  }

  function search(){
    const apiKey = "e87dcc8ca05ed4bca8a5c243ea815556";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event){
    event.preventDefault();
    //search for a city--make the API call
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value); //update the city
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
          <input 
          type="search" 
          placeholder="Enter a city..." 
          className="form-control" 
          autoFocus="on"
          onChange={handleCityChange}
          />
          </div>
          <div className="col-3">
          <input 
          type="submit" 
          value="Search" 
          className="btn btn-primary w-100"
          />
    </div></div>
        </form>
        <WeatherSearch data={weatherData} />
        <WeatherDailyForecast coordinates={weatherData.coordinates} />
      </div>
      );

  } else {
    search();
    return "Loading..."
  }
}
