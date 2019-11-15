import React from "react";
import "./WeatherParameter.css";


const WeatherParameter = props => (
    <div className="param">
        <div className="name">{props.name}</div>
        <div className="value">{props.value}</div>
    </div>

);

export default WeatherParameter;