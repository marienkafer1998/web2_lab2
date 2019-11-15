import React from "react";
import WeatherParameter from "../WeatherParameter/WeatherParameter";
import Loader from "../Loader/Loader";
import "./Weather.css";
import {Button, Col, Container, Row} from "reactstrap";

const API_ICON_URL = "https://openweathermap.org/img/wn/";

export function getIconURL(iconCode) {
    return `${API_ICON_URL}${iconCode}.png`;
}

export default class Weather extends React.Component {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        if (!this.props.weather) {
            return <Loader/>

        } else {
            return this.renderWeather();
        }
    }


    renderWeather() {

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
        let header, body;
        if (this.props.weather) {
            header = <Container className={"small-weather"}>
                <Row>

                    <Col className={"cityName"}>
                        {cityName}
                    </Col>
                    <Col className={"temp"}>
                        {(temperature - 273.15).toFixed(1).toString()}℃
                    </Col>
                    <Col className={"image"}>
                        <img src={getIconURL(icon)} alt="Weather icon" />
                    </Col>
                    <Col>
                        {onDelete && <Button size={"10px"} className="button" onClick={onDelete}>X</Button>}
                    </Col>
                </Row>
            </Container>;
            body = <div>
                <WeatherParameter name="Wind" value={`${windSpeed} m/s`} />
                <WeatherParameter name="Cloudness" value={description} />
                <WeatherParameter name="Pressure" value={`${pressure} hPa`} />
                <WeatherParameter name="Humidity" value={`${humidity}%`} />
                <WeatherParameter name="Coords" value={`${latitude}, ${longitude}`} />
            </div>}
        return (
            <Container className="weather">
                {header}
                {body}
            </Container>

        );
    }

}

