import React from 'react';
import AppChart from '../components/AppChart';
import {groupBy} from 'lodash';
class VacCoverageModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            pedData: [],
            chartData: [],
            seasons: [],
            lines: [
                {
                    name: "18-49 yrs",
                    dp: "18-49_yrs"
                }, {
                    name: "18-49 yrs high risk",
                    dp: "18-49_yrs_hi_risk"
                }, {
                    name: "18-49 yrs without high risk",
                    dp: "18-49_yrs_wo_hi_risk"
                }, {
                    name: "50-64 yrs",
                    dp: "50-64_yrs"
                }, {
                    name: "65 yrs",
                    dp: "65_yrs"
                }
            ]
        }
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/vaccoverage`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pedData: res.vacCoverage,
                    chartData: res.vacCoverage
                }, () => {
                    this.buildSeries(res.vacCoverage);
                })

            })
            .catch(error => console.error('Error:', error))
    }
    buildSeries = (data) => {
        let modelName = this
            .state
            .lines
            .filter(i => i.dp)
            .map(i => i.dp);
        const s = [];
        const fd = this.state.chartData;
        for (var i in modelName) {
            let data = fd.map(k => {
                return k[modelName[i]];
            })
            s.push({name: modelName[i], data: data})
        }
        this.setState({
            series: s,
            categories: Object.keys(groupBy(data, "season"))
        });
    }
    render() {
        const {model, seasons} = this.state;
        return (
            <div className="row placeholders">
                <div className="col-xs-12 col-sm-12 placeholder">
                    <div className="row">
                        <div className="col">
                            <AppChart
                                chartTitle="Vaccination Coverage"
                                categories={this.state.categories}
                                series={this.state.series}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VacCoverageModel