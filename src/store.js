import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { LOCAL_STORAGE_KEY } from "./LocalStorage";

import geoReducer from "./redux/reducers/geoReducer";
import favReducer from "./redux/reducers/favReducer";

const store = createStore(
    combineReducers({geo: geoReducer, fav: favReducer}),
    applyMiddleware(logger, thunk)
);

localStorage.clear()

store.subscribe(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...store.getState().fav.favorites.keys()]));
});

export default store;
