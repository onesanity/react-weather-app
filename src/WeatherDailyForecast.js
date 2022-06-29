import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import FormattedDate from "./FormattedDate";
import WeatherTempConversion from "./WeatherTempConversion";
import WeatherSearch from "./WeatherSearch";

export default function WeatherDailyForecast(){
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