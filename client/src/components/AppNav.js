import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';

class AppNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar className="fixed-top" color="dark" dark expand="md">
                    <NavbarBrand href="/">Kusari</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default AppNav;