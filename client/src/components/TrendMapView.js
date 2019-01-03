import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    Map,
    TileLayer,
    Marker,
    Popup,
    GeoJSON,
    FeatureGroup,
    LayersControl
} from "react-leaflet";
import L from "leaflet";
import GEOJSON from "../dataSet/stateData.json";
import michigan from "../dataSet/michigan.json";
import stores from "../dataSet/stores.json";
import HeatmapLayer from '../utils/HeatmapLayer';

var info = L.control();
export default class TrendMapView extends Component {
    state = {
        lat: 42.3,
        lng: -85.6,
        zoom: 7,
        data: [],
        stateData: [],
        defaultView: "country",
        crumbs: ["USA"],
        show: false
    };
    componentDidMount() {
        //this.addPointers();
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
    addCountryMap() {
        L.geoJSON(GEOJSON.features, {
            onEachFeature: (feature, layer) => this.onEachFeature(feature, layer),
            style: feature => this.style(feature)
        }).addTo(this.refs.map.leafletElement);
    }
    addCountyMap() {
        //L.geoJSON(uscounties.features).addTo(this.refs.map.leafletElement);
    }
    addStateMap(stateName) {
        const _stateName = stateName.toLowerCase();
        console.log(_stateName)
        L.geoJSON(michigan.features, {
            onEachFeature: (feature, layer) => this.onEachStateFeature(feature, layer)
        }).addTo(this.refs.map.leafletElement);
        this.addTileLayer();
    }
    markerIcon(content, latlng) {
        return L.divIcon({className: "my-div-icon", html: String(content)});
    }
    localFunc() {
        console.log("POP");
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
                                <a nohref onclick="L.thorsten.t('table')">Table</a> | 
                                <a nohref onclick="L.thorsten.t('chart')">Chart</a> | 
                                <a nohref onclick="L.thorsten.t('metrics')">Metrics</a>| 
                                <a nohref onclick="L.thorsten.t('predict line')">Predict Line</a>
                            </div>
                        </div>`;
        return htmlStr;
    }
    addPointers() {
        L.geoJSON(stores.features, {
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
        if (this.state.defaultView === "country") {
            this.addStateMap(feature.properties.name);
            this.setState({defaultView: "state"});
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

    render() {
        const position = [this.state.lat, this.state.lng];
        const gradient = {
            0.1: '#89BDE0',
            0.2: '#96E3E6',
            0.4: '#82CEB6',
            0.6: '#FAF3A5',
            0.8: '#F5D98B',
            '1.0': '#DE9A96'
        };
        const addressPoints = [
            [
                42.347021, -83.060184, "0"
            ],
            [
                42.347021, -83.060184, "100"
            ],
            [
                42.347021, -83.060184, "200"
            ],
            [
                42.347021, -83.060184, "500"
            ],
            [
                42.349600, -83.018847, "0"
            ],
            [
                42.349600, -83.018847, "500"
            ],
            [
                42.349600, -83.018847, "1000"
            ],
            [
                42.349600, -83.018847, "2000"
            ],
            [
                42.97550, -82.42430, "0"
            ],
            [
                42.97550, -82.42430, "100"
            ],
            [
                42.97550, -82.42430, "100"
            ],
            [42.97550, -82.42430, "0"]
        ]
        return (
            <React.Fragment>
                <div>
                    <Map center={position} zoom={this.state.zoom} ref="map">
                        <HeatmapLayer
                            fitBoundsOnLoad
                            fitBoundsOnUpdate
                            points={addressPoints}
                            longitudeExtractor={m => m[1]}
                            latitudeExtractor={m => m[0]}
                            intensityExtractor={m => parseFloat(m[2])}/>
                    </Map>
                </div>
            </React.Fragment>
        );
    }
}
