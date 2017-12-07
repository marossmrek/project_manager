import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger}  from "redux-logger";

import filter from './reducers/filterReducer';
import list from './reducers/listReducer';

export default createStore(
    combineReducers({filter, list}),{},applyMiddleware(createLogger())
);