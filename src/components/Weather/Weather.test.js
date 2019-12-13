import React from 'react';
import renderer from 'react-test-renderer';
import Weather from "./Weather.js";
import {Provider} from "react-redux";
import store from "../../store";
import {loadWeatherWithName, deleteFavorite} from "../../redux/actions";


describe('Weather functional rendered properly', () => {

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


    test('should has city weather and delete button', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Weather onFetch={() => loadWeatherWithName(weatherData.cityName)}
                         onDelete={() => deleteFavorite(weatherData.cityName)}
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