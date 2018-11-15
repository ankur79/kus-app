import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {PageHeader} from '../utils/Common';
import SupplyChain from './SupplyChain';

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
                        <ul className="nav nav-pills mb-3">
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
                        </ul>
                        <Route
                            exact
                            path={`${match.path}`}
                            render={() => <div>Data Not available</div>}/>

                        <Route path={`${match.path}/mkt-insights`} component={SupplyChain}/>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MarketingAnalytics;