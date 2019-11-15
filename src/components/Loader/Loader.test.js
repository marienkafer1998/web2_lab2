import React from 'react';
import renderer from 'react-test-renderer';
import Loader from "./Loader.js";
import {Provider} from "react-redux";
import store from "../../store";

it('Loader functional rendered properly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Loader/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

