import React from 'react';
import {connect} from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import{switchModal} from '../actions/howlFormModalActions';

class HowlFormModal extends React.Component {

    render() {
        const {
            switchModal,
            form
        } = this.props;

        return (
            <div className="row">
                <div className="col-xs-12">
                    <RaisedButton onClick={() => switchModal(true)} label="Create new howl"
                                  secondary={true} fullWidth={true}/>
                </div>
                <Dialog
                    title="Howl modal"
                    actions={ [
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onClick={() => switchModal(false)}
                        />,
                        <FlatButton
                            label="Submit"
                            primary={true}
                            onClick={() => switchModal(false)}
                        />,
                    ]}
                    modal={false}
                    open={form.isShowed}
                >
                    <div className="row">
                        <div className="col-xs-12">
                            Daily howl modal
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.howlFormModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchModal: (isShowed) => {
            dispatch(switchModal(isShowed));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HowlFormModal);


