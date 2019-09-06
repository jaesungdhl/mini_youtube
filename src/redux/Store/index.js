// Redux Module
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

// Reducers Module
import combinedReducers from "../Reducers/index.js";

const Store = createStore( combinedReducers, applyMiddleware(Thunk) );

export default Store;