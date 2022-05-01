import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Boma Dapper and is
          <a
            href="https://github.com/Dapper50/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub {""}
          </a>
          and <a href="">hosted on Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
