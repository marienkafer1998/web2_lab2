import React from 'react';
import renderer from 'react-test-renderer';
import AddFavorite from "./AddFavorite.js";
import {Provider} from "react-redux";
import store from "../../store";

it('AddFavorite functional rendered properly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <AddFavorite/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


