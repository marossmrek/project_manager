import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from "./store";

ReactDOM.render(<MuiThemeProvider><Provider
    store={store}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
