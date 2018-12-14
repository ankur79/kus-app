import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import AppNav from "./AppNav";
import SideNav from "./SideNav";
import "../styles/App.css";
import Insights from './Insights';
import PredictiveAnalyst from './PredictiveAnalyst';
import MarketingAnalytics from './MarketingAnalytics';
import SupplyChain from './SupplyChain';
import FluSeasons from './FluSeasons';

class App extends Component {
  render() {
    const hash = "/#"
    return (
      <React.Fragment>
        {/*<AppNav/>*/}
        <HashRouter>
          <SideNav>
            <Route exact path="/" component={Insights}/>
            <Route path="/flu-seasons" component={FluSeasons}/>
            <Route
              path="/predictive-analyst"
              pageTitle="Predictive Analyst"
              component={PredictiveAnalyst}/>
            <Route path="/marketing-analyst" component={MarketingAnalytics}/>
            <Route path="/supply-chain" render={() => <div>Data Not available</div>}/>
          </SideNav>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
