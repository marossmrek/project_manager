import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger}  from "redux-logger";

import filter from './reducers/filterReducer';
import list from './reducers/listReducer';
import projectFormModal from './reducers/projectFormModalReducer';
import howlFormModal from './reducers/howlFormModalReducer';
import tab from './reducers/tabReducer';
import user from './reducers/userReducer';
import snack from './reducers/snackReducer';

export default createStore(
    combineReducers({filter, list, projectFormModal, howlFormModal, tab, user, snack}), {}, applyMiddleware(createLogger())
);