import React from 'react';
import AppChart from '../components/AppChart';
import {groupBy} from 'lodash';
class AnalyticalModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            fluData: [],
            chartData: [],
            model: [
                {
                    id: 0,
                    name: "LSTM",
                    check: false
                }, {
                    id: 1,
                    name: "SARIMA",
                    check: false
                }
            ],
            seasons: [],
            value: "season"
        }
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/fluModel`)
            .then(res => res.json())
            .then(res => {
                const seasons = Object.keys(groupBy(res.fluData, "SEASON"));
                this.setState({
                    fluData: res.fluData,
                    chartData: res.fluData,
                    seasons
                }, () => {
                    this.buildSeries(res.fluData);
                })

            })
            .catch(error => console.error('Error:', error))
    }
    handleChange = (e) => {
        const d = groupBy(this.state.fluData, "SEASON");
        this.setState({
            chartData: e.target.value === "season"
                ? this.state.fluData
                : d[e.target.value],
            value: e.target.value
        }, () => {
            this.buildSeries(this.state.chartData);
        });
    }
    handleInputChange = (e) => {
        const target = e.target;
        let model = this.state.model;
        let update = model.filter(i => i.name === target.name);
        update[0].check = target.checked;
        model[update.id] = update;
        this.setState({
            model
        }, () => {
            this.buildSeries(this.state.chartData);
        });
    }
    buildSeries = (data) => {
        let modelName = this
            .state
            .model
            .filter(i => i.check)
            .map(i => i.name);
        const x = [
            "Avg Weekly Temp", ...modelName
        ];
        const s = [];
        const fd = this.state.chartData;
        for (var i in x) {
            let data = fd.map(k => {
                return k[x[i]];
            })
            s.push({name: x[i], data: data})
        }
        this.setState({
            series: s,
            categories: Object.keys(groupBy(fd, "Date"))
        });
    }
    render() {
        const {model, seasons} = this.state;
        return (
            <div className="row placeholders">
                <div className="col-xs-12 col-sm-12 placeholder">
                    <div className="row">
                        <div className="col col-md-1">
                            <select className="form-control">
                                <option>USA</option>
                            </select>
                        </div>
                        <div className="col col-md-2">
                            <select className="form-control">
                                <option>Michigan</option>
                            </select>
                        </div>
                        <div className="col col-md-2">
                            <select
                                className="form-control"
                                value={this.state.value}
                                onChange={this.handleChange}>
                                <option value="season">All Seasons</option>
                                {seasons.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div className="col col-md-4 mt-2">
                            <div className="row">
                                Forecasting model:
                                <form className="row">
                                    {model.map(m => {
                                        return (
                                            <div className="form-check ml-4" key={m.name}>
                                                <input
                                                    type="checkbox"
                                                    name={m.name}
                                                    checked={m.check}
                                                    onChange={this.handleInputChange}
                                                    className="form-check-input"
                                                    id="exampleCheck1"/>
                                                <label className="form-check-label" for="exampleCheck1">{m.name}</label>
                                            </div>
                                        )
                                    })}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <AppChart
                                chartTitle="Flu Forecast"
                                categories={this.state.categories}
                                series={this.state.series}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnalyticalModel