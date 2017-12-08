import React from 'react';

import FormModal from '../containers/FormModal';
import ListProject from '../containers/ListProject';

class Project extends React.Component {

    render() {
        return (
            <div className="container-fluid project">
                <FormModal/>
                <ListProject/>
            </div>
        );
    }
}

export default Project;



