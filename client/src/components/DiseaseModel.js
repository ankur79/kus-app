import React from 'react';
import StateMap from '../components/StateMap'
class DiseaseModel extends React.Component {
    render() {
        return (
            <div className="row placeholders">
                <div className="col-xs-12 col-sm-12 placeholder insight-tab">
                    <div className="row">
                        <div className="col col-md-12 ">
                            <div className=" leaflet-container">
                                <StateMap/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiseaseModel