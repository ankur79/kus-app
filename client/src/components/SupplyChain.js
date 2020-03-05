import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { groupBy, sortBy, reverse } from "lodash";
import { PageHeader, defaultMapConfig } from "../utils/Common";
const HC_map = require("highcharts/modules/map")(Highcharts);

var maps = require("../utils/us.all");
class SupplyChain extends React.Component {
  state = {
    stateData: [],
    usStates: [],
    usState: "all",
    activity: "0",
    dataOptions: [
      "6_months_17_years",
      "6_months_4_years",
      "5-12_years",
      "13-17_years"
    ],
    dataOption: "6_months_17_years",
    config: defaultMapConfig
  };
  componentDidMount() {
    /*const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/statesupply`)
            .then(res => res.json())
            .then(res => {*/
    let res = [
      {
        States: "Alabama",
        "6_months_17_years": 53.8,
        "6_months_4_years": 61.7,
        "5-12_years": 56,
        "13-17_years": 42.9,
        POSTALCODE: "AL",
        "": ""
      },
      {
        States: "Alaska",
        "6_months_17_years": 48.4,
        "6_months_4_years": 60.4,
        "5-12_years": 45.3,
        "13-17_years": 43,
        POSTALCODE: "AK",
        "": ""
      },
      {
        States: "Arizona",
        "6_months_17_years": 51.3,
        "6_months_4_years": 67.8,
        "5-12_years": 51.8,
        "13-17_years": 37.3,
        POSTALCODE: "AZ",
        "": ""
      },
      {
        States: "Arkansas",
        "6_months_17_years": 63.6,
        "6_months_4_years": 62.9,
        "5-12_years": 66.2,
        "13-17_years": 59.9,
        POSTALCODE: "AR",
        "": ""
      },
      {
        States: "California",
        "6_months_17_years": 57.3,
        "6_months_4_years": 67.8,
        "5-12_years": 58.3,
        "13-17_years": 48.7,
        POSTALCODE: "CA",
        "": ""
      },
      {
        States: "Colorado",
        "6_months_17_years": 62.4,
        "6_months_4_years": 76.6,
        "5-12_years": 61.2,
        "13-17_years": 51.9,
        POSTALCODE: "CO",
        "": ""
      },
      {
        States: "Connecticut",
        "6_months_17_years": 71.3,
        "6_months_4_years": 83.4,
        "5-12_years": 74.9,
        "13-17_years": 55.9,
        POSTALCODE: "CT",
        "": ""
      },
      {
        States: "Delaware",
        "6_months_17_years": 65.2,
        "6_months_4_years": 74.8,
        "5-12_years": 67.5,
        "13-17_years": 53.8,
        POSTALCODE: "DE",
        "": ""
      },
      {
        States: "District of Columbia",
        "6_months_17_years": 69,
        "6_months_4_years": 77.4,
        "5-12_years": 68.9,
        "13-17_years": 61.8,
        POSTALCODE: "DC",
        "": ""
      },
      {
        States: "Florida",
        "6_months_17_years": 46.1,
        "6_months_4_years": 58.8,
        "5-12_years": 46.8,
        "13-17_years": 32.9,
        POSTALCODE: "FL",
        "": ""
      },
      {
        States: "Georgia",
        "6_months_17_years": 51.3,
        "6_months_4_years": 63.6,
        "5-12_years": 51,
        "13-17_years": 40.8,
        POSTALCODE: "GA",
        "": ""
      },
      {
        States: "Hawaii",
        "6_months_17_years": 61,
        "6_months_4_years": 65.4,
        "5-12_years": 63.6,
        "13-17_years": 52.9,
        POSTALCODE: "HI",
        "": ""
      },
      {
        States: "Idaho",
        "6_months_17_years": 48,
        "6_months_4_years": 67.2,
        "5-12_years": 44.8,
        "13-17_years": 37.7,
        POSTALCODE: "ID",
        "": ""
      },
      {
        States: "Illinois",
        "6_months_17_years": 54.9,
        "6_months_4_years": 70,
        "5-12_years": 55.4,
        "13-17_years": 43.9,
        POSTALCODE: "IL",
        "": ""
      },
      {
        States: "Indiana",
        "6_months_17_years": 51.7,
        "6_months_4_years": 62.4,
        "5-12_years": 55,
        "13-17_years": 37.2,
        POSTALCODE: "IN",
        "": ""
      },
      {
        States: "Iowa",
        "6_months_17_years": 58.9,
        "6_months_4_years": 68.6,
        "5-12_years": 59.7,
        "13-17_years": 48.2,
        POSTALCODE: "IA",
        "": ""
      },
      {
        States: "Kansas",
        "6_months_17_years": 53.2,
        "6_months_4_years": 60.9,
        "5-12_years": 57.3,
        "13-17_years": 40,
        POSTALCODE: "KA",
        "": ""
      },
      {
        States: "Kentucky",
        "6_months_17_years": 55.3,
        "6_months_4_years": 68.3,
        "5-12_years": 52.2,
        "13-17_years": 49.5,
        POSTALCODE: "KT",
        "": ""
      },
      {
        States: "Louisiana",
        "6_months_17_years": 55.6,
        "6_months_4_years": 63.5,
        "5-12_years": 54.5,
        "13-17_years": 50.4,
        POSTALCODE: "LA",
        "": ""
      },
      {
        States: "Maine",
        "6_months_17_years": 59.7,
        "6_months_4_years": 74,
        "5-12_years": 62,
        "13-17_years": 46.4,
        POSTALCODE: "ME",
        "": ""
      },
      {
        States: "Maryland",
        "6_months_17_years": 67.5,
        "6_months_4_years": 75.5,
        "5-12_years": 69.1,
        "13-17_years": 57.1,
        POSTALCODE: "MD",
        "": ""
      },
      {
        States: "Massachusetts",
        "6_months_17_years": 73.8,
        "6_months_4_years": 75.5,
        "5-12_years": 74.1,
        "13-17_years": 72.4,
        POSTALCODE: "MA",
        "": ""
      },
      {
        States: "Michigan",
        "6_months_17_years": 54,
        "6_months_4_years": 59,
        "5-12_years": 57.9,
        "13-17_years": 43.5,
        POSTALCODE: "MI",
        "": ""
      },
      {
        States: "Minnesota",
        "6_months_17_years": 61.9,
        "6_months_4_years": 74.6,
        "5-12_years": 65.3,
        "13-17_years": 49.9,
        POSTALCODE: "MN",
        "": ""
      },
      {
        States: "Mississippi",
        "6_months_17_years": 51.2,
        "6_months_4_years": 59.2,
        "5-12_years": 51,
        "13-17_years": 44.8,
        POSTALCODE: "MS",
        "": ""
      },
      {
        States: "Missouri",
        "6_months_17_years": 50.8,
        "6_months_4_years": 58.7,
        "5-12_years": 52.3,
        "13-17_years": 42.3,
        POSTALCODE: "MO",
        "": ""
      },
      {
        States: "Montana",
        "6_months_17_years": 50.3,
        "6_months_4_years": 63.2,
        "5-12_years": 52.2,
        "13-17_years": 38.3,
        POSTALCODE: "MT",
        "": ""
      },
      {
        States: "Nebraska",
        "6_months_17_years": 62.9,
        "6_months_4_years": 72.5,
        "5-12_years": 65.6,
        "13-17_years": 49.7,
        POSTALCODE: "NE",
        "": ""
      },
      {
        States: "Nevada",
        "6_months_17_years": 49.5,
        "6_months_4_years": 53.3,
        "5-12_years": 50.7,
        "13-17_years": 45,
        POSTALCODE: "NV",
        "": ""
      },
      {
        States: "New Hampshire",
        "6_months_17_years": 66.3,
        "6_months_4_years": 68.1,
        "5-12_years": 69.2,
        "13-17_years": 60.5,
        POSTALCODE: "NH",
        "": ""
      },
      {
        States: "New Jersey",
        "6_months_17_years": 69.1,
        "6_months_4_years": 83.8,
        "5-12_years": 70.3,
        "13-17_years": 55,
        POSTALCODE: "NJ",
        "": ""
      },
      {
        States: "New Mexico",
        "6_months_17_years": 62.3,
        "6_months_4_years": 67.8,
        "5-12_years": 65.3,
        "13-17_years": 50.5,
        POSTALCODE: "NM",
        "": ""
      },
      {
        States: "New York",
        "6_months_17_years": 64.9,
        "6_months_4_years": 70.7,
        "5-12_years": 69.7,
        "13-17_years": 51.8,
        POSTALCODE: "NY",
        "": ""
      },
      {
        States: "North Carolina",
        "6_months_17_years": 59.3,
        "6_months_4_years": 70.1,
        "5-12_years": 61.3,
        "13-17_years": 46.1,
        POSTALCODE: "NC",
        "": ""
      },
      {
        States: "North Dakota",
        "6_months_17_years": 62.4,
        "6_months_4_years": 73.5,
        "5-12_years": 63.7,
        "13-17_years": 51.8,
        POSTALCODE: "ND",
        "": ""
      },
      {
        States: "Ohio",
        "6_months_17_years": 56.2,
        "6_months_4_years": 67.4,
        "5-12_years": 59.4,
        "13-17_years": 42.9,
        POSTALCODE: "OH",
        "": ""
      },
      {
        States: "Oklahoma",
        "6_months_17_years": 55,
        "6_months_4_years": 67.1,
        "5-12_years": 55.5,
        "13-17_years": 43.2,
        POSTALCODE: "OK",
        "": ""
      },
      {
        States: "Oregon",
        "6_months_17_years": 54,
        "6_months_4_years": 60.6,
        "5-12_years": 53.8,
        "13-17_years": 49.6,
        POSTALCODE: "OR",
        "": ""
      },
      {
        States: "Pennsylvania",
        "6_months_17_years": 65.3,
        "6_months_4_years": 75.2,
        "5-12_years": 66.4,
        "13-17_years": 54,
        POSTALCODE: "PA",
        "": ""
      },
      {
        States: "Rhode Island",
        "6_months_17_years": 76.2,
        "6_months_4_years": 83.5,
        "5-12_years": 78.9,
        "13-17_years": 67.1,
        POSTALCODE: "RI",
        "": ""
      },
      {
        States: "South Carolina",
        "6_months_17_years": 57.2,
        "6_months_4_years": 64.6,
        "5-12_years": 58.7,
        "13-17_years": 47.6,
        POSTALCODE: "SC",
        "": ""
      },
      {
        States: "South Dakota",
        "6_months_17_years": 64.4,
        "6_months_4_years": 70.7,
        "5-12_years": 67.3,
        "13-17_years": 54.6,
        POSTALCODE: "SD",
        "": ""
      },
      {
        States: "Tennessee",
        "6_months_17_years": 61.5,
        "6_months_4_years": 66.4,
        "5-12_years": 61,
        "13-17_years": 57.6,
        POSTALCODE: "TE",
        "": ""
      },
      {
        States: "Texas",
        "6_months_17_years": 58,
        "6_months_4_years": 65.4,
        "5-12_years": 60.9,
        "13-17_years": 48.1,
        POSTALCODE: "TX",
        "": ""
      },
      {
        States: "Utah",
        "6_months_17_years": 47.4,
        "6_months_4_years": 57.4,
        "5-12_years": 53.3,
        "13-17_years": 32.8,
        POSTALCODE: "UT",
        "": ""
      },
      {
        States: "Vermont",
        "6_months_17_years": 59.5,
        "6_months_4_years": 69.2,
        "5-12_years": 63.2,
        "13-17_years": 46.3,
        POSTALCODE: "VT",
        "": ""
      },
      {
        States: "Virginia",
        "6_months_17_years": 65.2,
        "6_months_4_years": 83.1,
        "5-12_years": 65.9,
        "13-17_years": 50.2,
        POSTALCODE: "VA",
        "": ""
      },
      {
        States: "Washington",
        "6_months_17_years": 61.3,
        "6_months_4_years": 70.9,
        "5-12_years": 62.8,
        "13-17_years": 51.5,
        POSTALCODE: "WA",
        "": ""
      },
      {
        States: "West Virginia",
        "6_months_17_years": 53,
        "6_months_4_years": 62.6,
        "5-12_years": 51,
        "13-17_years": 48.5,
        POSTALCODE: "WV",
        "": ""
      },
      {
        States: "Wisconsin",
        "6_months_17_years": 60,
        "6_months_4_years": 70.8,
        "5-12_years": 62.5,
        "13-17_years": 46.3,
        POSTALCODE: "WI",
        "": ""
      },
      {
        States: "Wyoming",
        "6_months_17_years": 43.2,
        "6_months_4_years": 59.2,
        "5-12_years": 42.8,
        "13-17_years": 32.3,
        POSTALCODE: "WY",
        "": ""
      }
    ];
    this.setState(
      {
        stateData: res,
        usStates: Object.keys(groupBy(res, "States"))
      },
      () => {
        this.drawMap();
      }
    );
    /*})
            .catch(error => console.error('Error:', error))*/
  }
  handleChange = e => {
    this.setState(
      {
        usState: e.target.value
      },
      () => {
        this.drawMap();
      }
    );
  };
  handleDataOption = e => {
    this.setState(
      {
        dataOption: e.target.value
      },
      () => {
        this.drawMap();
      }
    );
  };
  handleSort = e => {
    this.setState(
      {
        activity: e.target.value
      },
      () => {
        this.drawMap();
      }
    );
  };
  drawMap = () => {
    let mapData = [];
    let { stateData, dataOption } = this.state;
    for (let i in stateData) {
      mapData.push({
        state: stateData[i].States,
        code: stateData[i].POSTALCODE,
        value: stateData[i][dataOption]
      });
    }
    if (this.state.usState != "all") {
      mapData = mapData.filter(item => item.state === this.state.usState);
    }
    if (this.state.activity === "1") {
      mapData = sortBy(mapData, ["value"]).splice(1, 10);
    }
    if (this.state.activity === "2") {
      mapData = reverse(sortBy(mapData, ["value"])).splice(1, 10);
    }
    const config = {
      chart: {
        map: maps,
        borderWidth: 0
      },
      title: {
        text: "Vaccination Rates"
      },
      exporting: {
        sourceWidth: 600,
        sourceHeight: 600
      },
      legend: {
        layout: "horizontal",
        borderWidth: 0,
        backgroundColor: "rgba(255,255,255,0.85)",
        floating: true,
        verticalAlign: "bottom",
        y: 25
      },
      mapNavigation: {
        enabled: true
      },
      colorAxis: {
        min: 1,
        type: "logarithmic",
        minColor: "#DDDDDD",
        maxColor: "#BAF480",
        stops: [
          [0, "#492C3C"],
          [0.2, "#55455E"],
          [0.5, "#63637F"],
          [0.7, "#448298"],
          [1, "#BAF480"]
        ]
      },
      series: [
        {
          data: mapData,
          joinBy: ["postal-code", "code"],
          dataLabels: {
            enabled: true,
            color: "#FFFFFF",
            format: "{point.code}"
          },
          name: dataOption,
          tooltip: {
            pointFormat: "{point.code}: {point.value}"
          }
        }
      ]
    };
    this.setState({ config });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row placeholders">
          <div className="col-xs-12 col-sm-12 placeholder insight-tab">
            <div className="row">
              <div className="col col-md-2">
                <select
                  className="form-control"
                  value={this.state.usState}
                  onChange={this.handleChange}
                >
                  <option value="all">All States</option>
                  {this.state.usStates.map(s => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col col-md-5">
                <div className="row">
                  <div className="col col-md-3 pr-0 pt-2">Age Group</div>
                  <div className="col col-md-6 pl-0">
                    <select
                      className="form-control"
                      value={this.state.dataOption}
                      onChange={this.handleDataOption}
                    >
                      {this.state.dataOptions.map(s => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col col-md-4">
                <div className="row">
                  <div className="col col-md-2 pr-0 pt-2">Sort</div>
                  <div className="col col-md-10 pl-0">
                    <select
                      className="form-control"
                      value={this.state.activity}
                      onChange={this.handleSort}
                    >
                      <option value="0">All</option>
                      <option value="1">
                        States with Low Vaccination Rates
                      </option>
                      <option value="2">
                        States with risk of High Activity
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 20
              }}
            >
              <div className="col col-md-12">
                <MapChart config={this.state.config} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const MapChart = props => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"mapChart"}
      options={props.config}
    />
  );
};

export default SupplyChain;
