import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import geoReducer from "./redux/geoReducer";
import favReducer from "./redux/favReducer";

const store = createStore(
    combineReducers({geo: geoReducer, fav: favReducer}),
    applyMiddleware(logger, thunk)
);


export default store;
