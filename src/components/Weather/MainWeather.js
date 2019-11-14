import React from "react";
import WeatherParam from "../WeatherParam/WeatherParam";
import Loader from "../Loader";
import "./Weather.css";
import {Button, Col, Container, Row} from "reactstrap";

const API_ICON_URL = "https://openweathermap.org/img/wn/";

export function getIconURL(iconCode) {
    return `${API_ICON_URL}${iconCode}.png`;
}

export default class MainWeather extends React.Component {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        if (!this.props.weather) {
            return <Loader/>

        }

        return this.renderWeather();
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
            },
        } = this.props;
        let  body;
        if (this.props.weather) {
            body = <Container className={"main-weather"}>
                <Row>
                    <Col>
                        <Row className={"cityName"}>{cityName}</Row>
                        <Row><Col>
                            <img className={"image"} src={getIconURL(icon)} alt="Weather icon" />
                        </Col>
                            <Col className="temp">
                                {(temperature - 273.15).toFixed(1).toString()}℃
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <WeatherParam name="Wind" value={`${windSpeed} m/s`} />
                        <WeatherParam name="Cloudness" value={description} />
                        <WeatherParam name="Pressure" value={`${pressure} hPa`} />
                        <WeatherParam name="Humidity" value={`${humidity}%`} />
                        <WeatherParam name="Coords" value={`${latitude}, ${longitude}`} />
                    </Col>

                </Row>
            </Container>;}
        return (
            <Container className="weather">
                {body}
            </Container>

        );
    }

}

