import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1>{props.data.city}</h1>
          </div>
          <div className="col-3">
            <div className="damn-container d-flex justify-content-end">
              <WeatherIcon code={props.data.icon} size={52} />

              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>

        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <ul>
              <li>
                Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
