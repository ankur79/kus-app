import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import AppNav from "./AppNav";
import SideNav from "./SideNav";
import "../styles/App.css";
import PredictiveAnalyst from './PredictiveAnalyst';
import MarketingAnalyst from './MarketingAnalyst';
import SupplyChain from './SupplyChain';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNav/>
        <BrowserRouter>
          <SideNav>
            <Route exact path="/" component={Home}/>
            <Route
              path="/predictive-analyst"
              pageTitle="Predictive Analyst"
              component={PredictiveAnalyst}/>
            <Route path="/marketing-analyst" component={MarketingAnalyst}/>
            <Route path="/supply-chain" component={SupplyChain}/>
          </SideNav>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const Home = () => {
  return (
    <div>
      This is Home
    </div>
  )
};

export default App;