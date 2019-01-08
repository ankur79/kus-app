import React, {Component} from 'react';
import {Modal} from 'reactstrap';
import StoreMapView from './StoreMapView';
import ModalContent from './ModalContent';
import stores from "../dataSet/stores.json";
import {PageHeader} from '../utils/Common';
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
        console.log(this.state.show)
        return (
            <React.Fragment>
                <div className="static-modal">
                    <Modal
                        isOpen={this.state.show}
                        className="custom-modal modal-lg"
                        toggle={() => this.handleClose()}>
                        <ModalContent contentType={this.state.modalContent}/>
                    </Modal>
                </div>
                <PageHeader header="Supply Chain Analytics"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder insight-tab">
                        <div className="leaflet-container">
                            <StoreMapView
                                handleShow={(modalContent) => this.handleShow(modalContent)}
                                breadCrumbs={(crumbs) => this.breadCrumbs(crumbs)}
                                stores={stores}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MarketingAnalyst;