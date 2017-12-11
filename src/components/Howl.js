import React from 'react';

import Filter from '../containers/Filter';
import ListHowl from '../containers/ListHowl';
import HowlFormModal from '../containers/HowlFormModal';

class Howl extends React.Component {

    render() {
        return (
            <div className="container-fluid project">
                <HowlFormModal/>
                <Filter/>
                <ListHowl/>
            </div>
        );
    }
}

export default Howl;
