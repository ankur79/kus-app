import React from "react";
import { Table } from "reactstrap";

class ModalTable extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {data.length < 1 ? (
          <div className="loader"></div>
        ) : (
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                {Object.keys(data[0]).map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.values(item).map((item, index) => {
                      return <td key={index}>{item}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>{" "}
          </Table>
        )}
      </React.Fragment>
    );
  }
}

export default ModalTable;
