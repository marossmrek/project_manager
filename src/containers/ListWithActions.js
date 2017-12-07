import React from 'react';
import {connect} from 'react-redux';

import {loadListData} from '../actions/listActions';

export default function (ListWithOutActions, listData) {
    class ListWithActions extends React.Component {

        componentWillMount() {
            this.props.loadListData(listData);
        }

        render() {
            return <ListWithOutActions {...this.props.list} />
        }
    }

    const mapStateToProps = (state) => ({
        list: state.list
    });

    const mapDispatchToProps = (dispatch) => {
        return {
            loadListData: (listData) => {
                dispatch(loadListData(listData));
            }
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(ListWithActions);
}





