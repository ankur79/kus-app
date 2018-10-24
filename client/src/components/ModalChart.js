import React from 'react';
import {Media} from 'reactstrap';
import img from '../images/unnamed.png';
class ModalChart extends React.Component {
    render() {
        return (
            <div>
                <Media object data-src={img} responsive/>;
            </div>
        )
    }
}

export default ModalChart;