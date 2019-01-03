import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {PageHeader} from '../utils/Common';
import SupplyChain from './SupplyChain';
import CountyChart from './CountyChart';
import StateChart from './StateChart';
import FluTrendChart from './FluTrendChart';
class MarketingAnalytics extends Component {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
    }
    render() {
        const {match} = this.props;
        return (
            <React.Fragment>
                <PageHeader header="Marketing Analytics"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="active"
                                    className="nav-link "
                                    to={`${match.path}`}>Flu Vaccine Demand Model</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/mkt-insights`}>Marketing Insights</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/county-view`}>County View</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/zip-view`}>Zip Code View</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/flu-trend`}>Flu Trend</NavLink>
                            </li>
                        </ul>
                        <Route
                            exact
                            path={`${match.path}`}
                            render={() => <div>Data Not available</div>}/>

                        <Route path={`${match.path}/mkt-insights`} component={SupplyChain}/>
                        <Route exact path={`${match.path}/county-view`} component={CountyChart}/>
                        <Route exact path={`${match.path}/zip-view`} component={StateChart}/>
                        <Route exact path={`${match.path}/flu-trend`} component={FluTrendChart}/>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MarketingAnalytics;
