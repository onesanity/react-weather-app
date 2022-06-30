import React, {useState} from "react";

export default function WeatherTempConversion(props){

    return (
      <span className="WeatherTempConversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C  
        </span>
        </span>
  );
}