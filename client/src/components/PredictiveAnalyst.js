import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {PageHeader} from '../utils/Common';
import AnalyticalModel from '../components/AnalyticalModel'
import FluActivityModel from '../components/FluActivityModel'

class PredictiveAnalyst extends Component {
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
                <PageHeader header="Predictive Analytics"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder">
                        <ul className="nav nav-pills mb-3">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="active"
                                    className="nav-link "
                                    to={`${match.path}`}>Analytical Model Optimization</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/flu-activity`}>Flu Disease Activity Predictive Model</NavLink>
                            </li>
                        </ul>
                        <Route exact path={`${match.path}`} component={AnalyticalModel}/>
                        <Route path={`${match.path}/flu-activity`} component={FluActivityModel}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PredictiveAnalyst;
