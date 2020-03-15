import React, { Component } from "react";
import { Modal } from "reactstrap";
import StoreMapView from "./StoreMapView";
import ModalContent from "./ModalContent";
import stores from "../dataSet/stores.json";
import { PageHeader } from "../utils/Common";
class MarketingAnalyst extends Component {
  state = {
    crumbsList: "USA",
    show: false,
    modalContent: "",
    store_id: 0,
    kobai: []
  };
  breadCrumbs(crumbs) {
    this.setState({ crumbsList: crumbs });
  }
  handleClose() {
    this.setState({ show: false, modalContent: "" });
  }
  handleShow = (modalContent, store_id, properties) => {
    this.setState(
      {
        show: true,
        modalContent,
        store_id
      },
      () => {
        if (modalContent === "table") {
          this.loadTableData(store_id);
        }
      }
    );
  };
  loadTableData(store_id) {
    const loc =
      window.location.hostname === "localhost" ? "http://localhost:5000" : "";

    fetch(`${loc}/api/ko-connect/store/${store_id}`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            kobai: res.koData
          },
          () => {
            //
          }
        );
      })
      .catch(error => console.error("Error:", error));
  }
  render() {
    return (
      <React.Fragment>
        <div className="static-modal">
          <Modal
            isOpen={this.state.show}
            className="custom-modal modal-lg"
            toggle={() => this.handleClose()}
          >
            <ModalContent
              contentType={this.state.modalContent}
              store_id={this.state.store_id}
              kobai={this.state.kobai}
            />
          </Modal>
        </div>
        <PageHeader header="Supply Chain Analytics" />
        <div className="row placeholders">
          <div className="col-xs-12 col-sm-12 placeholder insight-tab">
            <div className="leaflet-container">
              <StoreMapView
                handleShow={(modalContent, store_id) =>
                  this.handleShow(modalContent, store_id)
                }
                breadCrumbs={crumbs => this.breadCrumbs(crumbs)}
                stores={stores}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MarketingAnalyst;
