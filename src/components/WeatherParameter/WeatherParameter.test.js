import React from 'react';
import renderer from 'react-test-renderer';
import WeatherParameter from "./WeatherParameter.js";

describe('WeatherParameter functional rendered properly', () => {

    const paramExample = {
        name: "Temperature",
        value: "1.5",
    };

    test("should has name and value", () => {
        const {name, value} = paramExample;

        const tree = renderer
            .create(
                <WeatherParameter
                    name={name}
                    value={value}
                />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


    test("should has only name", () => {
        const {name} = paramExample;

        const tree = renderer
            .create(
                <WeatherParameter
                    name={name}
                />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test("should has only value", () => {
        const {value} = paramExample;

        const tree = renderer
            .create(
                <WeatherParameter
                    value={value}
                />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test("should has nothing", () => {
        const tree = renderer
            .create(
                <WeatherParameter/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});