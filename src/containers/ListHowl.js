import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import {Tabs, Tab} from 'material-ui/Tabs';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import PointIcon from 'material-ui/svg-icons/image/brightness-1';

import {loadListData} from '../actions/listActions';
import {switchCurrentTab} from '../actions/tabActions';
import{switchModal} from '../actions/howlFormModalActions';
import dummyHowl from '../data/dummy-howl.json'

class ListProject extends React.Component {

    componentWillMount() {
        //TODO: API call for load all howl, now just for testing load local json file
        this.props.loadListData(dummyHowl);
    }

    getListItem(listItem) {
        return (
            <div key={listItem.id} className="list-item-container">
                <div className="row">
                    <div className="col-xs-2 col-sm-1 col-md-1 avatar">
                        <Avatar
                            size={45}
                            src="https://cdn1.iconfinder.com/data/icons/supericon-animals-1/512/Dog_SC.png"
                        />
                    </div>
                    <div className="col-xs-10 col-sm-11 col-md-11">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="list-item-user">
                                    {listItem.user}
                                </div>
                                <div className="list-item-date">
                                    {moment(new Date()).format('DD.MM.YYYY')}
                                </div>
                            </div>
                            <div className="col-xs-8">
                                {listItem.projects.map((project, index) => {
                                    return (
                                        <div className="row">
                                            <Chip
                                                className="col-xs-12"
                                                key={index}
                                                style={{margin: "4px"}}
                                            >
                                                <Avatar
                                                    backgroundColor={project.status === "Good" ? "#00C853" : "#e53935"}
                                                    icon={<PointIcon />}/>

                                                <b>{project.name}</b>
                                                {project.description}
                                                <b>{project.percentage}%</b>
                                            </Chip>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-md-2 action-icons">
                                <IconButton
                                    onClick={() => this.props.switchModal(true)}
                                    tooltip="Edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => this.props.switchModal(true)}
                                    tooltip="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {
            list,
            tab,
            switchCurrentTab
        } = this.props;

        return (
            <Tabs
                value={tab.currentTab}
                onChange={(value) => switchCurrentTab(value)}
            >
                <Tab label="Active" value="active">
                    <div>
                        {list.allListItem.map((listItem) => {
                            return listItem.type === "Active" &&
                                this.getListItem(listItem, list)
                        })}
                    </div>
                </Tab>
                <Tab label="Draft" value="draft">
                    <div>
                        {list.allListItem.map((listItem) => {
                            return listItem.type === "Draft" &&
                                this.getListItem(listItem)
                        })}
                    </div>
                </Tab>
            </Tabs>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        tab: state.tab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadListData: (listData) => {
            dispatch(loadListData(listData));
        },
        switchCurrentTab: (currentTab) => {
            dispatch(switchCurrentTab(currentTab));
        },
        switchModal: (isShowed) => {
            dispatch(switchModal(isShowed));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProject);
