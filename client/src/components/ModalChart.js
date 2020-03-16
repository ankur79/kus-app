import React from "react";
import { Line } from "react-chartjs-2";
import csvjson from "../dataSet/csvjson.json";
class ModalChart extends React.Component {
  getRandomColor() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  render() {
    const labels = csvjson.map(item => item.Period);
    const [Store_ID, Period, SKU_ID, ...dataLabels] = Object.keys(csvjson[0]);
    var speed = 250;
    var options = {
      animation: {
        duration: speed * 1.5,
        easing: "easeInQuad"
      }
    };
    let datasets = dataLabels.map(item => {
      const clr = this.getRandomColor();
      const data = csvjson.map(data => data[item]);
      return {
        label: item,
        data,
        fill: false,
        lineTension: 0.1,
        backgroundColor: clr,
        borderColor: clr,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: clr,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: clr,
        pointHoverBorderColor: clr,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
      };
    });
    const data = {
      labels,
      datasets
    };
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default ModalChart;
