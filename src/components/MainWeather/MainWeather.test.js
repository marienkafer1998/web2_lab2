import React from 'react';
import renderer from 'react-test-renderer';
import MainWeather from "./MainWeather.js";
import {Provider} from "react-redux";
import store from "../../store";
import {loadWeatherWithCoords} from "../../redux/actions";
import Weather from "../Weather/Weather";

describe('MainWeather functional rendered properly', () => {

    const weatherData = {
        cityName: 'Moscow',
        temperature: "275.24",
        pressure: "1003",
        humidity: "69",
        windSpeed: "2",
        icon: "04n",
        description: "overcast clouds",
        coords: {lon: "55.75", lat: "37.62"}
    };


    test('should has city weather', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MainWeather onFetch={() => loadWeatherWithCoords(weatherData.coords)}
                             weather={weatherData}/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should has loader', () => {
        const tree = renderer
            .create(
                <Weather
                    onFetch={() => {
                    }}
                />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});