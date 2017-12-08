import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';

class Header extends React.Component {

    render() {
        return (
            <div className="main-header">
                <AppBar
                    title={<NavLink to="/" className="title">Daily howl</NavLink>}
                    iconStyleLeft={{display: "none"}}
                    iconElementRight={
                        <div className="nav-links">
                            <NavLink className="link" activeClassName="active-link" to="/project">Project</NavLink>
                            <NavLink className="link" activeClassName="active-link" to="/howl">Howl</NavLink>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Header;


