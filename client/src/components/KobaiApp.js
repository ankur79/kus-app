import React, {Component} from "react";
class KobaiApp extends Component {
    state = {
        koData: [],
        display: []
    }
    componentDidMount() {
        const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/ko-drate`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    kobai: res.koData
                }, () => {
                    this.buildSeries(res.koData);
                })

            })
            .catch(error => console.error('Error:', error))
    }
    buildSeries(data) {
        console.log(data)
        let displayUI = data.map(item => <li>{JSON.stringify(item)}</li>)
        this.setState({display: displayUI})
    }
    render() {
        return (
            <React.Fragment>
                {this.state.display}
            </React.Fragment>
        );
    }
}

export default KobaiApp;
