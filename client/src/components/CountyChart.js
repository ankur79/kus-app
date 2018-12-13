import React, { Component } from "react";
import MapView from "./MapView";
import ModalContent from "./ModalContent";

class CountyChart extends Component {
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
          <div class="col-xs-12 col-sm-12 placeholder">
            <div className="leaflet-container">
              <MapView
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

export default CountyChart;
