import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {
    render() {
        return (
            <div className="main-header">
                <AppBar
                    title={<NavLink to="/" className="title">Daily howl</NavLink>}
                    iconStyleLeft={{display: "none"}}
                    iconElementRight={
                        <div className="nav-links">
                            <NavLink to="/project"><FlatButton>Project</FlatButton></NavLink>
                            <NavLink to="/howl"><FlatButton>Howl</FlatButton></NavLink>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Header;


