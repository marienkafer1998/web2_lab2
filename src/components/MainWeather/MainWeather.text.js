import React from 'react';
import renderer from 'react-test-renderer';
import MainWeather from "./MainWeather.js";
import {Provider} from "react-redux";
import store from "../../store";
import {loadWeatherWithCoords} from "../../redux/actions";

const weatherData = {
    cityName: 'Moscow',
    temperature: "275.24",
    pressure: "1003",
    humidity: "69",
    windSpeed: "2",
    icon: "04n",
    description: "overcast clouds",
    coords: {lon: "55.75" , lat: "37.62"}
};


it('MainWeather functional rendered properly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <MainWeather onFetch={() => loadWeatherWithCoords(weatherData.coords)}
                         weather={weatherData}/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

