import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizontalIcon from 'material-ui/svg-icons/navigation/more-horiz';

import {setUser} from '../actions/userActions'

class Header extends React.Component {

    handleSuccesLogin(response) {
        window.localStorage.setItem('user', JSON.stringify(response));
        this.props.setUser();
    };

    handleSuccesLogout() {
        window.localStorage.removeItem('user');
        this.props.setUser();
    };

    getGoogleButton() {
        //TODO: Change client id for google login
        let googleButton = this.props.user.user ?
            <GoogleLogout
                buttonText="Logout"
                style={{background: "none", border: "none"}}
                onLogoutSuccess={this.handleSuccesLogout.bind(this)}
            >
            </GoogleLogout> :
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                style={{background: "none", border: "none"}}
                onSuccess={this.handleSuccesLogin.bind(this)}
                onFailure={(response) => {
                    console.log("Something wrong, please try later")
                }}
            />;
        return googleButton;
    }

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
                            <IconMenu
                                iconStyle={{color: "white", paddingTop: "4px"}}
                                iconButtonElement={
                                    <IconButton ><MoreHorizontalIcon/></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem>{this.getGoogleButton()}</MenuItem>
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: () => {
            dispatch(setUser())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


