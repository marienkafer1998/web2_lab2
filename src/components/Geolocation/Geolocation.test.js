import React from "react";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Geolocation from "./Geolocation";


describe('Geolocation functional rendered properly', () => {

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

    const cityCoords = {
        lon: "55.75" , lat: "37.62"
    }


    const storeCreator = configureStore([thunk]);

    test("should has city forecast", () => {
        const store = storeCreator({
            geo: {
                coords: cityCoords,
                forecast: weatherData
            }
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Geolocation />
                </Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });


});


