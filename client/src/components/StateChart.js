import React, { Component } from "react";
import HeatMapView from "./HeatMapView";
import ModalContent from "./ModalContent";

class StateChart extends Component {
  state = {
    crumbsList: "USA",
    show: false,
    modalContent: ""
  };
  breadCrumbs(crumbs) {
    this.setState({ crumbsList: crumbs });
  }
  handleClose() {
    this.setState({ show: false, modalContent: "" });
  }
  handleShow = (modalContent, properties) => {
    this.setState(
      {
        show: true,
        modalContent: modalContent
      },
      () => {
        //
      }
    );
  };
  render() {
    return (
      <React.Fragment>
        <div class="row placeholders">
          <div className="col-xs-12 col-sm-12 placeholder insight-tab">
            <div className="leaflet-container">
              <HeatMapView
                handleShow={modalContent => this.handleShow(modalContent)}
                breadCrumbs={crumbs => this.breadCrumbs(crumbs)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StateChart;
