import React from "react";
import AppChart from "../components/AppChart";
import { groupBy } from "lodash";
class FluActivityModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      fluData: [],
      chartData: [],
      model: [],
      seasons: [],
      value: "season"
    };
  }
  componentDidMount() {
    /*const loc =
      window.location.hostname === "localhost" ? "http://localhost:5000" : "";
    fetch(`${loc}/api/fluActivity`)
      .then(res => res.json())
      .then(res => {*/
    let res = {
      model: [
        { id: "MULTIVARIATE LSTM", name: "MULTIVARIATE LSTM", check: true },
        {
          id: "MULTIVARIATE NEURAL NETWORK",
          name: "MULTIVARIATE NEURAL NETWORK",
          check: true
        },
        { id: "UNIVARIATE SARIMA", name: "UNIVARIATE SARIMA", check: true },
        { id: "UNIVARIATE LSTM", name: "UNIVARIATE LSTM", check: true },
        {
          id: "MULTIVARIATE XGBOOST",
          name: "MULTIVARIATE XGBOOST",
          check: true
        },
        {
          id: "MULTIVARIATE XGBOOST",
          name: "MULTIVARIATE XGBOOST",
          check: true
        },
        {
          id: "MULTIVARIATE RANDOM FOREST",
          name: "MULTIVARIATE RANDOM FOREST",
          check: true
        }
      ],
      fluActivity: [
        {
          SEASON: "2017-18",
          TARGET: "",
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: "",
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: "",
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: "",
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.944332,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 0.944353,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 0.944378,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2017-18",
          TARGET: 3,
          "UNIVARIATE SARIMA": 1.851904,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 1.86572,
          "UNIVARIATE LSTM": 3.000212,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 3,
          "MULTIVARIATE NEURAL NETWORK": 3,
          "MULTIVARIATE LSTM": 3
        },
        {
          SEASON: "2017-18",
          TARGET: 3,
          "UNIVARIATE SARIMA": 2.780195,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2017-18",
          TARGET: 4,
          "UNIVARIATE SARIMA": 2.006469,
          "UNIVARIATE LSTM": 3.000212,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 4,
          "MULTIVARIATE LSTM": 3
        },
        {
          SEASON: "2017-18",
          TARGET: 5,
          "UNIVARIATE SARIMA": 2.659514,
          "UNIVARIATE LSTM": 4.009759,
          "MULTIVARIATE XGBOOST": 9,
          "MULTIVARIATE RANDOM FOREST": 7,
          "MULTIVARIATE NEURAL NETWORK": 4,
          "MULTIVARIATE LSTM": 4
        },
        {
          SEASON: "2017-18",
          TARGET: 7,
          "UNIVARIATE SARIMA": 3.804854,
          "UNIVARIATE LSTM": 4.977506,
          "MULTIVARIATE XGBOOST": 9,
          "MULTIVARIATE RANDOM FOREST": 8,
          "MULTIVARIATE NEURAL NETWORK": 5,
          "MULTIVARIATE LSTM": 5
        },
        {
          SEASON: "2017-18",
          TARGET: 6,
          "UNIVARIATE SARIMA": 4.750025,
          "UNIVARIATE LSTM": 6.740834,
          "MULTIVARIATE XGBOOST": 7,
          "MULTIVARIATE RANDOM FOREST": 8,
          "MULTIVARIATE NEURAL NETWORK": 7,
          "MULTIVARIATE LSTM": 7
        },
        {
          SEASON: "2017-18",
          TARGET: 9,
          "UNIVARIATE SARIMA": 6.583779,
          "UNIVARIATE LSTM": 5.888512,
          "MULTIVARIATE XGBOOST": 6,
          "MULTIVARIATE RANDOM FOREST": 7,
          "MULTIVARIATE NEURAL NETWORK": 6,
          "MULTIVARIATE LSTM": 6
        },
        {
          SEASON: "2017-18",
          TARGET: 10,
          "UNIVARIATE SARIMA": 5.512239,
          "UNIVARIATE LSTM": 8.290432,
          "MULTIVARIATE XGBOOST": 7,
          "MULTIVARIATE RANDOM FOREST": 7,
          "MULTIVARIATE NEURAL NETWORK": 9,
          "MULTIVARIATE LSTM": 8
        },
        {
          SEASON: "2017-18",
          TARGET: 10,
          "UNIVARIATE SARIMA": 8.563374,
          "UNIVARIATE LSTM": 9.001179,
          "MULTIVARIATE XGBOOST": 9,
          "MULTIVARIATE RANDOM FOREST": 8,
          "MULTIVARIATE NEURAL NETWORK": 9,
          "MULTIVARIATE LSTM": 8
        },
        {
          SEASON: "2017-18",
          TARGET: 10,
          "UNIVARIATE SARIMA": 9.64778,
          "UNIVARIATE LSTM": 9.001179,
          "MULTIVARIATE XGBOOST": 9,
          "MULTIVARIATE RANDOM FOREST": 8,
          "MULTIVARIATE NEURAL NETWORK": 9,
          "MULTIVARIATE LSTM": 9
        },
        {
          SEASON: "2017-18",
          TARGET: 10,
          "UNIVARIATE SARIMA": 9.80515,
          "UNIVARIATE LSTM": 9.001179,
          "MULTIVARIATE XGBOOST": 7,
          "MULTIVARIATE RANDOM FOREST": 7,
          "MULTIVARIATE NEURAL NETWORK": 9,
          "MULTIVARIATE LSTM": 9
        },
        {
          SEASON: "2017-18",
          TARGET: 9,
          "UNIVARIATE SARIMA": 9.717999,
          "UNIVARIATE LSTM": 9.001179,
          "MULTIVARIATE XGBOOST": 8,
          "MULTIVARIATE RANDOM FOREST": 8,
          "MULTIVARIATE NEURAL NETWORK": 9,
          "MULTIVARIATE LSTM": 9
        },
        {
          SEASON: "2017-18",
          TARGET: 7,
          "UNIVARIATE SARIMA": 9.967295,
          "UNIVARIATE LSTM": 8.290432,
          "MULTIVARIATE XGBOOST": 7,
          "MULTIVARIATE RANDOM FOREST": 7,
          "MULTIVARIATE NEURAL NETWORK": 8,
          "MULTIVARIATE LSTM": 8
        },
        {
          SEASON: "2017-18",
          TARGET: 6,
          "UNIVARIATE SARIMA": 8.715316,
          "UNIVARIATE LSTM": 6.740834,
          "MULTIVARIATE XGBOOST": 7,
          "MULTIVARIATE RANDOM FOREST": 6,
          "MULTIVARIATE NEURAL NETWORK": 7,
          "MULTIVARIATE LSTM": 6
        },
        {
          SEASON: "2017-18",
          TARGET: 4,
          "UNIVARIATE SARIMA": 6.505476,
          "UNIVARIATE LSTM": 5.888512,
          "MULTIVARIATE XGBOOST": 6,
          "MULTIVARIATE RANDOM FOREST": 6,
          "MULTIVARIATE NEURAL NETWORK": 6,
          "MULTIVARIATE LSTM": 6
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 5.788118,
          "UNIVARIATE LSTM": 4.009759,
          "MULTIVARIATE XGBOOST": 5,
          "MULTIVARIATE RANDOM FOREST": 4,
          "MULTIVARIATE NEURAL NETWORK": 4,
          "MULTIVARIATE LSTM": 4
        },
        {
          SEASON: "2017-18",
          TARGET: 3,
          "UNIVARIATE SARIMA": 3.355334,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2017-18",
          TARGET: 4,
          "UNIVARIATE SARIMA": 1.632115,
          "UNIVARIATE LSTM": 3.000212,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 3,
          "MULTIVARIATE LSTM": 3
        },
        {
          SEASON: "2017-18",
          TARGET: 3,
          "UNIVARIATE SARIMA": 2.500049,
          "UNIVARIATE LSTM": 4.009759,
          "MULTIVARIATE XGBOOST": 4,
          "MULTIVARIATE RANDOM FOREST": 6,
          "MULTIVARIATE NEURAL NETWORK": 4,
          "MULTIVARIATE LSTM": 4
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 3.496268,
          "UNIVARIATE LSTM": 3.000212,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 3,
          "MULTIVARIATE LSTM": 3
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 2.701517,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 1.837036,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.872572,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.904474,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.923222,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.934304,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.940708,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.944501,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.94674,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.948064,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.948855,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.949327,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.949608,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.949784,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.949898,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.949958,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.950004,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.950035,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.950055,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.950078,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.950087,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.950109,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 0.950122,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2017-18",
          TARGET: 2,
          "UNIVARIATE SARIMA": 0.950144,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2018-19",
          TARGET: 1,
          "UNIVARIATE SARIMA": 1.925486,
          "UNIVARIATE LSTM": 1.981509,
          "MULTIVARIATE XGBOOST": 2,
          "MULTIVARIATE RANDOM FOREST": 2,
          "MULTIVARIATE NEURAL NETWORK": 2,
          "MULTIVARIATE LSTM": 2
        },
        {
          SEASON: "2018-19",
          TARGET: 1,
          "UNIVARIATE SARIMA": 1.907718,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2018-19",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.921853,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: "2018-19",
          TARGET: 1,
          "UNIVARIATE SARIMA": 0.933617,
          "UNIVARIATE LSTM": 1.001136,
          "MULTIVARIATE XGBOOST": 1,
          "MULTIVARIATE RANDOM FOREST": 1,
          "MULTIVARIATE NEURAL NETWORK": 1,
          "MULTIVARIATE LSTM": 1
        },
        {
          SEASON: 48035,
          TARGET: 35101,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49426,
          TARGET: 34783,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48186,
          TARGET: 34199,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48234,
          TARGET: 34083,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48073,
          TARGET: 33832,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49506,
          TARGET: 33741,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48313,
          TARGET: 33594,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49855,
          TARGET: 33500,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48312,
          TARGET: 33491,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48640,
          TARGET: 33374,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49546,
          TARGET: 33178,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48209,
          TARGET: 32879,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48322,
          TARGET: 32766,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49686,
          TARGET: 32747,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48021,
          TARGET: 32576,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48507,
          TARGET: 32425,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48178,
          TARGET: 32362,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48917,
          TARGET: 32205,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49548,
          TARGET: 31938,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48423,
          TARGET: 31869,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48642,
          TARGET: 31861,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49505,
          TARGET: 31720,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49022,
          TARGET: 31498,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48174,
          TARGET: 31267,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48152,
          TARGET: 31172,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48091,
          TARGET: 31074,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48210,
          TARGET: 30948,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48089,
          TARGET: 30923,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49417,
          TARGET: 30714,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48602,
          TARGET: 30589,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48446,
          TARGET: 30447,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48071,
          TARGET: 30168,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48236,
          TARGET: 29968,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48237,
          TARGET: 29751,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48124,
          TARGET: 29575,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48042,
          TARGET: 29413,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48195,
          TARGET: 29355,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49525,
          TARGET: 29326,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48238,
          TARGET: 29181,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49444,
          TARGET: 29178,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48506,
          TARGET: 29168,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49519,
          TARGET: 29051,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48309,
          TARGET: 28999,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49464,
          TARGET: 28961,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49024,
          TARGET: 28651,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49006,
          TARGET: 28517,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48504,
          TARGET: 28303,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48162,
          TARGET: 28300,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49418,
          TARGET: 27986,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48306,
          TARGET: 27936,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48101,
          TARGET: 27519,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48317,
          TARGET: 27435,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48867,
          TARGET: 27375,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49428,
          TARGET: 27298,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48315,
          TARGET: 27248,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48116,
          TARGET: 27156,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48316,
          TARGET: 27020,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48135,
          TARGET: 27001,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48708,
          TARGET: 26956,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48092,
          TARGET: 26946,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49015,
          TARGET: 26920,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48336,
          TARGET: 26716,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48603,
          TARGET: 26608,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49509,
          TARGET: 26495,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48161,
          TARGET: 26469,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48108,
          TARGET: 26457,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48433,
          TARGET: 26288,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48906,
          TARGET: 26115,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48328,
          TARGET: 26011,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48150,
          TARGET: 25905,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48503,
          TARGET: 25902,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48340,
          TARGET: 25862,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48076,
          TARGET: 25825,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49048,
          TARGET: 25352,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48329,
          TARGET: 25338,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48192,
          TARGET: 25225,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48204,
          TARGET: 25096,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48067,
          TARGET: 25017,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48085,
          TARGET: 24963,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48045,
          TARGET: 24907,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48141,
          TARGET: 24738,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48223,
          TARGET: 24323,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48213,
          TARGET: 24137,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48371,
          TARGET: 23905,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48093,
          TARGET: 23871,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48203,
          TARGET: 23498,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48390,
          TARGET: 23484,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49036,
          TARGET: 23380,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48375,
          TARGET: 23211,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49085,
          TARGET: 23049,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48348,
          TARGET: 23017,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48346,
          TARGET: 23009,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48083,
          TARGET: 23002,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48220,
          TARGET: 22646,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48382,
          TARGET: 22596,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49001,
          TARGET: 22552,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48335,
          TARGET: 22486,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48176,
          TARGET: 22433,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48080,
          TARGET: 22386,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48088,
          TARGET: 22255,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49401,
          TARGET: 22253,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49707,
          TARGET: 22037,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49315,
          TARGET: 21996,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48167,
          TARGET: 21982,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49017,
          TARGET: 21947,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49316,
          TARGET: 21940,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48864,
          TARGET: 21914,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48207,
          TARGET: 21832,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48036,
          TARGET: 21830,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48327,
          TARGET: 21824,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48214,
          TARGET: 21805,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48168,
          TARGET: 21798,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48075,
          TARGET: 21651,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48473,
          TARGET: 21631,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48420,
          TARGET: 21553,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48813,
          TARGET: 21433,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49014,
          TARGET: 21386,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49534,
          TARGET: 21349,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49037,
          TARGET: 21337,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48505,
          TARGET: 21231,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48134,
          TARGET: 21223,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48331,
          TARGET: 21220,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48182,
          TARGET: 21175,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48326,
          TARGET: 21115,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48842 and 49601",
          TARGET: 21061,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48169,
          TARGET: 21047,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48081,
          TARGET: 20867,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48442,
          TARGET: 20799,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48114,
          TARGET: 20756,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49307,
          TARGET: 20737,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48009,
          TARGET: 20653,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48314,
          TARGET: 20610,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49002,
          TARGET: 20584,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48125,
          TARGET: 20344,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49301,
          TARGET: 20101,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49202,
          TARGET: 20071,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49445,
          TARGET: 20047,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48846,
          TARGET: 19827,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48532,
          TARGET: 19709,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49783,
          TARGET: 19672,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48458,
          TARGET: 19618,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49735,
          TARGET: 19577,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49091,
          TARGET: 19500,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48837,
          TARGET: 19439,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48098,
          TARGET: 19362,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48854,
          TARGET: 19050,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49456,
          TARGET: 19041,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49058,
          TARGET: 19036,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48334,
          TARGET: 18867,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48094,
          TARGET: 18807,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48206,
          TARGET: 18049,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49093,
          TARGET: 18021,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48838,
          TARGET: 18016,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48879,
          TARGET: 17934,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48820,
          TARGET: 17842,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48051,
          TARGET: 17741,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48323,
          TARGET: 17661,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48912,
          TARGET: 17646,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48240,
          TARGET: 17568,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49010,
          TARGET: 17523,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48386,
          TARGET: 17489,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49331,
          TARGET: 17454,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48341,
          TARGET: 17350,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49829,
          TARGET: 17345,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48324,
          TARGET: 17235,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49431,
          TARGET: 17175,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49770,
          TARGET: 17148,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48184,
          TARGET: 17143,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49512,
          TARGET: 17117,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48342,
          TARGET: 17060,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49321,
          TARGET: 16875,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48202,
          TARGET: 16762,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48393,
          TARGET: 16750,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48304,
          TARGET: 16687,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48082,
          TARGET: 16626,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48030,
          TARGET: 16587,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48230,
          TARGET: 16532,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49319,
          TARGET: 16507,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48033,
          TARGET: 16420,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48043,
          TARGET: 16377,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49080,
          TARGET: 16244,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49008,
          TARGET: 16182,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48362,
          TARGET: 16073,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48827,
          TARGET: 15972,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49004,
          TARGET: 15828,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48624,
          TARGET: 15756,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48377,
          TARGET: 15702,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48084,
          TARGET: 15655,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48130,
          TARGET: 15554,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48374,
          TARGET: 15386,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48193,
          TARGET: 15288,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49242,
          TARGET: 15280,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48072,
          TARGET: 15239,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48302,
          TARGET: 15203,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48059,
          TARGET: 15008,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48025,
          TARGET: 14762,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48855,
          TARGET: 14633,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49286,
          TARGET: 14622,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48026,
          TARGET: 14620,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49068,
          TARGET: 14584,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48301,
          TARGET: 14572,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48451,
          TARGET: 14378,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48225,
          TARGET: 14294,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49721,
          TARGET: 14291,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49047,
          TARGET: 14238,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49660,
          TARGET: 14166,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48623,
          TARGET: 14055,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48201,
          TARGET: 14045,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48462,
          TARGET: 13968,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49090,
          TARGET: 13898,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49224,
          TARGET: 13886,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48189,
          TARGET: 13865,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48836,
          TARGET: 13748,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49345,
          TARGET: 13505,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48383,
          TARGET: 13414,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48160,
          TARGET: 13375,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48034 and 48604",
          TARGET: 13348,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48381,
          TARGET: 13315,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48625,
          TARGET: 13163,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48840,
          TARGET: 13150,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49079,
          TARGET: 13127,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48825,
          TARGET: 12928,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48801,
          TARGET: 12836,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48118,
          TARGET: 12755,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49849,
          TARGET: 12734,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48638,
          TARGET: 12492,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48173,
          TARGET: 12481,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48215,
          TARGET: 12180,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48723,
          TARGET: 12155,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49348,
          TARGET: 12130,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48079,
          TARGET: 12122,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48017,
          TARGET: 11982,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48360,
          TARGET: 11847,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48001,
          TARGET: 11840,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48609,
          TARGET: 11821,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49858,
          TARGET: 11808,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49801,
          TARGET: 11583,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48166,
          TARGET: 11480,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49337,
          TARGET: 11442,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48895,
          TARGET: 11194,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49103,
          TARGET: 11189,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48732,
          TARGET: 11116,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49127,
          TARGET: 11092,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49412,
          TARGET: 11074,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48065,
          TARGET: 11041,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49333,
          TARGET: 10917,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48809,
          TARGET: 10861,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49097,
          TARGET: 10760,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48875 and 48128",
          TARGET: 10640,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49457,
          TARGET: 10619,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49230,
          TARGET: 10473,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49007,
          TARGET: 10441,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48122,
          TARGET: 10437,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48661,
          TARGET: 10359,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49112,
          TARGET: 10162,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48138,
          TARGET: 10161,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49107,
          TARGET: 10123,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48529,
          TARGET: 10117,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49306,
          TARGET: 10083,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48880,
          TARGET: 10059,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48653,
          TARGET: 9868,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49323,
          TARGET: 9853,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48117,
          TARGET: 9847,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49931,
          TARGET: 9820,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49240,
          TARGET: 9783,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48040,
          TARGET: 9775,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48144,
          TARGET: 9649,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49071,
          TARGET: 9632,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49738,
          TARGET: 9625,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49837,
          TARGET: 9590,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49544,
          TARGET: 9586,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48915,
          TARGET: 9580,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48062,
          TARGET: 9539,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48768,
          TARGET: 9490,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49461,
          TARGET: 9418,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48229,
          TARGET: 9388,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48444,
          TARGET: 9361,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49408,
          TARGET: 9337,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48415,
          TARGET: 9265,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49038,
          TARGET: 9193,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48208,
          TARGET: 9180,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48074,
          TARGET: 9179,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49078,
          TARGET: 9140,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48359,
          TARGET: 9128,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49404,
          TARGET: 9079,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48612,
          TARGET: 8927,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49720,
          TARGET: 8917,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48509,
          TARGET: 8858,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48164,
          TARGET: 8720,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48746,
          TARGET: 8701,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49329,
          TARGET: 8651,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48356,
          TARGET: 8585,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48750,
          TARGET: 8577,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49327,
          TARGET: 8518,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48461,
          TARGET: 8458,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48455,
          TARGET: 8442,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48617,
          TARGET: 8433,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48357,
          TARGET: 8414,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49302,
          TARGET: 8356,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48429,
          TARGET: 8322,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48015,
          TARGET: 8313,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49646,
          TARGET: 8290,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48457,
          TARGET: 8284,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49460,
          TARGET: 8161,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49419,
          TARGET: 8125,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49349,
          TARGET: 8098,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49649,
          TARGET: 8078,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49712,
          TARGET: 8055,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49866,
          TARGET: 8040,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49651,
          TARGET: 7790,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48734,
          TARGET: 7740,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48657,
          TARGET: 7735,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49083,
          TARGET: 7706,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48039,
          TARGET: 7667,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48629,
          TARGET: 7615,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48218,
          TARGET: 7609,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49046,
          TARGET: 7606,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48158,
          TARGET: 7562,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49938,
          TARGET: 7545,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48120,
          TARGET: 7516,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48519,
          TARGET: 7493,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48848,
          TARGET: 7479,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49031,
          TARGET: 7469,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48350,
          TARGET: 7420,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48650,
          TARGET: 7415,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49727,
          TARGET: 7397,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48616,
          TARGET: 7348,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49841,
          TARGET: 7331,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48413,
          TARGET: 7296,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48872,
          TARGET: 7256,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48217,
          TARGET: 7252,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49913,
          TARGET: 7222,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48438,
          TARGET: 7221,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48883,
          TARGET: 7214,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49677,
          TARGET: 7209,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48054,
          TARGET: 7205,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48048,
          TARGET: 7193,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48380,
          TARGET: 7175,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49740,
          TARGET: 7094,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49053,
          TARGET: 7073,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49930,
          TARGET: 7072,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49057,
          TARGET: 6982,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49437,
          TARGET: 6934,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49690,
          TARGET: 6931,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49415,
          TARGET: 6870,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49659,
          TARGET: 6838,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48165,
          TARGET: 6799,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48131,
          TARGET: 6733,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48611,
          TARGET: 6633,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49420,
          TARGET: 6592,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48211,
          TARGET: 6536,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49021,
          TARGET: 6514,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49251,
          TARGET: 6508,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48622,
          TARGET: 6469,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49065,
          TARGET: 6431,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48422,
          TARGET: 6427,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49028,
          TARGET: 6422,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48226 and 49643",
          TARGET: 6406,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49269,
          TARGET: 6397,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48353,
          TARGET: 6372,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49087,
          TARGET: 6363,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48070,
          TARGET: 6330,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49788,
          TARGET: 6298,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48421,
          TARGET: 6294,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49854,
          TARGET: 6264,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48817,
          TARGET: 6254,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49082,
          TARGET: 6192,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49631,
          TARGET: 6174,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49055,
          TARGET: 6172,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49451,
          TARGET: 6144,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49663,
          TARGET: 6134,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49802,
          TARGET: 6104,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49098,
          TARGET: 6093,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48847,
          TARGET: 6083,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49343,
          TARGET: 6079,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48888 and 48003",
          TARGET: 6035,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48655,
          TARGET: 6017,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49935,
          TARGET: 5979,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48821,
          TARGET: 5969,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48849,
          TARGET: 5952,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48726,
          TARGET: 5951,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49250,
          TARGET: 5946,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49421,
          TARGET: 5933,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48133,
          TARGET: 5860,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48626,
          TARGET: 5852,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49285,
          TARGET: 5797,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48363,
          TARGET: 5772,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48881,
          TARGET: 5733,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49247,
          TARGET: 5694,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48412,
          TARGET: 5637,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49270,
          TARGET: 5615,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49099,
          TARGET: 5606,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48216,
          TARGET: 5600,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49013,
          TARGET: 5560,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48618,
          TARGET: 5492,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48049,
          TARGET: 5480,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48005,
          TARGET: 5471,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48109,
          TARGET: 5435,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49330,
          TARGET: 5384,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48811,
          TARGET: 5376,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49228,
          TARGET: 5328,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48095,
          TARGET: 5327,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48893,
          TARGET: 5290,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49868,
          TARGET: 5279,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48808,
          TARGET: 5272,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49045,
          TARGET: 5253,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48137,
          TARGET: 5249,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49346,
          TARGET: 5228,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49862,
          TARGET: 5224,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48471 and 48097",
          TARGET: 5197,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48763,
          TARGET: 5185,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49265,
          TARGET: 5135,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48023,
          TARGET: 5083,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48632,
          TARGET: 5031,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48428,
          TARGET: 5029,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48453,
          TARGET: 5021,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48658,
          TARGET: 4969,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48866,
          TARGET: 4950,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49245,
          TARGET: 4945,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48416,
          TARGET: 4884,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49454,
          TARGET: 4882,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48450,
          TARGET: 4830,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48892,
          TARGET: 4799,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49073,
          TARGET: 4784,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48651,
          TARGET: 4736,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48756,
          TARGET: 4715,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49042,
          TARGET: 4710,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49455,
          TARGET: 4662,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49236,
          TARGET: 4634,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48320,
          TARGET: 4596,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49779,
          TARGET: 4553,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48041,
          TARGET: 4535,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48463,
          TARGET: 4498,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49706,
          TARGET: 4493,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49106,
          TARGET: 4471,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49336,
          TARGET: 4465,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48631,
          TARGET: 4456,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49283,
          TARGET: 4450,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49076,
          TARGET: 4433,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48730,
          TARGET: 4432,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49067,
          TARGET: 4406,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48367,
          TARGET: 4397,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48850,
          TARGET: 4371,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49682,
          TARGET: 4334,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48647,
          TARGET: 4327,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48744,
          TARGET: 4301,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48884,
          TARGET: 4289,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49094,
          TARGET: 4285,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48634,
          TARGET: 4255,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49665,
          TARGET: 4236,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48014,
          TARGET: 4224,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49435,
          TARGET: 4172,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49920,
          TARGET: 4139,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49615,
          TARGET: 4116,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48191,
          TARGET: 4093,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48064,
          TARGET: 4058,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49256,
          TARGET: 4047,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48418,
          TARGET: 4039,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49326,
          TARGET: 4032,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49781,
          TARGET: 4014,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48063,
          TARGET: 4006,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48006,
          TARGET: 3975,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49328,
          TARGET: 3970,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49304,
          TARGET: 3961,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49267,
          TARGET: 3957,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48096,
          TARGET: 3953,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49749,
          TARGET: 3947,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48656,
          TARGET: 3926,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49249,
          TARGET: 3884,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48441,
          TARGET: 3861,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48739 and 48876",
          TARGET: 3838,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49117 and 49765",
          TARGET: 3837,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49946,
          TARGET: 3822,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49448,
          TARGET: 3795,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48179,
          TARGET: 3763,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49128,
          TARGET: 3749,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49425,
          TARGET: 3737,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49657,
          TARGET: 3731,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49908,
          TARGET: 3725,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49633,
          TARGET: 3717,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48831,
          TARGET: 3686,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48757,
          TARGET: 3664,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49344,
          TARGET: 3662,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49676,
          TARGET: 3659,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49709,
          TARGET: 3649,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49635 and 49064",
          TARGET: 3623,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49450,
          TARGET: 3609,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48436,
          TARGET: 3596,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49878,
          TARGET: 3584,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49668,
          TARGET: 3581,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49274,
          TARGET: 3572,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49310,
          TARGET: 3570,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49746,
          TARGET: 3519,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49111,
          TARGET: 3462,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49056,
          TARGET: 3449,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49756,
          TARGET: 3433,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48140,
          TARGET: 3425,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48145,
          TARGET: 3385,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49229,
          TARGET: 3359,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49096,
          TARGET: 3357,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49072,
          TARGET: 3351,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48637,
          TARGET: 3326,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49088,
          TARGET: 3313,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49870,
          TARGET: 3292,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49246,
          TARGET: 3267,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49032,
          TARGET: 3263,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49637 and 49650",
          TARGET: 3256,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49012,
          TARGET: 3246,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49621,
          TARGET: 3241,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48002,
          TARGET: 3236,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48755,
          TARGET: 3230,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48722,
          TARGET: 3217,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49617,
          TARGET: 3203,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49715,
          TARGET: 3202,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48027,
          TARGET: 3201,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49332,
          TARGET: 3165,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48759,
          TARGET: 3163,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49807,
          TARGET: 3141,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49040,
          TARGET: 3137,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49266,
          TARGET: 3120,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49916,
          TARGET: 3105,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49277,
          TARGET: 3103,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49655,
          TARGET: 3077,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48703,
          TARGET: 3063,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48829,
          TARGET: 3034,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49101,
          TARGET: 3008,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48822,
          TARGET: 2990,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49237,
          TARGET: 2964,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49340,
          TARGET: 2963,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49253,
          TARGET: 2962,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49284,
          TARGET: 2956,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48891,
          TARGET: 2928,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48835,
          TARGET: 2906,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48659,
          TARGET: 2875,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48610,
          TARGET: 2873,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48615,
          TARGET: 2844,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48414,
          TARGET: 2841,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48449,
          TARGET: 2811,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48857,
          TARGET: 2806,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48427,
          TARGET: 2797,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49911,
          TARGET: 2795,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49051 48417 and 49234",
          TARGET: 2755,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49614,
          TARGET: 2753,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48819,
          TARGET: 2718,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49254,
          TARGET: 2698,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49030,
          TARGET: 2693,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49953,
          TARGET: 2692,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49620,
          TARGET: 2684,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49453,
          TARGET: 2651,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49945,
          TARGET: 2639,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49688,
          TARGET: 2609,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48022,
          TARGET: 2605,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49034,
          TARGET: 2596,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49887,
          TARGET: 2594,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48069,
          TARGET: 2562,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49232,
          TARGET: 2553,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48877,
          TARGET: 2508,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49446,
          TARGET: 2507,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48159,
          TARGET: 2505,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48818,
          TARGET: 2503,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49043,
          TARGET: 2501,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49241 and 49252",
          TARGET: 2472,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48475,
          TARGET: 2470,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49622,
          TARGET: 2443,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49403,
          TARGET: 2424,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49070,
          TARGET: 2405,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49449,
          TARGET: 2404,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48933,
          TARGET: 2392,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49026,
          TARGET: 2364,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48419,
          TARGET: 2360,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49733,
          TARGET: 2354,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49799,
          TARGET: 2309,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48467,
          TARGET: 2306,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49885,
          TARGET: 2302,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48460,
          TARGET: 2292,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49255,
          TARGET: 2282,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49264,
          TARGET: 2281,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48740,
          TARGET: 2274,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49616,
          TARGET: 2263,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48654 and 48851",
          TARGET: 2260,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49235,
          TARGET: 2232,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48815,
          TARGET: 2221,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49766,
          TARGET: 2212,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49639 and 48725",
          TARGET: 2203,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48032,
          TARGET: 2196,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49233,
          TARGET: 2189,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48628,
          TARGET: 2177,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49011,
          TARGET: 2172,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49339,
          TARGET: 2159,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49220,
          TARGET: 2154,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49648,
          TARGET: 2153,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49683,
          TARGET: 2144,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49095,
          TARGET: 2136,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48370,
          TARGET: 2130,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48464,
          TARGET: 2128,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49670,
          TARGET: 2127,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49305,
          TARGET: 2125,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49272,
          TARGET: 2124,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49968,
          TARGET: 2120,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49795,
          TARGET: 2119,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49629,
          TARGET: 2104,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48050,
          TARGET: 2068,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49751,
          TARGET: 2066,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48886,
          TARGET: 2061,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48871,
          TARGET: 2054,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48435,
          TARGET: 2051,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49342,
          TARGET: 2043,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49259,
          TARGET: 2037,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49092,
          TARGET: 2033,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48834,
          TARGET: 2032,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49452,
          TARGET: 2026,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49774,
          TARGET: 2012,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49730,
          TARGET: 2010,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49644,
          TARGET: 2008,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48741,
          TARGET: 2005,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48890,
          TARGET: 1999,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49905,
          TARGET: 1987,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49755,
          TARGET: 1978,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48865,
          TARGET: 1961,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48472,
          TARGET: 1960,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49410,
          TARGET: 1954,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49747,
          TARGET: 1946,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49664,
          TARGET: 1937,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48894,
          TARGET: 1932,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49892,
          TARGET: 1930,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49271,
          TARGET: 1928,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48767,
          TARGET: 1925,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49713,
          TARGET: 1923,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48770,
          TARGET: 1893,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49753,
          TARGET: 1890,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49287,
          TARGET: 1879,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49125,
          TARGET: 1877,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49325,
          TARGET: 1810,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49238,
          TARGET: 1805,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49060,
          TARGET: 1800,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49653,
          TARGET: 1797,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49780,
          TARGET: 1781,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49776 and 49113",
          TARGET: 1772,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48748,
          TARGET: 1767,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49130,
          TARGET: 1765,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49777,
          TARGET: 1744,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49680,
          TARGET: 1739,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49893,
          TARGET: 1728,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49947,
          TARGET: 1717,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48742,
          TARGET: 1681,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48652,
          TARGET: 1676,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48731,
          TARGET: 1674,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49061,
          TARGET: 1661,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49769,
          TARGET: 1657,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48733,
          TARGET: 1648,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49322,
          TARGET: 1635,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48466,
          TARGET: 1632,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48662,
          TARGET: 1629,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48401,
          TARGET: 1628,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49656,
          TARGET: 1608,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49896,
          TARGET: 1591,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49309,
          TARGET: 1588,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49338,
          TARGET: 1587,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48729,
          TARGET: 1580,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48878,
          TARGET: 1579,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49089,
          TARGET: 1578,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49436,
          TARGET: 1574,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48635,
          TARGET: 1563,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48861,
          TARGET: 1558,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49102,
          TARGET: 1553,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49759,
          TARGET: 1541,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49411,
          TARGET: 1536,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49029,
          TARGET: 1535,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48873,
          TARGET: 1526,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49288,
          TARGET: 1520,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48614,
          TARGET: 1511,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48860,
          TARGET: 1507,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48806,
          TARGET: 1502,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48897,
          TARGET: 1487,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49318,
          TARGET: 1485,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49689,
          TARGET: 1482,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49729,
          TARGET: 1461,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49645 and 49050",
          TARGET: 1457,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49033,
          TARGET: 1452,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48760,
          TARGET: 1441,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48701,
          TARGET: 1431,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49630,
          TARGET: 1430,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48649,
          TARGET: 1413,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49405,
          TARGET: 1408,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48832,
          TARGET: 1398,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48445,
          TARGET: 1397,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48157,
          TARGET: 1395,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48747,
          TARGET: 1365,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49814,
          TARGET: 1356,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49640,
          TARGET: 1355,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49347,
          TARGET: 1343,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48766,
          TARGET: 1324,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49719,
          TARGET: 1320,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49950,
          TARGET: 1315,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48727,
          TARGET: 1314,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49262,
          TARGET: 1313,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49679,
          TARGET: 1294,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48621,
          TARGET: 1285,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48889,
          TARGET: 1278,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49853,
          TARGET: 1273,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49625,
          TARGET: 1260,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49969,
          TARGET: 1248,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48745 and 49632",
          TARGET: 1246,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48607 and 49402",
          TARGET: 1236,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49227,
          TARGET: 1235,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49459,
          TARGET: 1226,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48737,
          TARGET: 1224,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48454,
          TARGET: 1216,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49821,
          TARGET: 1207,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48738,
          TARGET: 1203,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48468,
          TARGET: 1189,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48762,
          TARGET: 1179,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49724,
          TARGET: 1166,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49619,
          TARGET: 1156,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48469,
          TARGET: 1144,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48502,
          TARGET: 1142,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49126,
          TARGET: 1141,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49726,
          TARGET: 1120,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49612 and 49303",
          TARGET: 1114,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 54554,
          TARGET: 1108,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49623,
          TARGET: 1099,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48613,
          TARGET: 1096,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48028,
          TARGET: 1081,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49880,
          TARGET: 1073,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49874,
          TARGET: 1046,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48845,
          TARGET: 1040,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49675,
          TARGET: 1035,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49876,
          TARGET: 1034,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49745,
          TARGET: 1016,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49847,
          TARGET: 986,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48754,
          TARGET: 985,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49744 and 48720",
          TARGET: 980,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49268,
          TARGET: 963,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49638,
          TARGET: 962,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48426,
          TARGET: 957,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49812,
          TARGET: 954,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49276,
          TARGET: 947,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49827,
          TARGET: 940,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49934,
          TARGET: 937,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 54540,
          TARGET: 923,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48761,
          TARGET: 920,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49818,
          TARGET: 917,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48749,
          TARGET: 911,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49912,
          TARGET: 908,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48885,
          TARGET: 902,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48735,
          TARGET: 893,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49052,
          TARGET: 890,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49836,
          TARGET: 883,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49835,
          TARGET: 877,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49406,
          TARGET: 869,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49701,
          TARGET: 865,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49104,
          TARGET: 863,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49705,
          TARGET: 861,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49716,
          TARGET: 857,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49963,
          TARGET: 851,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49958,
          TARGET: 842,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48856,
          TARGET: 838,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49743,
          TARGET: 837,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48841 and 49879",
          TARGET: 830,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49831,
          TARGET: 810,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48470,
          TARGET: 809,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49440,
          TARGET: 807,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49752,
          TARGET: 794,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49248,
          TARGET: 791,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48456,
          TARGET: 786,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49279,
          TARGET: 770,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49642 and 48807",
          TARGET: 768,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48636,
          TARGET: 766,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49757,
          TARGET: 763,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49618,
          TARGET: 758,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49718,
          TARGET: 741,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48765,
          TARGET: 739,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48853,
          TARGET: 737,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49891,
          TARGET: 715,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49613,
          TARGET: 703,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49840,
          TARGET: 692,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48465,
          TARGET: 690,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48432,
          TARGET: 668,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49066,
          TARGET: 665,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49760,
          TARGET: 656,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49922,
          TARGET: 654,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49725,
          TARGET: 637,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49886,
          TARGET: 635,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49894,
          TARGET: 621,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48437,
          TARGET: 617,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49895 and 49129",
          TARGET: 616,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49816,
          TARGET: 602,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49782,
          TARGET: 584,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49817,
          TARGET: 578,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49654,
          TARGET: 576,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48476,
          TARGET: 562,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49838 and 49710",
          TARGET: 556,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49806,
          TARGET: 549,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49762,
          TARGET: 545,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49955,
          TARGET: 541,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48619 and 49967",
          TARGET: 515,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49965,
          TARGET: 508,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49335,
          TARGET: 500,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49736,
          TARGET: 497,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49948,
          TARGET: 491,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49861,
          TARGET: 490,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48705,
          TARGET: 489,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49871,
          TARGET: 484,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49667,
          TARGET: 471,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49915,
          TARGET: 468,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49925,
          TARGET: 462,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49927,
          TARGET: 461,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49971,
          TARGET: 452,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49115,
          TARGET: 443,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48721,
          TARGET: 429,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49815,
          TARGET: 426,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49636,
          TARGET: 403,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49839,
          TARGET: 380,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49884,
          TARGET: 376,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49282,
          TARGET: 373,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49261,
          TARGET: 370,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49626,
          TARGET: 362,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49768,
          TARGET: 357,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49881,
          TARGET: 345,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49901,
          TARGET: 341,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48728,
          TARGET: 336,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49796,
          TARGET: 335,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49791,
          TARGET: 331,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49959,
          TARGET: 325,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49910,
          TARGET: 295,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48440 and 49822",
          TARGET: 290,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49833 and 49312",
          TARGET: 289,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49921,
          TARGET: 286,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49793 and 49834",
          TARGET: 281,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49722,
          TARGET: 278,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48177,
          TARGET: 271,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49116,
          TARGET: 269,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49611,
          TARGET: 260,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49917,
          TARGET: 255,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49728,
          TARGET: 250,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49919,
          TARGET: 231,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49970,
          TARGET: 229,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48896,
          TARGET: 226,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49808,
          TARGET: 217,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48724,
          TARGET: 214,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49825,
          TARGET: 206,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49764,
          TARGET: 202,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49717,
          TARGET: 198,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49826,
          TARGET: 191,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49820,
          TARGET: 190,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49627 and 48870",
          TARGET: 186,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49872,
          TARGET: 181,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49960,
          TARGET: 179,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49805,
          TARGET: 178,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49902 and 49074",
          TARGET: 175,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49748,
          TARGET: 174,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49289,
          TARGET: 173,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49119,
          TARGET: 169,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49929,
          TARGET: 167,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49863,
          TARGET: 165,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49628,
          TARGET: 163,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49962,
          TARGET: 160,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48633,
          TARGET: 159,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49634,
          TARGET: 157,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49027,
          TARGET: 148,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48139,
          TARGET: 140,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48627 and 49883",
          TARGET: 134,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48852,
          TARGET: 128,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49903,
          TARGET: 123,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49852,
          TARGET: 119,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48874,
          TARGET: 118,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49873,
          TARGET: 117,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49075,
          TARGET: 114,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49918,
          TARGET: 104,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49848,
          TARGET: 99,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49961,
          TARGET: 96,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48816 and 48411",
          TARGET: 90,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49952,
          TARGET: 89,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49864,
          TARGET: 88,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48743,
          TARGET: 83,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49320,
          TARGET: 79,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49775,
          TARGET: 76,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "48190 and 49674",
          TARGET: 72,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49942,
          TARGET: 68,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48434,
          TARGET: 65,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49458,
          TARGET: 54,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: "49263 and 49084",
          TARGET: 39,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 48630,
          TARGET: 37,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49877,
          TARGET: 36,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49819,
          TARGET: 20,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        },
        {
          SEASON: 49434,
          TARGET: 14,
          "UNIVARIATE SARIMA": "",
          "UNIVARIATE LSTM": "",
          "MULTIVARIATE XGBOOST": "",
          "MULTIVARIATE RANDOM FOREST": "",
          "MULTIVARIATE NEURAL NETWORK": "",
          "MULTIVARIATE LSTM": ""
        }
      ]
    };
    const seasons = Object.keys(groupBy(res.fluActivity, "SEASON"));
    this.setState(
      {
        fluData: res.fluActivity,
        chartData: res.fluActivity,
        model: res.model,
        seasons
      },
      () => {
        this.buildSeries(res.fluActivity);
      }
    );
    /*})
      .catch(error => console.error("Error:", error));*/
  }
  handleChange = e => {
    const d = groupBy(this.state.fluData, "SEASON");
    this.setState(
      {
        chartData:
          e.target.value === "season" ? this.state.fluData : d[e.target.value],
        value: e.target.value
      },
      () => {
        this.buildSeries(this.state.chartData);
      }
    );
  };
  handleInputChange = e => {
    const target = e.target;
    let model = this.state.model;
    let update = model.filter(i => i.id === target.name);
    update[0].check = target.checked;
    model[update.id] = update;
    this.setState(
      {
        model
      },
      () => {
        this.buildSeries(this.state.chartData);
      }
    );
  };
  buildSeries = data => {
    let modelName = this.state.model.filter(i => i.check).map(i => i.id);
    const x = ["ACTIVITY_LEVEL", ...modelName];
    const s = [];
    const fd = this.state.chartData;
    for (var i in x) {
      let data = fd.map(k => {
        return k[x[i]];
      });
      s.push({ name: x[i], data: data });
    }
    this.setState({
      series: s,
      categories: Object.keys(groupBy(fd, "WEEKEND"))
    });
    console.log(this.state);
  };
  render() {
    const { model, seasons } = this.state;
    return (
      <div className="row placeholders">
        {/**/}
        <div className="col-xs-12 col-sm-12 placeholder insight-tab">
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
                onChange={this.handleChange}
              >
                <option value="season">All Seasons</option>
                {seasons.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-12 mt-3 pl-4">
              <div className="row">
                <h6>Forecasting model:</h6>
                <form className="row">
                  {model.map(m => {
                    return (
                      <div className="form-check ml-4" key={m.id}>
                        <input
                          type="checkbox"
                          name={m.id}
                          checked={m.check}
                          onChange={this.handleInputChange}
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label">{m.name}</label>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <AppChart
                chartTitle="Flu Activity"
                categories={this.state.categories}
                series={this.state.series}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FluActivityModel;
