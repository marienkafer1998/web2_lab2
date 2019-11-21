import React from 'react';
import thunk from "redux-thunk";
import renderer from 'react-test-renderer';
import Favorites from "./Favorites.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";


describe('Favorites functional rendered properly', () => {

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

    const storeCreator = configureStore([thunk]);

    test("should has no city in favorites", () => {
        const store = storeCreator({
            fav: {
                favorites: new Map()
            }
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Favorites />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test("should has 1 city in favorites", () => {
        const store = storeCreator({
            fav: {
                favorites: new Map([["Moscow", weatherData]])
            }
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Favorites />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });


    test("should has 2 cities in favorites", () => {
        const store = storeCreator({
            fav: {
                favorites: new Map([
                    ["Moscow", weatherData],
                    ["Saint Petersburg", weatherData]])
            }
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Favorites />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

});

