import React, {Component} from "react";
import {Map} from "react-leaflet";
import L from "leaflet";
var info = L.control();
var geojsn = []
export default class StoreMapView extends Component {
    state = {
        lat: 42.3,
        lng: -83.0,
        zoom: 9,
        data: [],
        stateData: [],
        defaultView: "country",
        crumbs: ["USA"],
        show: false
    };

    componentDidMount() {
        this.addPointers();
        this.addTileLayer();
    }

    getColor(d) {
        return d > 1000
            ? "#800026"
            : d > 500
                ? "#BD0026"
                : d > 200
                    ? "#E31A1C"
                    : d > 100
                        ? "#FC4E2A"
                        : d > 50
                            ? "#FD8D3C"
                            : d > 20
                                ? "#FEB24C"
                                : d > 10
                                    ? "#FED976"
                                    : "#FFEDA0";
    }
    style(feature) {
        return {
            fillColor: this.getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7
        };
    }
    countyStyle(feature) {
        return {weight: 1, opacity: 1, color: "black", dashArray: "2", fillOpacity: 0.3};
    }
    highlightFeature(feature, layer) {
        //var layer = e.target;
        this
            .refs
            .map
            .leafletElement
            .eachLayer(layer => {
                //console.log(layer);
            });
        layer.setStyle({weight: 5, color: "#666", dashArray: "", fillOpacity: 0.7});
        info.update(layer.feature.properties);
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }
    resetHighlight(feature, layer) {
        layer.setStyle({weight: 2, opacity: 1, color: "white", dashArray: "3", fillOpacity: 0.7});
        info.update();
        //geojson.resetStyle(e.target);
    }
    markerIcon(content, latlng) {
        return L.divIcon({className: "my-div-icon", html: String(content)});
    }
    openPop(id) {
        geojsn
            .eachLayer(function (feature) {
                if (feature.feature.properties.id == id) {
                    feature.openPopup();
                }
            });
    }
    popContent(props) {
        const {properties} = props;
        const t = modalContent => {
            this
                .props
                .handleShow(modalContent);
        };
        L.thorsten = {};
        L.thorsten.t = t;
        const htmlStr = `<div class="container">
                            <div class="row pop-pad">
                                <h4>${properties.name}</h4>
                                <div class="pop-address">${properties.street}</div>
                                <div class="pop-address">${properties.city}, ${
        properties.state}, ${properties.zip}</div>
                            </div>
                            <div class="row pop-address pop-pad">
                                <b>Flu Season</b>
                                <select>
                                    <option>2018-2019</option>
                                    <option>2017-2018</option>
                                </select>
                            </div>
                            <div class="row pop-address">
                                <a nohref onclick="L.thorsten.t('table')">Table</a> 
                                <a nohref onclick="L.thorsten.t('chart')">Chart</a> 
                                <a nohref onclick="L.thorsten.t('metrics')">Metrics</a>
                                <a nohref onclick="L.thorsten.t('predict line')">Predict Line</a>
                            </div>
                        </div>`;
        return htmlStr;
    }
    addPointers() {
        geojsn = L.geoJSON(this.props.stores.features, {
            pointToLayer: (feature, latlng) => {
                const {properties} = feature;
                let popContent = this.popContent(feature);
                return L
                    .marker(latlng, {
                    icon: this.markerIcon(feature.properties.id, latlng)
                })
                    .bindPopup(popContent);
            }
        }).addTo(this.refs.map.leafletElement);
        this.addTileLayer();
    }
    zoomToFeature(feature, layer) {
        this
            .refs
            .map
            .leafletElement
            .fitBounds(layer.getBounds());
        this
            .refs
            .map
            .leafletElement
            .eachLayer(layer => {
                this
                    .refs
                    .map
                    .leafletElement
                    .removeLayer(layer);
            });
        //console.log(feature)
        if (this.state.defaultView === "state") {
            this.addPointers();
            this.setState({defaultView: "county"});
        }
    }
    onEachFeature(feature, layer) {
        layer.on({
            mouseover: this
                .highlightFeature
                .bind(this, feature, layer),
            mouseout: this
                .resetHighlight
                .bind(this, feature, layer),
            click: this
                .zoomToFeature
                .bind(this, feature, layer)
        });
    }
    onEachStateFeature(feature, layer) {
        layer.on({
            click: this
                .zoomToFeature
                .bind(this, feature, layer)
        });
    }
    addTileLayer() {
        L
            .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {})
            .addTo(this.refs.map.leafletElement);
    }
    buildCrumbs() {
        let crumbList = "";
        this
            .state
            .crumbs
            .forEach((item, index) => {
                if (index > 0) {
                    crumbList += ` > ${item}`;
                } else {
                    crumbList += item;
                }
            });
        this
            .props
            .breadCrumbs(crumbList);
    }
    infoControl() {
        info.onAdd = function () {
            this._div = L
                .DomUtil
                .create("div", "info"); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties
        // passed
        info.update = function (props) {
            this._div.innerHTML = "<h4>US Flu Data</h4>" + (props
                ? "<b>" + props.name + "</b><br />" + props.density + " flu cases"
                : "Hover over a state");
        };

        info.addTo(this.refs.map.leafletElement);
    }
    displayLegend() {
        var legend = L.control({position: "bottomright"});

        legend.onAdd = () => {
            var div = L
                    .DomUtil
                    .create("div", "info legend"),
                grades = [
                    0,
                    10,
                    20,
                    50,
                    100,
                    200,
                    500,
                    1000
                ],
                labels = [];

            // loop through our density intervals and generate a label with a colored square
            // for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML += '<i style="background:' + this.getColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1]
                    ? "&ndash;" + grades[i + 1] + "<br>"
                    : "+");
            }

            return div;
        };

        legend.addTo(this.refs.map.leafletElement);
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <React.Fragment>
                <div style={{
                    display: "flex"
                }}>
                    <div className="col-xs-4 col-sm-4 pr-0 pl-0">
                        {this
                            .props
                            .stores
                            .features
                            .map((item) => <li
                                key={item.properties.id}
                                onClick={() => this.openPop(item.properties.id)}
                                className="addrs-list">
                                <div
                                    style={{
                                    display: "flex"
                                }}>
                                    <div className="my-div-icon">{item.properties.id}</div>
                                    <div className="mt-1 ml-2">
                                        <h6>{item.properties.name}</h6>
                                    </div>
                                </div>
                                <div className="ml-3 pl-4">
                                    <address>{item.properties.street}</address>
                                    <address>{`${item.properties.city}, ${item.properties.state} ${item.properties.zip}`}</address>
                                    <address>{item.properties.phone}</address>
                                </div>
                            </li>)}
                    </div>
                    <div className="col-xs-8 col-sm-8 pr-0 pl-0">
                        <Map center={position} zoom={this.state.zoom} ref="map"/>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
