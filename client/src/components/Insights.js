import React from 'react';
import {PageHeader} from '../utils/Common';
import {groupBy} from 'lodash';
class Insights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            tabNames: []
        }
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/insights`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: groupBy(res.insights, "tableName"),
                    tabNames: Object.keys(groupBy(res.insights, "tableName"))
                });
            })
            .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <React.Fragment>
                <PageHeader header="Insights"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder">
                        {this.state.tabNames.length > 0
                            ? this
                                .state
                                .tabNames
                                .map((item) => {
                                    return (
                                        <div className="insight-tab">
                                            <h5>{item}</h5>
                                            <table className="table table-sm table-striped">
                                                <tbody>
                                                    {this
                                                        .state
                                                        .data[item]
                                                        .map(row => <tr>
                                                            <td>{row.desc}</td>
                                                            <td>
                                                                <strong>{row.value}</strong>
                                                            </td>
                                                        </tr>)}
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                })
                            : ""}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Insights