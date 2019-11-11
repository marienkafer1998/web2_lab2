import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import geoReducer from "./redux/reducers/geoReducer";

const store = createStore(
    combineReducers({geo: geoReducer}),
    applyMiddleware(logger, thunk)
);


export default store;
