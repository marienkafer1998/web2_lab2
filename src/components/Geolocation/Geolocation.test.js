import React from 'react';
import renderer from 'react-test-renderer';
import Geolocation from "./Geolocation.js";
import {Provider} from "react-redux";
import store from "../../store";

it('Geolocation functional rendered properly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Geolocation/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

