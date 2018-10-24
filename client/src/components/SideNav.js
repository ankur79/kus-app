import React from "react";
import {Container, Nav, Row} from "reactstrap";

import {NavLink} from 'react-router-dom';
import AppContent from "./AppContent";

class SideNav extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <nav className="col-md-2 sidebar d-none d-md-block bg-light">
                        <div className="sidebar-sticky">
                            <Nav className="flex-column">
                                <li>
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">
                                        <i className="fa fa-home"></i>{" "}Home</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        to="/predictive-analyst"
                                        className="nav-link"
                                        activeClassName="active">
                                        <i className="fa fa-bullseye"></i>{" "}Predictive Analytics</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        to="/marketing-analyst"
                                        className="nav-link"
                                        activeClassName="active">
                                        <i className="fa fa-briefcase"></i>{" "}Marketing Analytics</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/supply-chain" className="nav-link" activeClassName="active">
                                        <i className="fa fa-truck"></i>{" "}Supply Chain Analytics</NavLink>
                                </li>
                            </Nav>
                        </div>
                    </nav>
                    <AppContent header="Page" content={this.props.children}/>

                </Row>
            </Container>
        );
    }
}

export default SideNav;
