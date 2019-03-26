import React, {Component} from "react";
import {orderBy} from 'lodash';
import {PageHeader} from '../utils/Common';

class KobaiTable extends Component {
    state = {
        loader: true,
        tabEl: null
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/ko-tab/ep/${this.refs.inputEndPoint.value}/akey/${this.refs.inputApiKey.value}`)
            .then(res => res.json())
            .then(res => {
                this.buildSeries(res.koData);
            })
            .catch(error => console.error('Error:', error))
    }
    buildSeries = (data) => {
        this.setState({tabEl: null});
        const rows = data.map(row => <tr>
            <td>{row.plant.description}</td>
            <td>{row.plant.id}</td>
            <td>{row.type}</td>
            <td>{row.sku.description}</td>
            <td>{row.sku.id}</td>
            <td>{row.quantity}</td>
        </tr>)
        const header = <tr>
            <th>Plant description</th>
            <th>Plant ID</th>
            <th>Inventory Type</th>
            <th>SKU description</th>
            <th>SKU ID</th>
            <th>Quantity</th>
        </tr>;
        const content = <table className="table">{header}{rows}</table>
        this.setState({tabEl: content});
    }
    render() {
        return (
            <React.Fragment>
                <PageHeader header="Current Inventory"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder insight-tab">
                        <div className="row">
                            <div className="col">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label for="inputEndPoint">End Point</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEndPoint"
                                            ref="inputEndPoint"
                                            placeholder="Enter endpoint"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputApiKey">API Key</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputApiKey"
                                            ref="inputApiKey"
                                            placeholder="Enter API Key"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">{this.state.tabEl}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default KobaiTable;