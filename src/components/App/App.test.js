import React from 'react';
import renderer from 'react-test-renderer';
import App from "./App.js";
import {Provider} from "react-redux";
import store from "../../store";

describe ('App functional rendered properly', () => {
    test('should render Geolocation and Favourite', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <App/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});


