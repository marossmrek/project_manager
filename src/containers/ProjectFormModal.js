import React from 'react';
import {connect} from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {switchModal, changeFormValue, resetFormValues, setUpFormErrors} from '../actions/projectFormModalActions';
import {loadListData} from '../actions/listActions';
import {setSnackBarMsg} from '../actions/snackAction';

class ProjectFormModal extends React.Component {

    handleSubmit() {
        //TODO: API call for add,update or delete project item, now just for testing
        const {
            list,
            form,
            loadListData,
            resetFormValues,
            setSnackBarMsg
        } = this.props;

        if (!form.editMode && !form.deleteMode) {
            form.formValue.id = list.allListItem.length + 1;
            form.formValue.date = new Date();
            list.allListItem.push(form.formValue);
            loadListData(list.allListItem);
            resetFormValues();
            setSnackBarMsg("Successfully added to active howl");
        } else {
            resetFormValues();
            setSnackBarMsg("Nothing, in future msg about edit or delete");
        }
    }

    simpleProjectValidate() {
        const {
            form,
            setUpFormErrors
        } = this.props;

        form.formValueError.nameError = form.formValue.name === "" && "Name of project is required";
        form.formValueError.codeError = form.formValue.code === "" && "Code of project is required";
        form.formValueError.stateError = form.formValue.state === null && "State of project is required";
        form.formValueError.typeError = form.formValue.type === null && "Type of project is required";
        form.formValueError.descriptionError = form.formValue.description === "" && "Description of project is required";

        setUpFormErrors(form.formValueError);

        !form.formValueError.nameError &&
        !form.formValueError.codeError &&
        !form.formValueError.stateError &&
        !form.formValueError.typeError &&
        !form.formValueError.descriptionError && this.handleSubmit();
    };

    render() {
        const {
            switchModal,
            form,
            changeFormValue,
            resetFormValues
        } = this.props;

        return (
            <div className="row">
                <div className="col-xs-12">
                    <RaisedButton onClick={() => switchModal(true)} label="Create new project"
                                  secondary={true} fullWidth={true}/>
                </div>
                <Dialog
                    title={form.editMode ? "Edit project" : form.deleteMode ? "Delete project" : "Create project"}
                    actions={ [
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onClick={form.editMode || form.deleteMode ? () => resetFormValues() : () => switchModal(false)}
                        />,
                        <FlatButton
                            label={form.editMode ? "Edit" : form.deleteMode ? "Delete" : "Submit"}
                            primary={true}
                            onClick={form.deleteMode ? this.handleSubmit.bind(this) : this.simpleProjectValidate.bind(this)}
                        />,
                    ]}
                    modal={false}
                    open={form.isShowed}
                >
                    {form.deleteMode ? <p>Sure delete project <b>{form.formValue.name}</b>?</p> :
                        <div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <TextField
                                        autoFocus={true}
                                        value={form.formValue.name}
                                        fullWidth={true}
                                        errorText={form.formValueError.nameError}
                                        hintText="First project"
                                        floatingLabelText="Name"
                                        onChange={(event) => changeFormValue({
                                            formName: "name",
                                            formValue: event.target.value
                                        })}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <TextField
                                        value={form.formValue.code}
                                        fullWidth={true}
                                        errorText={form.formValueError.codeError}
                                        hintText="ABC"
                                        floatingLabelText="Code"
                                        onChange={(event) => changeFormValue({
                                            formName: "code",
                                            formValue: event.target.value
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <SelectField
                                        floatingLabelText="Type"
                                        value={form.formValue.type}
                                        fullWidth={true}
                                        errorText={form.formValueError.typeError}
                                        onChange={(event, index, value) => changeFormValue({
                                            formName: "type",
                                            formValue: value
                                        })}
                                    >
                                        <MenuItem value="Projects" primaryText="Projects"/>
                                        <MenuItem value="Expeditions" primaryText="Expeditions"/>
                                        <MenuItem value="Products" primaryText="Products"/>
                                        <MenuItem value="Functions" primaryText="Functions"/>
                                    </SelectField>
                                </div>
                                <div className="col-sm-6">
                                    <SelectField
                                        floatingLabelText="State"
                                        value={form.formValue.state}
                                        fullWidth={true}
                                        errorText={form.formValueError.stateError}
                                        onChange={(event, index, value) => changeFormValue({
                                            formName: "state",
                                            formValue: value
                                        })}
                                    >
                                        <MenuItem value="In preparation" primaryText="In preparation"/>
                                        <MenuItem value="Active" primaryText="Active"/>
                                        <MenuItem value="Maintenance" primaryText="Maintenance"/>
                                        <MenuItem value="Archived" primaryText="Archived"/>
                                    </SelectField>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <TextField
                                        value={form.formValue.description}
                                        fullWidth={true}
                                        errorText={form.formValueError.descriptionError}
                                        hintText="It's will be the best project"
                                        floatingLabelText="Description"
                                        onChange={(event) => changeFormValue({
                                            formName: "description",
                                            formValue: event.target.value
                                        })}
                                    />
                                </div>
                            </div>
                        </div>}
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.projectFormModal,
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchModal: (isShowed) => {
            dispatch(switchModal(isShowed));
        },
        changeFormValue: (formValue) => {
            dispatch(changeFormValue(formValue))
        },
        resetFormValues: () => {
            dispatch(resetFormValues())
        },
        setUpFormErrors: (errors) => {
            dispatch(setUpFormErrors(errors))
        },
        loadListData: (listData) => {
            dispatch(loadListData(listData));
        },
        setSnackBarMsg: (msg) => {
            dispatch(setSnackBarMsg(msg))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFormModal);


