import React from "react";
import AppChart from "./AppChart";

class AppContent extends React.Component {
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
        {this.props.content}
      </main>
    );
  }
}

export default AppContent;
