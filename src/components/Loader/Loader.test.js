import React from 'react';
import renderer from 'react-test-renderer';
import Loader from "./Loader.js";


it('Loader functional rendered properly', () => {
    const tree = renderer.create(
            <Loader/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

