import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import LinearProgress from 'material-ui/LinearProgress';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NoteAddIcon from 'material-ui/svg-icons/action/note-add';
import PointIcon from 'material-ui/svg-icons/image/brightness-1';

import{
    switchModal,
    changeFormValue,
    addAnotherDailyWork,
    changeFormProjectValue,
    resetFormValues,
    setUpFormErrors
} from '../actions/howlFormModalActions';
import {loadListData} from '../actions/listActions';
import {setSnackBarMsg} from '../actions/snackAction';

class HowlFormModal extends React.Component {

    handleSubmit() {
        //TODO: API call for add,update or delete howl item, now just for testing
        const {
            list,
            form,
            loadListData,
            resetFormValues,
            setSnackBarMsg
        } = this.props;

        if (!form.editMode && !form.deleteMode) {
            form.formValue.id = list.allListItem.length + 1;
            form.formValue.user = "Dummy user";
            list.allListItem.push(form.formValue);
            loadListData(list.allListItem);
            resetFormValues();
            form.formValue.type === "Active" ?
                setSnackBarMsg("Successfully added to active howl") : setSnackBarMsg("Added to draft")

        } else {
            resetFormValues();
            setSnackBarMsg("Nothing, in future msg about edit or delete")
        }
    }

    simpleHowlValidate() {
        const {
            form,
            setUpFormErrors
        } = this.props;

        form.formValue.projects.map((project, index) => {
            form.formValueError.projects[index].code = project.code === "" && "Code of howl is required";
            form.formValueError.projects[index].description = project.description === "" && "Description of howl is required";
        });

        form.formValueError.typeError = form.formValue.type === "" && "Type of howl is required";
        form.formValueError.dateError = form.formValue.date === undefined && "Date of howl is required";
        form.formValueError.percentageError = this.getWorkingState() !== 100 && "Must be 100%";

        setUpFormErrors(form.formValueError);

        let controlProjectError = true;

        form.formValueError.projects.map((projectError) => {
            controlProjectError = !projectError.code && !projectError.description
        });

        !form.formValueError.typeError &&
        !form.formValueError.dateError &&
        !form.formValueError.percentageError &&
        controlProjectError && this.handleSubmit();
    };

    getWorkingState() {
        let workingState = 0;
        this.props.form.formValue.projects.map((project) => {
            workingState += project.percentage;
        });
        return workingState;
    }

