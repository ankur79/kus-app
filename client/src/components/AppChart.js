import React from "react";
import ReactHighcharts from "react-highcharts";
require('highcharts-more')(ReactHighcharts.Highcharts);
class AppChart extends React.Component {

  render() {

    const config = {

      title: {
        text: 'Flu Forecast'
      },

      xAxis: {
        categories: this.props.categories
      },

      yAxis: {
        title: {
          text: null
        }
      },

      legend: {},

      series: this.props.series
    }
    return <ReactHighcharts config={config} ref="chart"/>;
  }
}

export default AppChart;
