import React from 'react';
import AppChart from '../components/AppChart';
import {groupBy} from 'lodash';
class HospModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            pedData: [],
            chartData: [],
            seasons: [],
            value: "season",
            lines: [
                {
                    name: "AGE 0-4",
                    dp: "AGE 0-4"
                }, {
                    name: "AGE 5-24",
                    dp: "AGE 5-24"
                }, {
                    name: "AGE 25-49",
                    dp: "AGE 25-49"
                }, {
                    name: "AGE 25-64",
                    dp: "AGE 25-64"
                }, {
                    name: "AGE 50-64",
                    dp: "AGE 50-64"
                }, {
                    name: "AGE 65",
                    dp: "AGE 65"
                }
            ]
        }
    }

    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/hospitalizations`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pedData: res.hospitalizations,
                    chartData: res.hospitalizations
                }, () => {
                    this.buildSeries(res.hospitalizations);
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

        let cats = fd.map(i => {
            return `W ${i.WEEK} - Y ${i.YEAR}`
        })
        this.setState({series: s, categories: cats});
    }
    render() {
        const {model, seasons} = this.state;
        return (
            <div className="row placeholders">
                <div className="col-xs-12 col-sm-12 placeholder">
                    <div className="row">
                        <div className="col">
                            <AppChart
                                chartTitle="Hospitalizations"
                                categories={this.state.categories}
                                series={this.state.series}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HospModel