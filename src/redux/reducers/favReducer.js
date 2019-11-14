import { Actions } from "../actions/actions";
import getFavoritesFromStorage from "../../LocalStorage";
import {getParams} from "../../extraWeatherFunc";


const initialState = {
    favorites: getFavoritesFromStorage()
};


export default function favReducer(state = initialState, action) {
    state = {
        ...state,
        error: false,
        favorites: new Map(state.favorites)
    };

    switch (action.type) {
        case Actions.ADD_FAVORITE:

            if (!state.favorites.has(action.payload))
                state.favorites.set(action.payload, undefined);
            break;

        case Actions.DELETE_FAVORITE:
            state.favorites.delete(action.payload);
            break;

        case Actions.GET_RESPONSE_NAME:
            const forecast = getParams(action.payload.response);
            state.favorites.set(forecast.cityName, forecast );
            break;

        default:
            break;
    }

    return state;
}