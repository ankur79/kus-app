import React from "react";
import AppChart from "../components/AppChart";
import { groupBy } from "lodash";
class VacEffectModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      pedData: [],
      chartData: []
    };
  }
  componentDidMount() {
    /*const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/vaceffect`)
            .then(res => res.json())
            .then(res => {*/
    let res = [
      {
        season: "2004-05",
        Adj_Overall_VE: 10
      },
      {
        season: "2005-06",
        Adj_Overall_VE: 21
      },
      {
        season: "2006-07",
        Adj_Overall_VE: 52
      },
      {
        season: "2007-08",
        Adj_Overall_VE: 37
      },
      {
        season: "2008-09",
        Adj_Overall_VE: 41
      },
      {
        season: "2009-10",
        Adj_Overall_VE: 56
      },
      {
        season: "2010-11",
        Adj_Overall_VE: 60
      },
      {
        season: "2011-12",
        Adj_Overall_VE: 47
      },
      {
        season: "2012-13",
        Adj_Overall_VE: 49
      },
      {
        season: "2013-14",
        Adj_Overall_VE: 52
      },
      {
        season: "2014-15",
        Adj_Overall_VE: 19
      },
      {
        season: "2015-16",
        Adj_Overall_VE: 48
      },
      {
        season: "2016-17",
        Adj_Overall_VE: 40
      },
      {
        season: "2017-18",
        Adj_Overall_VE: 40
      }
    ];
    this.setState(
      {
        pedData: res,
        chartData: res
      },
      () => {
        this.buildSeries(res);
      }
    );

    /*})
            .catch(error => console.error('Error:', error))*/
  }
  buildSeries = data => {
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
  };
  render() {
    const { model, seasons } = this.state;
    return (
      <div className="row placeholders">
        <div className="col-xs-12 col-sm-12 placeholder insight-tab">
          <div className="row">
            <div className="col">
              <AppChart
                chartTitle="Vaccine Effectiveness Rate"
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

export default VacEffectModel;
