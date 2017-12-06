import React from 'react';
import {connect} from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import {changeFilterValue, resetFilterValues} from '../actions/filterActions';

class Filter extends React.Component {

    handleSearchProject(event, index, value) {
        this.props.changeFilterValue({
            filterName: "searchProject",
            filterValue: value
        });
    }

    handleSearchUser(event, index, value) {
        this.props.changeFilterValue({
            filterName: "searchUser",
            filterValue: value
        });
    }

    handleSearchProjectType(event, index, value) {
        this.props.changeFilterValue({
            filterName: "searchProjectType",
            filterValue: value
        });
    }

    handleMinDate(event, date) {
        this.props.changeFilterValue({
            filterName: "searchMinDate",
            filterValue: date
        });
    }

    handleMaxDate(event, date) {
        // set the time to the end of the day
        date.setHours(23, 59, 59, 999);
        this.props.changeFilterValue({
            filterName: "searchMaxDate",
            filterValue: date
        });
    }

    handleSearchButton() {
        console.log(this.props.filter);
    }

    handleCancelButton = () => {
        this.props.resetFilterValues()
    };

    render() {
        return (
            <div className="row filter">
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="Project"
                        value={this.props.filter.searchProject}
                        fullWidth={true}
                        onChange={this.handleSearchProject.bind(this)}
                    >
                        <MenuItem value={1} primaryText="First project"/>
                        <MenuItem value={2} primaryText="Second project"/>
                        <MenuItem value={3} primaryText="Third project"/>
                    </SelectField>
                </div>
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="User"
                        value={this.props.filter.searchUser}
                        fullWidth={true}
                        onChange={this.handleSearchUser.bind(this)}
                    >
                        <MenuItem value={1} primaryText="First user"/>
                        <MenuItem value={2} primaryText="Second user"/>
                        <MenuItem value={3} primaryText="Third user"/>
                    </SelectField>
                </div>
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="Project type"
                        value={this.props.filter.searchProjectType}
                        fullWidth={true}
                        onChange={this.handleSearchProjectType.bind(this)}
                    >
                        <MenuItem value={1} primaryText="First type"/>
                        <MenuItem value={2} primaryText="Second type"/>
                        <MenuItem value={3} primaryText="Third type"/>
                    </SelectField>
                </div>
                <div className="col-md-6 col-lg-2">
                    <DatePicker
                        floatingLabelText="From date"
                        floatingLabelFixed={true}
                        onChange={this.handleMinDate.bind(this)}
                        fullWidth={true}
                        maxDate={new Date()}
                        value={this.props.filter.searchMinDate}
                        autoOk={true}
                        cancelLabel="Cancel"
                        okLabel="OK"
                    />
                </div>
                <div className="col-md-6 col-lg-2">
                    <DatePicker
                        floatingLabelText="To date"
                        floatingLabelFixed={true}
                        onChange={this.handleMaxDate.bind(this)}
                        fullWidth={true}
                        maxDate={new Date()}
                        value={this.props.filter.searchMaxDate}
                        autoOk={true}
                        cancelLabel="Cancel"
                        okLabel="OK"
                    />
                </div>
                <div className="col-xs-2 col-lg-1 button">
                    <RaisedButton onClick={this.handleSearchButton.bind(this)} label="Search" primary={true}/>
                </div>
                <div className="col-xs-2 col-lg-1 button">
                    <RaisedButton onClick={this.handleCancelButton.bind(this)} label="Reset" secondary={true}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterValue: (filterValue) => {
            dispatch(changeFilterValue(filterValue));
        },
        resetFilterValues: () => {
            dispatch(resetFilterValues())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
