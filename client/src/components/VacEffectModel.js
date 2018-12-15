import React from 'react';
import AppChart from '../components/AppChart';
import {groupBy} from 'lodash';
class VacEffectModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            pedData: [],
            chartData: []
        }
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/vaceffect`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pedData: res.vacEffect,
                    chartData: res.vacEffect
                }, () => {
                    this.buildSeries(res.vacEffect);
                })

            })
            .catch(error => console.error('Error:', error))
    }
    buildSeries = (data) => {
        const fd = data
            .filter(item => item.Adj_Overall_VE)
            .map(num => num.Adj_Overall_VE);
        this.setState({
            series: [
                {
                    data: fd
                }
            ],
            categories: Object.keys(groupBy(data, "season"))
        });
    }
    render() {
        const {model, seasons} = this.state;
        return (
            <div className="row placeholders">
                <div className="col-xs-12 col-sm-12 placeholder insight-tab">
                    <div className="row">
                        <div className="col">
                            <AppChart
                                chartTitle="Vaccine Effectiveness Rate"
                                categories={this.state.categories}
                                series={this.state.series}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VacEffectModel