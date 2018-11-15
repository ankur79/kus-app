import React, {Component} from 'react';
import {Modal} from 'reactstrap';
import MapView from './MapView';
import ModalContent from './ModalContent';

class MarketingAnalyst extends Component {
    state = {
        crumbsList: "USA",
        show: false,
        modalContent: ""
    }
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
    }
    render() {
        return (
            <React.Fragment>
                <div className="static-modal">
                    <Modal
                        show={this.state.show}
                        dialogClassName="custom-modal"
                        onHide={() => this.handleClose()}>
                        <ModalContent contentType={this.state.modalContent}/>
                    </Modal>
                </div>
                <h1 className="page-header">
                    Marketing Analytics
                </h1>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder">
                        <h4
                            style={{
                            textAlign: "left"
                        }}
                            className="sub-header">{this.state.crumbsList}</h4>

                        <div className="leaflet-container">
                            <MapView
                                handleShow={(modalContent) => this.handleShow(modalContent)}
                                breadCrumbs={(crumbs) => this.breadCrumbs(crumbs)}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MarketingAnalyst;
