import React, {Component} from "react";
import TrendMapView from "./TrendMapView";
import ModalContent from "./ModalContent";

class FluTrendChart extends Component {
    state = {
        crumbsList: "USA",
        show: false,
        modalContent: ""
    };
    breadCrumbs(crumbs) {
        this.setState({crumbsList: crumbs});
    }
    handleClose() {
        this.setState({show: false, modalContent: ""});
    }
    handleShow = (modalContent, properties) => {
        this.setState({
            show: true,
            modalContent: modalContent
        }, () => {
            //
        });
    };
    render() {
        return (
            <React.Fragment>
                <div class="row placeholders">
                    <div class="col-xs-12 col-sm-12 placeholder insight-tab">
                        <div className="leaflet-container">
                            <TrendMapView/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FluTrendChart;