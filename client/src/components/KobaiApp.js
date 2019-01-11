import React, {Component} from "react";
import {orderBy} from 'lodash';
import {PageHeader} from '../utils/Common';
import ReactHighcharts from "react-highcharts";
require('highcharts-more')(ReactHighcharts.Highcharts);
class KobaiApp extends Component {
    state = {
        koData: [],
        fluRate: [],
        temp: [],
        week: [],
        loader: true
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/ko-drate/count/50`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    kobai: res.koData
                }, () => {
                    this.buildSeries(res.koData);
                })

            })
            .catch(error => console.error('Error:', error))
    }
    buildSeries(data) {
        data = orderBy(data, ['endingDate'], ['asc']);
        let fluRate = []
        let temp = []
        let week = []
        for (let i in data) {
            fluRate.push(Number(data[i].reportedFluRate));
            temp.push(Number(data[i].avgTempInFahrenheit));
            week.push(data[i].endingDate)
        }
        this.setState({fluRate: fluRate, temp: temp, week: week, loader: false})
    }
    render() {
        const config = {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Reported Flu Rate'
            },
            xAxis: [
                {
                    categories: this.state.week,
                    crosshair: true
                }
            ],
            yAxis: [
                { // Primary yAxis
                    labels: {
                        format: '{value}°F'
                    },
                    title: {
                        text: 'Temperature'
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Flu Rate'
                    },
                    labels: {
                        format: '{value} %'
                    },
                    opposite: true
                }
            ],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 10,
                floating: true,
                backgroundColor: 'rgba(255,255,255,0.25)'
            },
            series: [
                {
                    name: 'Flu Rate',
                    type: 'line',
                    yAxis: 1,
                    data: this.state.fluRate,
                    tooltip: {
                        valueSuffix: ' %'
                    }

                }, {
                    name: 'Temperature',
                    type: 'spline',
                    data: this.state.temp,
                    tooltip: {
                        valueSuffix: '°F'
                    }
                }
            ]
        }
        return (
            <React.Fragment>
                {this.state.loader
                    ? <div className="loader"/>
                    : <React.Fragment>
                        <PageHeader header="Kobai"/>
                        <div className="row placeholders">
                            <div className="col-xs-12 col-sm-12 placeholder insight-tab">
                                <div className="row">
                                    <div className="col">
                                        <ReactHighcharts config={config} ref="chart"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>}
            </React.Fragment>
        );
    }
}

export default KobaiApp;
