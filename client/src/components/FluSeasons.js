import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {PageHeader} from '../utils/Common';
import PedDeathModel from '../components/PedDeathModel'
import HospModel from '../components/HospModel'
import VacCoverageModel from '../components/VacCoverageModel'
import VacEffectModel from '../components/VacEffectModel'

class FluSeasons extends Component {
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
                <PageHeader header="Flu Seasons"/>
                <div className="row placeholders">
                    <div className="col-xs-12 col-sm-12 placeholder">
                        <ul className="nav nav-pills mb-3">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="active"
                                    className="nav-link "
                                    to={`${match.path}`}>Pediatric Deaths</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/hospitalizations`}>Hospitalizations</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/vac-effect`}>Vaccine Effectiveness Rate</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to={`${match.path}/vac-coverage`}>Vaccination Coverage</NavLink>
                            </li>
                        </ul>
                        <Route exact path={`${match.path}`} component={PedDeathModel}/>
                        <Route path={`${match.path}/hospitalizations`} component={HospModel}/>
                        <Route path={`${match.path}/vac-effect`} component={VacEffectModel}/>
                        <Route path={`${match.path}/vac-coverage`} component={VacCoverageModel}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FluSeasons;
