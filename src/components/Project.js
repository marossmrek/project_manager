import React from 'react';

import ProjectFormModal from '../containers/ProjectFormModal';
import ListProject from '../containers/ListProject';

class Project extends React.Component {

    render() {
        return (
            <div className="container-fluid project">
                <ProjectFormModal/>
                <ListProject/>
            </div>
        );
    }
}

export default Project;



