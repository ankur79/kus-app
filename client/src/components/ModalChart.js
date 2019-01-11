import React from 'react';
import {Media} from 'reactstrap';
import img from '../images/unnamed.png';
class ModalChart extends React.Component {
    render() {
        return (
            <div>
                <img
                    object
                    src={img}
                    style={{
                    width: "100%",
                    height: "auto"
                }}/>
            </div>
        )
    }
}

export default ModalChart;