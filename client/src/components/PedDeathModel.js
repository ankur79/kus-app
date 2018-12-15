import React from 'react';
import AppChart from '../components/AppChart';
import {groupBy} from 'lodash';
class PedDeathModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            pedData: [],
            chartData: [],
            seasons: [],
            value: "season"
        }
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/peddeaths`)
            .then(res => res.json())
            .then(res => {
                const seasons = Object.keys(groupBy(res.pedDeaths, "SEASON"));
                this.setState({
                    pedData: res.pedDeaths,
                    chartData: res.pedDeaths,
                    seasons
                }, () => {
                    this.buildSeries(res.pedDeaths);
                })

            })
            .catch(error => console.error('Error:', error))
    }
    handleChange = (e) => {
        const d = groupBy(this.state.pedData, "SEASON");
        this.setState({
            chartData: e.target.value === "season"
                ? this.state.pedData
                : d[e.target.value],
            value: e.target.value
        }, () => {
            this.buildSeries(this.state.chartData);
        });
    }
    buildSeries = (data) => {
        const fd = data
            .filter(item => item.DEATHS)
            .map(num => num.DEATHS);
        this.setState({
            series: [
                {
                    data: fd
                }
            ],
            categories: Object.keys(groupBy(data, "WEEK"))
        });
    }
    render() {
        const {model, seasons} = this.state;
        return (
            <div className="row placeholders">
                <div className="col-xs-12 col-sm-12 placeholder insight-tab">
                    <div className="row">
                        <div className="col col-md-2">
                            <select
                                className="form-control"
                                value={this.state.value}
                                onChange={this.handleChange}>
                                <option value="season">All Seasons</option>
                                {seasons.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <AppChart
                                chartTitle="Pediatric Deaths"
                                categories={this.state.categories}
                                series={this.state.series}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PedDeathModel