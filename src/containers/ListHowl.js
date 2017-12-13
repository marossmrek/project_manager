import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import PointIcon from 'material-ui/svg-icons/image/brightness-1';

import {loadListData} from '../actions/listActions';
import {switchCurrentTab} from '../actions/tabActions';
import {setUpDeleteMode, setUpEditMode} from '../actions/howlFormModalActions';
import dummyHowl from '../data/dummy-howl.json'

class ListProject extends React.Component {

    componentWillMount() {
        //TODO: API call for load all howl, now just for testing load local json file
        this.props.loadListData(dummyHowl);
    }

    getListItem(listItem, index) {
        return (
            <div key={listItem.id} className="list-item-container">
                <div className="row">
                    <div className="col-xs-1 avatar">
                        <IconButton tooltip="future profile foto">
                            <Avatar
                                size={45}
                                src="https://cdn1.iconfinder.com/data/icons/supericon-animals-1/512/Dog_SC.png"
                            />
                        </IconButton>
                    </div>
                    <div className="col-xs-12 col-sm-11">
                        <div className="row">
                            <div className="col-xs-2 item-info">
                                <div className="list-item-user">
                                    {listItem.user}
                                </div>
                                <div className="list-item-date">
                                    {moment(listItem.date).format('DD.MM.YYYY')}
                                </div>
                            </div>
                            <div className="col-xs-8 howl-content">
                                {listItem.projects.map((project, index) => {
                                    return (
                                        <div className="row chip">
                                            <div className="col-xs-1 status">
                                                <Avatar
                                                    size={30}
                                                    backgroundColor={project.status === "Good" ? "#00C853" : "#e53935"}
                                                    icon={<PointIcon />}/>
                                            </div>
                                            <div className="col-xs-11 work-description">
                                                <b>{project.code} </b>
                                                {project.description}
                                                <b> {project.percentage}%</b>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-xs-2 action-icons">
                                <IconButton
                                    onClick={() => this.props.setUpEditMode(this.props.list.allListItem[index])}
                                    tooltip="Edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => this.props.setUpDeleteMode(this.props.list.allListItem[index])}
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
                        {list.allListItem.map((listItem, index) => {
                            return listItem.type === "Active" &&
                                this.getListItem(listItem, index)
                        })}
                    </div>
                </Tab>
                <Tab label="Draft" value="draft">
                    <div>
                        {list.allListItem.map((listItem, index) => {
                            return listItem.type === "Draft" &&
                                this.getListItem(listItem, index)
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
        setUpEditMode: (editForm) => {
            dispatch(setUpEditMode(editForm))
        },
        setUpDeleteMode: (deleteItem) => {
            dispatch(setUpDeleteMode(deleteItem))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProject);

