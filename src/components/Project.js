import React from 'react';

import ListWithActions from '../containers/ListWithActions';
import ListProject from './ListProject';

class Project extends React.Component {
    render() {
        let ExtendedList = ListWithActions(ListProject, [{}, {}]);
        return (
            <div className="container-fluid project">
                <ExtendedList/>
            </div>
        );
    }
}

export default Project;
