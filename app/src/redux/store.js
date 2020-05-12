import {combineReducers, createStore} from "redux";
import birdReducer from "../reducers/birdReducer";


let reducers = combineReducers({
    birdPage: birdReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;