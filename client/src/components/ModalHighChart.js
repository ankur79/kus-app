import React from 'react';
import ReactHighcharts from 'react-highcharts';
import predict from '../dataSet/predict.json'

class ModalHighChart extends React.Component {
    render() {
        const WEEK_TEMP = predict
            .filter(item => item.WEEK_TEMP)
            .map(item => item.WEEK_TEMP);

        const TEMP_PREDICTION = predict
            .filter(item => item.TEMP_PREDICTION)
            .map(item => item.TEMP_PREDICTION);

        const ACTIVITY_PREDICTION = predict
            .filter(item => item.ACTIVITY_PREDICTION)
            .map(item => item.ACTIVITY_PREDICTION);

        const config = {
            title: {
                text: ''
            },
            yAxis: [
                { // Primary yAxis
                    labels: {
                        format: '{value}°C'
                    },
                    title: {
                        text: 'Temperature'
                    }

                }, {
                    labels: {
                        format: 'Int'
                    },
                    title: {
                        text: 'Activity'
                    },
                    opposite: true

                }
            ],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 35
                }
            },

            series: [
                {
                    name: 'Weekly Temperature',
                    data: WEEK_TEMP
                }, {
                    name: 'Temperature Prediction',
                    data: TEMP_PREDICTION
                }, {
                    name: 'Activity Prediction',
                    data: ACTIVITY_PREDICTION
                }
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }
                ]
            }
        }
        return (
            <div><ReactHighcharts config={config}/></div>
        )
    }
}

export default ModalHighChart;