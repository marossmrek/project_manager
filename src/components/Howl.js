import React from 'react';

import HowlFormModal from '../containers/HowlFormModal';
import ExportReport from '../containers/ExportReport';
import Filter from '../containers/Filter';
import ListHowl from '../containers/ListHowl';

class Howl extends React.Component {

    render() {
        return (
            <div className="container-fluid page-container">
                <div className="row">
                    <HowlFormModal/>
                    <div className="col-xs-6">
                        <ExportReport/>
                    </div>
                </div>
                <Filter/>
                <ListHowl/>
            </div>
        );
    }
}

export default Howl;
