import React from 'react';
var maps = require('./us.all');
export const PageHeader = (props) => {
    return (
        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h4">{props.header}</h1>
        </div>
    )
}

export const defaultMapConfig = {
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
            data: [
                {
                    "code": "AL",
                    "value": 1
                }, {
                    "code": "AK",
                    "value": 1
                }, {
                    "code": "AZ",
                    "value": 1
                }, {
                    "code": "AR",
                    "value": 1
                }, {
                    "code": "CA",
                    "value": 1
                }, {
                    "code": "CO",
                    "value": 1
                }, {
                    "code": "CT",
                    "value": 1
                }, {
                    "code": "DE",
                    "value": 1
                }, {
                    "code": "DC",
                    "value": 1
                }, {
                    "code": "FL",
                    "value": 1
                }, {
                    "code": "GA",
                    "value": 1
                }, {
                    "code": "HI",
                    "value": 1
                }, {
                    "code": "ID",
                    "value": 1
                }, {
                    "code": "IL",
                    "value": 1
                }, {
                    "code": "IN",
                    "value": 1
                }, {
                    "code": "IA",
                    "value": 1
                }, {
                    "code": "KS",
                    "value": 1
                }, {
                    "code": "KY",
                    "value": 1
                }, {
                    "code": "LA",
                    "value": 1
                }, {
                    "code": "ME",
                    "value": 1
                }, {
                    "code": "MD",
                    "value": 1
                }, {
                    "code": "MA",
                    "value": 1
                }, {
                    "code": "MI",
                    "value": 1
                }, {
                    "code": "MN",
                    "value": 1
                }, {
                    "code": "MS",
                    "value": 1
                }, {
                    "code": "MO",
                    "value": 1
                }, {
                    "code": "MT",
                    "value": 1
                }, {
                    "code": "NE",
                    "value": 1
                }, {
                    "code": "NV",
                    "value": 1
                }, {
                    "code": "NH",
                    "value": 1
                }, {
                    "code": "NJ",
                    "value": 1
                }, {
                    "code": "NM",
                    "value": 1
                }, {
                    "code": "NY",
                    "value": 1
                }, {
                    "code": "NC",
                    "value": 1
                }, {
                    "code": "ND",
                    "value": 1
                }, {
                    "code": "OH",
                    "value": 1
                }, {
                    "code": "OK",
                    "value": 1
                }, {
                    "code": "OR",
                    "value": 1
                }, {
                    "code": "PA",
                    "value": 1
                }, {
                    "code": "RI",
                    "value": 1
                }, {
                    "code": "SC",
                    "value": 1
                }, {
                    "code": "SD",
                    "value": 1
                }, {
                    "code": "TN",
                    "value": 1
                }, {
                    "code": "TX",
                    "value": 1
                }, {
                    "code": "UT",
                    "value": 1
                }, {
                    "code": "VT",
                    "value": 1
                }, {
                    "code": "VA",
                    "value": 1
                }, {
                    "code": "WA",
                    "value": 1
                }, {
                    "code": "WV",
                    "value": 1
                }, {
                    "code": "WI",
                    "value": 1
                }, {
                    "code": "WY",
                    "value": 1
                }, {
                    "code": "",
                    "value": 1
                }
            ],
            joinBy: [
                'postal-code', 'code'
            ],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: "",
            tooltip: {
                pointFormat: '{point.code}: {point.value}'
            }
        }
    ]
}