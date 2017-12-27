import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui/svg-icons/action/done-all';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import {loadListData} from '../actions/listActions';
import {setUpEditMode, setUpDeleteMode} from '../actions/projectFormModalActions';
import {Project} from '../service/Project';

class ListProject extends React.Component {

    componentWillMount() {
        this.loadAllPorojects();
    }

    async loadAllPorojects() {
        let allProjects = await Project.getAllProjects();
        allProjects && this.props.loadListData(allProjects.data);
    }

    render() {
        const {
            list,
            setUpEditMode,
            setUpDeleteMode
        } = this.props;

        return (
            <div>
                {list.allListItem.map((listItem, index) => {
                    return (
                        <div key={listItem.id} className="list-item-container">
                            <div className="row">
                                <div className="col-xs-2 col-sm-1 col-md-1 avatar">
                                    <IconButton tooltip={listItem.type}>
                                        <Avatar
                                            size={45}
                                            icon={<DoneIcon />}
                                            backgroundColor="#48BEFF"
                                        />

                                    </IconButton>
                                </div>
                                <div className="col-xs-10 col-sm-11 col-md-11">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="list-item-date">
                                                {moment(listItem.date).format('DD.MM.YYYY')}
                                            </div>
                                            <div className="list-item-code">
                                                {listItem.code}
                                            </div>
                                            <div className="list-item-state">
                                                {listItem.state}
                                            </div>
                                        </div>
                                        <div className="col-md-8 list-item-content">
                                            <div className="list-item-name">
                                                {listItem.name}
                                            </div>
                                            <p>
                                                {listItem.description}
                                            </p>
                                        </div>
                                        <div className="col-md-2 action-icons">
                                            <IconButton
                                                onClick={() => setUpEditMode(list.allListItem[index])}
                                                tooltip="Edit">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => setUpDeleteMode(list.allListItem[index])}
                                                tooltip="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadListData: (listData) => {
            dispatch(loadListData(listData));
        },
        setUpEditMode: (editForm) => {
            dispatch(setUpEditMode(editForm))
        },
        setUpDeleteMode: (deleteItem) => {
            dispatch(setUpDeleteMode(deleteItem))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProject);

