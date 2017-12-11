import React from 'react';
import {connect} from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import {changeFilterValue, resetFilterValues} from '../actions/filterActions';

class Filter extends React.Component {

    handleSearchButton() {
        //TODO: send filter to API and load search result
    }

    render() {
        const {
            filter,
            changeFilterValue,
            resetFilterValues
        } = this.props;

        return (
            <div className="row filter">
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="Project"
                        value={filter.searchProject}
                        fullWidth={true}
                        onChange={(event, index, value) => changeFilterValue({
                            filterName: "searchProject",
                            filterValue: value
                        })}
                    >
                        <MenuItem value="First project" primaryText="First project"/>
                        <MenuItem value="Second project" primaryText="Second project"/>
                        <MenuItem value="Third project" primaryText="Third project"/>
                    </SelectField>
                </div>
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="User"
                        value={filter.searchUser}
                        fullWidth={true}
                        onChange={(event, index, value) => changeFilterValue({
                            filterName: "searchUser",
                            filterValue: value
                        })}
                    >
                        <MenuItem value={1} primaryText="First user"/>
                        <MenuItem value={2} primaryText="Second user"/>
                        <MenuItem value={3} primaryText="Third user"/>
                    </SelectField>
                </div>
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="Project type"
                        value={filter.searchProjectType}
                        fullWidth={true}
                        onChange={(event, index, value) => changeFilterValue({
                            filterName: "searchProjectType",
                            filterValue: value
                        })
                        }
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
                        onChange={(event, date) => changeFilterValue({
                            filterName: "searchMinDate",
                            filterValue: date
                        })}
                        fullWidth={true}
                        maxDate={new Date()}
                        value={filter.searchMinDate}
                        autoOk={true}
                        cancelLabel="Cancel"
                        okLabel="OK"
                    />
                </div>
                <div className="col-md-6 col-lg-2">
                    <DatePicker
                        floatingLabelText="To date"
                        floatingLabelFixed={true}
                        onChange={(event, date) => changeFilterValue({
                            filterName: "searchMaxDate",
                            filterValue: date
                        })}
                        fullWidth={true}
                        maxDate={new Date()}
                        value={filter.searchMaxDate}
                        autoOk={true}
                        cancelLabel="Cancel"
                        okLabel="OK"
                    />
                </div>
                <div className="col-xs-2 col-lg-1 button">
                    <RaisedButton onClick={this.handleSearchButton.bind(this)} label="Search" primary={true}/>
                </div>
                <div className="col-xs-2 col-lg-1 button">
                    <RaisedButton onClick={() => resetFilterValues()} label="Reset" secondary={true}/>
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
