import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './containers/Header';
import Home from './components/Home'
import Project from './components/Project';
import Howl from './components/Howl'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/project" component={Project}/>
                    <Route path="/howl" component={Howl}/>
                </div>
            </Router>
        );
    }
}

export default App;
