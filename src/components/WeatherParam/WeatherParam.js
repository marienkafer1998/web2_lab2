import React from "react";
import "./WeatherParam.css";


const WeatherParam = props => (
    <div className="param">
        <div className="name">{props.name}</div>
        <div className="value">{props.value}</div>
    </div>

);

export default WeatherParam;