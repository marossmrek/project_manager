import React from 'react';

import Filter from '../containers/Filter';

class Project extends React.Component {
    render() {
        return (
            <div className="container-fluid project">
                <Filter/>
            </div>
        );
    }
}

export default Project;