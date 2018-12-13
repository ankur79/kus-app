import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Map, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import L from "leaflet";
import GEOJSON from "../dataSet/stateData.json";
import txs from "../dataSet/texas.json";
import mi from "../dataSet/michigan.json";
import michigan from "../dataSet/michigan.json";
import county from "../dataSet/country.json";
import stores from "../dataSet/stores.json";
import Select from "react-select";
import $ from 'jquery';
import options from "../dataSet/us-states.json";
var info = L.control();
export default class MapView extends Component {
  state = {
    lat: 44.3,
    lng: -80.6,
    zoom: 6,
    data: [],
    stateData: [],
    defaultView: "country",
    crumbs: ["USA"],
    show: false
  };
  componentDidMount() {
    //this.addCountryMap(); this.addCountyMap();
    this.addStateMap('michigan');
    this.addTileLayer();
  }

  getColor(d, area) {
    const times = area != "state"
      ? 15
      : 1;
    return d > 1000 * times
      ? "#800026"
      : d > 500 * times
        ? "#BD0026"
        : d > 200 * times
          ? "#E31A1C"
          : d > 100 * times
            ? "#FC4E2A"
            : d > 50 * times
              ? "#FD8D3C"
              : d > 20 * times
                ? "#FEB24C"
                : d > 10 * times
                  ? "#FED976"
                  : "#DDDDDD";
  }
  style(feature, area = "state") {
    return {
      fillColor: this.getColor(feature.properties.density, area),
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
  highlightFeature(feature, layer, area) {
    //var layer = e.target;
    this
      .refs
      .map
      .leafletElement
      .eachLayer(layer => {
        //console.log(layer);
      });
    layer.setStyle({weight: 2, color: "#666", dashArray: "", fillOpacity: 0.7});
    //console.log(layer.feature)
    info.update(layer.feature.properties, area);
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }
  resetHighlight(feature, layer, area) {
    layer.setStyle({weight: 2, opacity: 1, color: "white", dashArray: "3", fillOpacity: 0.7});
    info.update(layer.feature.properties, area);
    //geojson.resetStyle(e.target);
  }
  addCountryMap() {
    L.geoJSON(GEOJSON.features, {
      onEachFeature: (feature, layer) => this.onEachFeature(feature, layer),
      style: feature => this.style(feature)
    }).addTo(this.refs.map.leafletElement);
    this.infoControl();
    this.displayLegend("state");
  }
  addCountyMap() {
    //L.geoJSON(uscounties.features).addTo(this.refs.map.leafletElement);
  }
  addStateMap(stateName) {
    let updateState = [];
    //this.displayReset()
    const loc = window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : ""
    fetch(`${loc}/api/countyPop`)
      .then(res => res.json())
      .then(res => {
        let countyPop = res.population;
        let state = michigan.features;
        console.log(countyPop)
        for (let i in state) {
          const p = countyPop
            .filter(item => item.County === state[i].properties.name)
            .map(item => item.Population);
          const pop = p[0] != undefined
            ? this.convertToNum(p[0])
            : 0;
          state[i].properties.density = pop;
          updateState.push(state[i]);
        }
        this.updatedStateFeatures(updateState);
        this.infoControl();
        //$(".state").css("display", "none")
        this.displayLegend("county");
      })
      .catch(error => console.error('Error:', error));

  }
  convertToNum(str) {
    var n = str
      .split(",")
      .map(Number);
    return parseInt(n.reduce((a, b) => a + b, ''));
  }
  updatedStateFeatures(data) {
    console.log(data)
    L.geoJSON(data, {
      onEachFeature: (feature, layer) => this.onEachStateFeature(feature, layer),
      style: feature => this.style(feature, "county")
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

    let crumbs = this.state.crumbs;
    crumbs.push("County");
    this.setState({crumbs: crumbs});
    this.buildCrumbs();
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
    info.update(feature, "county");
  }
  onEachFeature(feature, layer) {
    if (feature.properties.density != 0) {
      layer.on({
        mouseover: this
          .highlightFeature
          .bind(this, feature, layer, "state"),
        mouseout: this
          .resetHighlight
          .bind(this, feature, layer, "state"),
        click: this
          .zoomToFeature
          .bind(this, feature, layer, "state")
      });
    }
  }
  onEachStateFeature(feature, layer) {
    if (feature.properties.density != 0) {
      layer.on({
        mouseover: this
          .highlightFeature
          .bind(this, feature, layer, "county"),
        mouseout: this
          .resetHighlight
          .bind(this, feature, layer, "county")
      });
    }
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

    const v = this.state.defaultView;
    // method that we will use to update the control based on feature properties
    // passed
    info.update = function (props, area = "state") {
      console.log(props)
      let header = area === "state" && v === "country"
        ? "<h4>Michigan Population Data by County</h4>"
        : "<h4>Michigan Population Data by County</h4>"
      this._div.innerHTML = header + (props
        ? "<b>" + props.name + "</b><br />" + props.density + " population"
        : `Hover over a ${area}`);
    }

    info.addTo(this.refs.map.leafletElement);
  }
  displayReset(area = "state") {
    var legend = L.control({position: "topright"});
    var div = L
      .DomUtil
      .create("div", "reset_ntm")
    div.innerHTML += '<button>Reset </button>'
    return div;
  }
  displayLegend(area) {
    const times = area != "state"
      ? 15
      : 1;
    const cls = "info legend " + area
    var legend = L.control({position: "bottomright"});
    legend.onAdd = () => {
      var div = L
          .DomUtil
          .create("div", cls),
        grades = [
          0 * times,
          10 * times,
          20 * times,
          50 * times,
          100 * times,
          200 * times,
          500 * times,
          1000 * times
        ],
        labels = [];

      // loop through our density intervals and generate a label with a colored square
      // for each interval
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style="background:' + this.getColor(grades[i] + 1, area) + '"></i> ' + grades[i] + (grades[i + 1]
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
        <div>
          <Map center={position} zoom={this.state.zoom} zoomControl={false} ref="map"/>
        </div>
      </React.Fragment>
    );
  }
}
