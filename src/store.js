import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger}  from "redux-logger";

import filter from './reducers/filterReducer';
import list from './reducers/listReducer';
import formModal from './reducers/formModalReducer';

export default createStore(
    combineReducers({filter, list, formModal}),{},applyMiddleware(createLogger())
);