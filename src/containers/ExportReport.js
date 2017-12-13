import React from 'react';
import {connect} from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';

class ExportReport extends React.Component {
    render() {
        return (
            <div>
                <ReactHTMLTableToExcel
                    table="table-to-excel"
                    className="export-button"
                    filename="Report"
                    sheet="Report"
                    buttonText="Export report"/>
                <table style={{display: "none"}} id="table-to-excel">
                    {this.props.list.allListItem.map((list, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <th>Date</th>
                                        {list.projects.map((project,index) => {
                                            return (
                                                <span key={index}>
                                                    <th>{`${project.code} ${list.user} Effor`}</th>
                                                    <th>{`${project.code} ${list.user} Note`}</th>
                                                </span>
                                            )
                                        })}
                                    </tr>
                                    <tr>
                                        <td>{moment(list.date).format('DD.MM.YYYY')}</td>
                                        {list.projects.map((project,index) => {
                                            return (
                                                <span key={index}>
                                                    <td>{project.percentage}</td>
                                                    <td>{project.description}</td>
                                                </span>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            )
                    })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

export default connect(mapStateToProps)(ExportReport);