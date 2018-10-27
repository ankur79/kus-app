import React from 'react'
import {render} from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {groupBy} from 'lodash';
import {PageHeader, defaultMapConfig} from '../utils/Common';
const HC_map = require('highcharts/modules/map')(Highcharts);

var maps = require('../utils/us.all');
class SupplyChain extends React.Component {
    state = {
        stateData: [],
        usStates: [],
        usState: "all",
        dataOptions: [
            "6_months_17_years", "6_months_4_years", "5-12_years", "13-17_years"
        ],
        dataOption: "6_months_17_years",
        config: defaultMapConfig
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/statesupply`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    stateData: res.StateSupply,
                    usStates: Object.keys(groupBy(res.StateSupply, "States"))
                }, () => {
                    this.drawMap()
                });
            })
            .catch(error => console.error('Error:', error))
    }
    handleChange = (e) => {
        this.setState({
            usState: e.target.value
        }, () => {
            this.drawMap()
        });
    }
    handleDataOption = (e) => {
        this.setState({
            dataOption: e.target.value
        }, () => {
            this.drawMap()
        });

    }
    drawMap = () => {
        let mapData = [];
        const {stateData, dataOption} = this.state;
        for (let i in stateData) {
            mapData.push({code: stateData[i].POSTALCODE, value: stateData[i][dataOption]
            })
        }
        const config = {
            chart: {
                map: maps,
                borderWidth: 1
            },
            title: {
                text: 'State Supply'
            },
            exporting: {
                sourceWidth: 600,
                sourceHeight: 500
            },
            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'bottom',
                y: 25
            },
            mapNavigation: {
                enabled: true
            },
            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [
                        0, '#003f5c'
                    ],
                    [
                        0.25, '#58508d'
                    ],
                    [
                        0.50, '#bc5090'
                    ],
                    [
                        0.75, '#ff6361'
                    ],
                    [1, '#ffa600']
                ]
            },
            series: [
                {
                    animation: {
                        duration: 1000
                    },
                    data: mapData,
                    joinBy: [
                        'postal-code', 'code'
                    ],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.code}'
                    },
                    name: dataOption,
                    tooltip: {
                        pointFormat: '{point.code}: {point.value}'
                    }
                }
            ]
        }
        this.setState({config});
    }
    render() {
        return (
            <React.Fragment>
                <PageHeader header="Supply Chain Analytics"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder">
                        <div className="row">
                            <div className="col col-md-2">
                                <select
                                    className="form-control"
                                    value={this.state.usState}
                                    onChange={this.handleChange}>
                                    <option value="all">All States</option>
                                    {this
                                        .state
                                        .usStates
                                        .map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="col col-md-4">
                                <select
                                    className="form-control"
                                    value={this.state.dataOption}
                                    onChange={this.handleDataOption}>
                                    {this
                                        .state
                                        .dataOptions
                                        .map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                        </div>
                        <div
                            className="row"
                            style={{
                            marginTop: 20
                        }}>
                            <div className="col col-md-12">
                                <MapChart config={this.state.config}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const MapChart = (props) => {
    return (<HighchartsReact
        highcharts={Highcharts}
        constructorType={'mapChart'}
        options={props.config}/>)
}

export default SupplyChain;