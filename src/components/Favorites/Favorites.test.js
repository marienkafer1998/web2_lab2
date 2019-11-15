import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from "./Favorites.js";
import {Provider} from "react-redux";
import store from "../../store";

it('Favorites functional rendered properly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Favorites/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

