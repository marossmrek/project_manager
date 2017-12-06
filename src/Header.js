import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title={<NavLink to="/">Daily howl</NavLink>}
                    iconStyleLeft={{display: "none"}}
                    iconElementRight={
                        <div>
                            <FlatButton><NavLink to="/project">Project</NavLink></FlatButton>
                            <FlatButton><NavLink to="/howl">Howl</NavLink></FlatButton>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Header;


