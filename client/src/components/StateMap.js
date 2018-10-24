import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Map} from "react-leaflet";
import L from "leaflet";
import stores from "../dataSet/stores.json";
var info = L.control();
export default class StateMap extends Component {
    state = {
        lat: 44.1,
        lng: -84,
        zoom: 6,
        data: [],
        stateData: [],
        defaultView: "state",
        crumbs: ["Michigan"],
        show: false
    };

    componentDidMount() {
        this.addPointers();

        this.addTileLayer();
    }

    highlightFeature(feature, layer) {
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
        return (
            <div>
                <Map center={position} zoom={this.state.zoom} ref="map"/>
            </div>
        );
    }
}
