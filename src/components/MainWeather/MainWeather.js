import React from "react";
import WeatherParameter from "../WeatherParameter/WeatherParameter";
import Loader from "../Loader/Loader";
import "../Weather/Weather.css";
import {Col, Container, Row} from "reactstrap";

const API_ICON_URL = "https://openweathermap.org/img/wn/";

export function getIconURL(iconCode) {
    return `${API_ICON_URL}${iconCode}.png`;
}

export default class MainWeather extends React.Component {
    componentDidMount() {
        console.log('parasha', typeof this.props.onFetch);
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
                        <WeatherParameter name="Wind" value={`${windSpeed} m/s`} />
                        <WeatherParameter name="Cloudness" value={description} />
                        <WeatherParameter name="Pressure" value={`${pressure} hPa`} />
                        <WeatherParameter name="Humidity" value={`${humidity}%`} />
                        <WeatherParameter name="Coords" value={`${latitude}, ${longitude}`} />
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

