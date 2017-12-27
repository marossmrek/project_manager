import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import Snackbar from 'material-ui/Snackbar';

import {setUser} from '../actions/userActions';
import {hiddenSnackBar, setSnackBarMsg} from '../actions/snackAction';

class Header extends React.Component {

    handleSuccesLogin(response) {
        window.localStorage.setItem('user', JSON.stringify(response));
        this.props.setUser();
        this.props.setSnackBarMsg("Login successfully");
    };

    handleSuccesLogout() {
        window.localStorage.removeItem('user');
        this.props.setUser();
        this.props.setSnackBarMsg("Logout successfully");
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
                    this.props.setSnackBarMsg("Something wrong, please try later");
                }}
            />;
        return googleButton;
    }

    render() {
        const {snack, hiddenSnackBar} = this.props;
        return (
            <div className="main-header">
                <AppBar
                    title={<NavLink to="/" className="title">Project Manager</NavLink>}
                    iconStyleLeft={{display: "none"}}
                    iconElementRight={
                        <div className="nav-links">
                            <NavLink className="link" activeClassName="active-link" to="/project">Project</NavLink>
                            <NavLink className="link" activeClassName="active-link" to="/howl">Howl</NavLink>
                            <IconMenu
                                iconStyle={{color: "white"}}
                                iconButtonElement={
                                    <IconButton ><MoreVerticalIcon/></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem>{this.getGoogleButton()}</MenuItem>
                            </IconMenu>
                        </div>
                    }
                />
                <Snackbar
                    open={snack.isOpen}
                    message={snack.msg}
                    autoHideDuration={5000}
                    onRequestClose={hiddenSnackBar}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        snack: state.snack
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: () => {
            dispatch(setUser())
        },
        hiddenSnackBar: () => {
            dispatch(hiddenSnackBar())
        },
        setSnackBarMsg: (msg) => {
            dispatch(setSnackBarMsg(msg))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


