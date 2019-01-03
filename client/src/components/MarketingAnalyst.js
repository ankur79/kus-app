import React, {Component} from 'react';
import {Modal} from 'reactstrap';
import StoreMapView from './StoreMapView';
import ModalContent from './ModalContent';

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
                <PageHeader header="Supply Chain Analytics"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder insight-tab">

                        <div className="leaflet-container">
                            <StoreMapView
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
