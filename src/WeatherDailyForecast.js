import React from "react";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import FormattedDate from "./FormattedDate";
import WeatherTempConversion from "./WeatherTempConversion";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function WeatherDailyForecast(props){
  function handleResponse(response){
    console.log(response.data);
  }
  let apiKey ="e87dcc8ca05ed4bca8a5c243ea815556";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metrics`;
  
  axios.get(apiUrl).then(handleResponse);

  return ( 
  <div className="WeatherDailyForecast">
    <div className="row">
      <div className="col">
        <div className="WeatherForecast-day">Thurs</div>
        <WeatherIcon code="01d" size={28} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">19
          </span>
          <span className="WeatherForecast-temperature-min">10
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}