import React from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
      <Weather defaultCity="Bentonville" />
      <footer>
        This project was coded by {" "}
        <a href="https://FrissonInducingTherapy.com" target="_blank">Alina Nguyen</a> and is{" "}
<a href="https://github.com/onesanity/react-weather-app" target="_blank">
  open sourced on Git Hub</a>.
    
    </footer>
    </div>
    </div>
  );
}
