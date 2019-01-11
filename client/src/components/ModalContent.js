import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ModalTable from './ModalTable';
import ModalChart from './ModalChart';
import ModalHighChart from './ModalHighChart';
import csvjson from '../dataSet/csvjson.json';
import metrics from '../dataSet/metrics.json';
class ModalContent extends React.Component {

    render() {
        const {contentType} = this.props;
        return (
            <React.Fragment>
                <ModalHeader >
                    {contentType.toUpperCase()}
                </ModalHeader>
                <ModalBody>
                    {contentType === 'table'
                        ? <div className="modal-table"><ModalTable data={csvjson}/></div>
                        : contentType === 'chart'
                            ? <div><ModalChart/></div>
                            : contentType === 'metrics'
                                ? <div className="modal-table"><ModalTable data={metrics}/></div>
                                : contentType === 'predict line'
                                    ? <div><ModalHighChart/></div>
                                    : ""
}
                </ModalBody>
                <ModalFooter></ModalFooter>
            </React.Fragment>
        )
    }
}

export default ModalContent;