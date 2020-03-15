import React, { Component } from "react";
import { orderBy } from "lodash";
import { PageHeader } from "../utils/Common";

class KobaiTable extends Component {
  state = {
    loader: true,
    tabEl: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const loc =
      window.location.hostname === "localhost" ? "http://localhost:5000" : "";
    fetch(
      `${loc}/api/ko-tab/ep/${this.refs.inputEndPoint.value}/akey/${this.refs.inputApiKey.value}`
    )
      .then(res => res.json())
      .then(res => {
        this.buildSeries(res.koData);
      })
      .catch(error => console.error("Error:", error));
  };

  buildSeries = data => {
    this.setState({ tabEl: null });
    const rows = [];
    let h = [];
    for (var i in data) {
      if (i === "0") {
        var s = Object.keys(data[0]);
        h = s.map((k, index) => {
          return <th key={index}>{k}</th>;
        });
      } else {
        var s = Object.values(data[i]);
        const r = s.map((k, index) => {
          return <td key={index}>{k}</td>;
        });
        rows.push(<tr key={i}>{r}</tr>);
      }
    }
    const content = (
      <table className="table">
        <thead>
          <tr>{h}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
    this.setState({ tabEl: content });
  };
  render() {
    return (
      <React.Fragment>
        <PageHeader header="Current Inventory" />
        <div className="row placeholders">
          <div className="col-xs-12 col-sm-12 placeholder insight-tab">
            <div className="row">
              <div className="col">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="inputEndPoint">End Point</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEndPoint"
                      ref="inputEndPoint"
                      placeholder="Enter endpoint"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputApiKey">API Key</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputApiKey"
                      ref="inputApiKey"
                      placeholder="Enter API Key"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col">{this.state.tabEl}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default KobaiTable;
