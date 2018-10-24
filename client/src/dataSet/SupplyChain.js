import React, {Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

class SupplyChain extends Component {
    state = {
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July'
            ],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40
                    ]
                }
            ]
        },
        pie: {
            labels: [
                'Red', 'Green', 'Yellow'
            ],
            datasets: [
                {
                    data: [
                        300, 50, 100
                    ],
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56'
                    ],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }
            ]
        },
        line: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July'
            ],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="page-header">
                    Supply Chain {" "}<i className="fa fa-angle-right"></i>{" "}
                    Dashboard
                </h1>
                <div class="row placeholders">
                    <div class="col-xs-6 col-sm-6 placeholder">
                        <div className="card">
                            <Line data={this.state.line}/>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 placeholder">
                        <div className="card">
                            <Pie data={this.state.pie} width={100} height={140}/>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 placeholder">
                        <div className="card">
                            <Bar
                                data={this.state.data}
                                width={100}
                                height={140}
                                options={{
                                maintainAspectRatio: true
                            }}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SupplyChain;