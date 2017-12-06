import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Project from './Project';
import Howl from './Howl'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header}/>
                    <Route path="/project" component={Project}/>
                    <Route path="/howl" component={Howl}/>
                </div>
            </Router>
        );
    }
}

export default App;
