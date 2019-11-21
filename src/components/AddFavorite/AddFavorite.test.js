import React from 'react';
import renderer from 'react-test-renderer';
import AddFavorite from "./AddFavorite.js";
import {Provider} from "react-redux";
import store from "../../store";

describe('AddFavorite functional rendered properly', () => {

    test("should has AddFavourite Form", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <AddFavorite/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    });
});


