import React from 'react';
import renderer from 'react-test-renderer';
import WeatherParameter from "./WeatherParameter.js";
import {Provider} from "react-redux";
import store from "../../store";

it('WeatherParameter functional rendered properly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <WeatherParameter/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

