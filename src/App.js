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
        <a 
          href="https://FrissonInducingTherapy.com" 
          target="_blank"
          rel="noopener noreferrer">Alina Nguyen</a> and is{" "}
        <a 
          href="https://github.com/onesanity/react-weather-app" 
          target="_blank"
          rel="noopener noreferrer">
          open sourced on Git Hub</a> and {" "}
          <a 
          href="https://illustrious-heliotrope-51d49f.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer">
          hosted on Netlify</a>.

    
    </footer>
    </div>
    </div>
  );
}
