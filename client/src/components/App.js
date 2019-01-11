import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import SideNav from "./SideNav";
import "../styles/App.css";
import Loadable from 'react-loadable';

const Insights = Loadable({
  loader: () => import ('./Insights'),
  loading() {
    return <div className="loader"></div>
  }
});
const PredictiveAnalyst = Loadable({
  loader: () => import ('./PredictiveAnalyst'),
  loading() {
    return <div className="loader"></div>
  }
});
const MarketingAnalytics = Loadable({
  loader: () => import ('./MarketingAnalytics'),
  loading() {
    return <div className="loader"></div>
  }
});
const FluSeasons = Loadable({
  loader: () => import ('./FluSeasons'),
  loading() {
    return <div className="loader"></div>
  }
});
const MarketingAnalyst = Loadable({
  loader: () => import ('./MarketingAnalyst'),
  loading() {
    return <div className="loader"></div>
  }
});
const KobaiApp = Loadable({
  loader: () => import ('./KobaiApp'),
  loading() {
    return <div className="loader"></div>
  }
});

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
            <Route path="/supply-chain" component={MarketingAnalyst}/>
            <Route path="/kobai" component={KobaiApp}/>
          </SideNav>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