    render() {
        const {
            form,
            switchModal,
            changeFormValue,
            changeFormProjectValue,
            addAnotherDailyWork,
            resetFormValues
        } = this.props;


        return (
            <div>
                <div className="col-xs-6">
                    <RaisedButton onClick={() => switchModal(true)} label="Create new howl"
                                  secondary={true} fullWidth={true}/>
                </div>
                <Dialog
                    title="Howl modal"
                    autoScrollBodyContent={true}
                    actions={ [
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onClick={form.editMode || form.deleteMode ? () => resetFormValues() : () => switchModal(false)}
                        />,
                        <FlatButton
                            label={form.editMode ? "Edit" : form.deleteMode ? "Delete" : "Submit"}
                            primary={true}
                            onClick={form.deleteMode ? this.handleSubmit.bind(this) : this.simpleHowlValidate.bind(this)}
                        />,
                    ]}
                    modal={false}
                    open={form.isShowed}
                >
                    {form.deleteMode ?
                        <p>Sure delete howl from <b>{moment(form.formValue.date).format('DD.MM.YYYY')}</b>?</p> :
                        <div>
                            <div className="row">
                                <div className="col-sm-10 linear-progress">
                                    <LinearProgress color={this.getWorkingState() === 100 ? "#ff4081" : "#00BCD4"}
                                                    mode="determinate"
                                                    value={this.getWorkingState()}/>
                                </div>
                                <div className="col-sm-2 working-state">
                                    <b>{this.getWorkingState()} %</b>
                                    <p className="error">{form.formValueError.percentageError}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <DatePicker
                                        floatingLabelText="Date"
                                        floatingLabelFixed={true}
                                        errorText={form.formValueError.dateError}
                                        onChange={(event, date) => changeFormValue({
                                            formName: "date",
                                            formValue: date
                                        })}
                                        fullWidth={true}
                                        maxDate={new Date()}
                                        value={form.formValue.date}
                                        autoOk={true}
                                        cancelLabel="Cancel"
                                        okLabel="OK"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <SelectField
                                        floatingLabelText="Type"
                                        value={form.formValue.type}
                                        errorText={form.formValueError.typeError}
                                        fullWidth={true}
                                        onChange={(event, index, value) => changeFormValue({
                                            formName: "type",
                                            formValue: value
                                        })}
                                    >
                                        <MenuItem value="Active" primaryText="Active"/>
                                        <MenuItem value="Draft" primaryText="Draft"/>
                                    </SelectField>
                                </div>
                            </div>
                            {form.formValue.projects.map((project, order) => {
                                    return (
                                        <div key={order} className="row">
                                            <div className="col-sm-2">
                                                <SelectField
                                                    floatingLabelText="Code"
                                                    fullWidth={true}
                                                    errorText={form.formValueError.projects[order].code}
                                                    value={project.code}
                                                    onChange={(event, index, value) => changeFormProjectValue({
                                                        index: order,
                                                        formName: "code",
                                                        formValue: value
                                                    })}
                                                >
                                                    <MenuItem value="DH2" primaryText="DH2"/>
                                                    <MenuItem value="DH3" primaryText="DH3"/>
                                                    <MenuItem value="DH4" primaryText="DH4"/>
                                                </SelectField>
                                            </div>
                                            <div className="col-sm-4">
                                                <TextField
                                                    value={project.description}
                                                    fullWidth={true}
                                                    hintText="ABC"
                                                    errorText={form.formValueError.projects[order].description}
                                                    floatingLabelText="Description"
                                                    onChange={(event) => changeFormProjectValue({
                                                        index: order,
                                                        formName: "description",
                                                        formValue: event.target.value
                                                    })}
                                                />
                                            </div>
                                            <div className="col-sm-3 slider">
                                                <IconButton disableTouchRipple={true} touch={true}
                                                            style={{width: "100%", height: "100%"}}
                                                            tooltip={project.percentage}
                                                >
                                                    <Slider
                                                        min={0}
                                                        max={100}
                                                        step={10}
                                                        required={true}
                                                        value={project.percentage}
                                                        onChange={(event, value) => changeFormProjectValue({
                                                            index: order,
                                                            formName: "percentage",
                                                            formValue: value
                                                        })}
                                                    />
                                                </IconButton>
                                            </div>
                                            <div className="col-xs-2 col-sm-1 form-icon">
                                                <IconButton onClick={() => changeFormProjectValue({
                                                    index: order,
                                                    formName: "status",
                                                    formValue: project.status === "Good" ? "Bad" : "Good"
                                                })} tooltip="Change status">
                                                    <Avatar
                                                        size={30}
                                                        icon={<PointIcon />}
                                                        backgroundColor={project.status === "Good" ? "#e53935" : "#00C853"}
                                                    />
                                                </IconButton>
                                            </div>

                                            <div className="col-xs-2 form-icon">
                                                {form.formValue.projects.length === order + 1 &&
                                                <IconButton onClick={() => addAnotherDailyWork()} tooltip="Add">
                                                    <Avatar
                                                        size={30}
                                                        icon={<NoteAddIcon />}
                                                        backgroundColor="#48BEFF"
                                                    />
                                                </IconButton>
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    }
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.howlFormModal,
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
        addAnotherDailyWork: () => {
            dispatch(addAnotherDailyWork())
        },
        changeFormProjectValue: (formProjectValue) => {
            dispatch(changeFormProjectValue(formProjectValue))
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

export default connect(mapStateToProps, mapDispatchToProps)(HowlFormModal);


