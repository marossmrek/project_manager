import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import DoneIcon from 'material-ui/svg-icons/action/done-all';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import moment from 'moment';

const ListProject = (props) => {
    return (
        <div>
            {props.allListItem.map((listItem, index) => {
                return (
                    <div key={index} className="list-item-container">
                        <div className="row">
                            <div className="col-xs-2 col-sm-1 col-md-1 avatar">
                                <IconButton tooltip="Project type">
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
                                            {moment(new Date()).format('DD.MM.YYYY')}
                                        </div>
                                        <div className="list-item-code">
                                            Project code
                                        </div>
                                        <div className="list-item-state">
                                            Project state
                                        </div>
                                    </div>
                                    <div className="col-md-8 list-item-content">
                                        <div className="list-item-name">
                                            Project name
                                        </div>
                                        <p>
                                            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia
                                            in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Nulla
                                            porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
                                            elementum sed sit amet dui.
                                        </p>
                                    </div>
                                    <div className="col-md-2 action-icons">
                                        <IconButton onClick={props.editItem} tooltip="Edit">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={props.deleteItem} tooltip="Delete">
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
};

export default ListProject;

