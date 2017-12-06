import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: {
                searchProject: 1,
                searchUser: 1,
                searchProjectType: 1,
                searchMinDate: undefined,
                searchMaxDate: undefined
            }
        };
    }

    handleSearchProject(event, index, value) {
        this.handleFilterValues("searchProject", value);
    }

    handleSearchUser(event, index, value) {
        this.handleFilterValues("searchUser", value);
    }

    handleSearchProjectType(event, index, value) {
        this.handleFilterValues("searchProjectType", value);
    }

    handleMinDate(event, date) {
        this.handleFilterValues("searchMinDate", date);
    }

    handleMaxDate(event, date) {
        // set the time to the end of the day
        date.setHours(23, 59, 59, 999);
        this.handleFilterValues("searchMaxDate", date);
    }

    handleSearchButton() {
        console.log(this.state.filterValue);
    }

    handleCancelButton = () => {
        this.handleFilterValues();
    };

    handleFilterValues(filterName = null, newFilterValue = null) {
        let newFilter = !filterName && !newFilterValue ? {
            searchProject: 1,
            searchUser: 1,
            searchProjectType: 1,
            searchMinDate: undefined,
            searchMaxDate: undefined
        } : {...this.state.filterValue, [filterName]: newFilterValue};
        this.setState({filterValue: newFilter});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-lg-2">
                    <SelectField
                        floatingLabelText="Project"
                        value={this.state.filterValue.searchProject}
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
                        value={this.state.filterValue.searchUser}
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
                        value={this.state.filterValue.searchProjectType}
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
                        value={this.state.filterValue.searchMinDate}
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
                        value={this.state.filterValue.searchMaxDate}
                        autoOk={true}
                        cancelLabel="Cancel"
                        okLabel="OK"
                    />
                </div>
                <div className="col-md-12 col-lg-2">
                    <RaisedButton onClick={this.handleSearchButton.bind(this)} label="Search" primary={true}/>
                    <RaisedButton onClick={this.handleCancelButton.bind(this)} label="Reset" secondary={true}/>
                </div>
            </div>
        );
    }
}

export default Filter;
