import { Actions } from "../actions/geoAction";


export default function geoReducer(state, action) {
    state = {
        ...state,
        error: false
    };

    switch (action.type) {
        case Actions.SET_GEOLOCATION:
            state.coords = action.payload;
            break;
        case Actions.GET_RESPONSE:
            state.weather =  action.payload;
            break;

        default:
            break;
    }

    return state;
}