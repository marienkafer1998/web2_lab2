import {Actions} from "../actions/geoAction";



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
                response: action.payload

            })
        }
        default:
            return state
    }
}