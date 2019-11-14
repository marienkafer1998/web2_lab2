import React from "react";
import WeatherParam from "./WeatherParam";
import Loader from "./Loader";

const API_ICON_URL = "https://openweathermap.org/img/wn/";

export function getIconURL(iconCode) {
    return `${API_ICON_URL}${iconCode}.png`;
}

export default class Weather extends React.Component {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        console.log('In weather');
        if (!this.props.weather) {
            return this.renderLoader();
        }

        return this.renderWeather();
    }

    renderLoader() {
        return (
            <Loader/>
        )
    }

    renderWeather() {
        console.log(this.props.weather);
        const {
            weather: {
                cityName,
                temperature,
                icon,
                windSpeed,
                description,
                pressure,
                humidity,
                coords: {
                    lat: latitude,
                    lon: longitude
                } = {}
            }, onDelete
        } = this.props;
        return (
            <div className="weather">
                <div className="header">
                    <div className="city-name">{cityName}</div>
                    <div className="temperature">{temperature} &#8451;</div>
                    <img src={getIconURL(icon)} alt="Weather icon" />
                </div>

                <WeatherParam name="Wind" value={`${windSpeed} m/s`} />
                <WeatherParam name="Cloudness" value={description} />
                <WeatherParam name="Pressure" value={`${pressure} hPa`} />
                <WeatherParam name="Humidity" value={`${humidity}%`} />
                <WeatherParam name="Coords" value={`${latitude}, ${longitude}`} />
                {onDelete && <button onClick={onDelete}>X</button>}

            </div>
        );
    }

}

