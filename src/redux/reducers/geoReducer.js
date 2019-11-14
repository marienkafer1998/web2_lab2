import {Actions} from "../actions/actions";
import {getParams} from "../../extraWeatherFunc";


export default function geoReducer(state, action) {
    state = {
        ...state,
        error: false
    };

    switch (action.type) {
        case Actions.SET_GEOLOCATION: {
            return Object.assign({}, state, {
                coords: action.payload
            })

        }


        case Actions.GET_RESPONSE: {
            return Object.assign({}, state, {
                response: getParams(action.payload)

            })
        }
        default:
            return state
    }
}