import React from "react";
import { PageHeader } from "../utils/Common";
import { groupBy } from "lodash";
class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      tabNames: [],
      loader: true
    };
  }
  componentDidMount() {
    /*const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/insights`)
            .then(res => res.json())
            .then(res => {*/
    let res = [
      {
        tabNames: "Financial Opportunities",
        desc: "Estimated return in doses",
        value: "10M"
      },
      {
        tabNames: "Financial Opportunities",
        desc: "Estimated value in returns",
        value: "$15M"
      },
      {
        tabNames: "Financial Opportunities",
        desc: "Working capital reduction",
        value: "$5M"
      },
      {
        tabNames: "Financial Opportunities",
        desc: "Incremental Sales/Revenue",
        value: "$2M"
      },
      {
        tabNames: "Financial Opportunities",
        desc: "Market share improvement",
        value: "5%"
      },
      {
        tabNames: "Marketing Opportunities",
        desc: "Targeted market segmentation",
        value: "Improve by 25%"
      },
      {
        tabNames: "Marketing Opportunities",
        desc: "Adult high risk group - vaccination rate improvement",
        value: "Improve by 10%"
      },
      {
        tabNames: "Marketing Opportunities",
        desc: "Pediatric high risk group - vaccination rate improvement",
        value: "Improve by 5%"
      },
      {
        tabNames: "Marketing Opportunities",
        desc:
          "Target marketing campaigns for High Risk Disease Activity - Low vaccination rate regions",
        value: "ROI expected over 80%"
      },
      {
        tabNames: "Supply Chain Improvement Opportunities",
        desc: "Service level improvement",
        value: "Increase from 80% to 95%"
      },
      {
        tabNames: "Supply Chain Improvement Opportunities",
        desc: "Stock out reduction",
        value: "Reduce from 15% to 2%"
      },
      {
        tabNames: "Supply Chain Improvement Opportunities",
        desc: "Returns reduction",
        value: "Reduce from 12% to 8%"
      }
    ];
    this.setState({
      data: groupBy(res, "tabNames"),
      tabNames: Object.keys(groupBy(res, "tabNames")),
      loader: false
    });
    /*})
            .catch(error => console.error('Error:', error))*/
  }
  render() {
    return (
      <React.Fragment>
        {this.state.loader ? (
          <div className="loader" />
        ) : (
          <React.Fragment>
            <PageHeader header="Insights" />
            <div className="row placeholders">
              <div className="col-xs-12 col-sm-12 placeholder ">
                {this.state.tabNames.length > 0
                  ? this.state.tabNames.map(item => {
                      return (
                        <div className="insight-tab">
                          <h5>{item}</h5>
                          <table className="table table-sm table-striped">
                            <tbody>
                              {this.state.data[item].map(row => (
                                <tr>
                                  <td>{row.desc}</td>
                                  <td>
                                    <strong>{row.value}</strong>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Insights;
