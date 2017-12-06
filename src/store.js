import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger}  from "redux-logger";

import filter from './reducers/filterReducer';

export default createStore(
    combineReducers({filter}),{},applyMiddleware(createLogger())
);