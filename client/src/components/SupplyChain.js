import React from 'react'
import {render} from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {groupBy, sortBy, reverse} from 'lodash';
import {PageHeader, defaultMapConfig} from '../utils/Common';
const HC_map = require('highcharts/modules/map')(Highcharts);

var maps = require('../utils/us.all');
class SupplyChain extends React.Component {
    state = {
        stateData: [],
        usStates: [],
        usState: "all",
        activity: "0",
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
    handleSort = (e) => {
        this.setState({
            activity: e.target.value
        }, () => {
            this.drawMap()
        })
    }
    drawMap = () => {
        let mapData = [];
        let {stateData, dataOption} = this.state;
        for (let i in stateData) {
            mapData.push({state: stateData[i].States, code: stateData[i].POSTALCODE, value: stateData[i][dataOption]
            })
        }
        if (this.state.usState != "all") {
            mapData = mapData.filter(item => item.state === this.state.usState)
        }
        if (this.state.activity === "1") {
            mapData = sortBy(mapData, ['value']).splice(1, 10);
        }
        if (this.state.activity === "2") {
            mapData = reverse(sortBy(mapData, ['value'])).splice(1, 10);
        }
        const config = {
            chart: {
                map: maps,
                borderWidth: 0
            },
            title: {
                text: 'Vaccination Rates'
            },
            exporting: {
                sourceWidth: 600,
                sourceHeight: 600
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
                minColor: '#DDDDDD',
                maxColor: '#BAF480',
                stops: [
                    [
                        0, '#492C3C'
                    ],
                    [
                        0.2, '#55455E'
                    ],
                    [
                        0.5, '#63637F'
                    ],
                    [
                        0.7, '#448298'
                    ],
                    [1, '#BAF480']
                ]
            },
            series: [
                {
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
                            <div className="col col-md-5">
                                <div className="row">
                                    <div className="col col-md-3 pr-0 pt-2">Age Group</div>
                                    <div className="col col-md-6 pl-0">
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
                            </div>
                            <div className="col col-md-4">
                                <div className="row">
                                    <div className="col col-md-2 pr-0 pt-2">Sort</div>
                                    <div className="col col-md-10 pl-0">
                                        <select
                                            className="form-control"
                                            value={this.state.activity}
                                            onChange={this.handleSort}>
                                            <option value="0">All</option>
                                            <option value="1">States with Low Vaccination Rates</option>
                                            <option value="2">States with risk of High Activity</option>
                                        </select>
                                    </div>
                                </div>
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