import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import GEOJSON from "../dataSet/stateData.json";
import michigan from "../dataSet/mizip.json";
//import Select from
// "react-select"; import $ from 'jquery'; import options from
// "../dataSet/us-states.json";
var info = L.control();
export default class HeatMapView extends Component {
  state = {
    lat: 44.3,
    lng: -80.6,
    zoom: 7,
    data: [],
    stateData: [],
    defaultView: "country",
    crumbs: ["USA"],
    show: false
  };
  componentDidMount() {
    //this.addCountryMap(); this.addCountyMap();
    this.addStateMap("michigan");
    this.addTileLayer();
  }

  getColor(d, area) {
    const times = area != "state" ? 15 : 1;
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
    return {
      weight: 1,
      opacity: 1,
      color: "black",
      dashArray: "1",
      fillOpacity: 0.3
    };
  }
  highlightFeature(feature, layer, area) {
    //var layer = e.target;
    this.refs.map.leafletElement.eachLayer(layer => {
      //console.log(layer);
    });
    layer.setStyle({
      weight: 1,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7
    });
    //console.log(layer.feature)
    info.update(layer.feature.properties, area);
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }
  resetHighlight(feature, layer, area) {
    layer.setStyle({
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "1",
      fillOpacity: 0.7
    });
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
    /*const loc =
      window.location.hostname === "localhost" ? "http://localhost:5000" : "";
    fetch(`${loc}/api/statePop`)
      .then(res => res.json())
      .then(res => {*/
    let countyPop = [
      {
        Zip: 48197,
        density: 66915
      },
      {
        Zip: 48180,
        density: 61716
      },
      {
        Zip: 48044,
        density: 55783
      },
      {
        Zip: 48103,
        density: 54120
      },
      {
        Zip: 48228,
        density: 52342
      },
      {
        Zip: 48823,
        density: 50531
      },
      {
        Zip: 48858,
        density: 49990
      },
      {
        Zip: 48219,
        density: 49326
      },
      {
        Zip: 48187,
        density: 48278
      },
      {
        Zip: 48185,
        density: 48027
      },
      {
        Zip: 48126,
        density: 47789
      },
      {
        Zip: 48066,
        density: 47678
      },
      {
        Zip: 49424,
        density: 47218
      },
      {
        Zip: 48439,
        density: 47164
      },
      {
        Zip: 49423,
        density: 45559
      },
      {
        Zip: 48235,
        density: 45101
      },
      {
        Zip: 49009,
        density: 44653
      },
      {
        Zip: 48843,
        density: 44635
      },
      {
        Zip: 49201,
        density: 44536
      },
      {
        Zip: 48310,
        density: 43944
      },
      {
        Zip: 48307,
        density: 43014
      },
      {
        Zip: 48183,
        density: 42374
      },
      {
        Zip: 48224,
        density: 42361
      },
      {
        Zip: 48038,
        density: 42287
      },
      {
        Zip: 48227,
        density: 41571
      },
      {
        Zip: 48111,
        density: 41560
      },
      {
        Zip: 49442,
        density: 41550
      },
      {
        Zip: 48188,
        density: 41373
      },
      {
        Zip: 48104,
        density: 41352
      },
      {
        Zip: 49508,
        density: 41139
      },
      {
        Zip: 49221,
        density: 41103
      },
      {
        Zip: 48047,
        density: 40290
      },
      {
        Zip: 48060,
        density: 39830
      },
      {
        Zip: 48706,
        density: 39637
      },
      {
        Zip: 49684,
        density: 39614
      },
      {
        Zip: 48221,
        density: 39611
      },
      {
        Zip: 48170,
        density: 39352
      },
      {
        Zip: 48911,
        density: 39063
      },
      {
        Zip: 49504,
        density: 38877
      },
      {
        Zip: 49203,
        density: 38842
      },
      {
        Zip: 49507,
        density: 38390
      },
      {
        Zip: 48198,
        density: 38191
      },
      {
        Zip: 48212,
        density: 38133
      },
      {
        Zip: 48154,
        density: 37772
      },
      {
        Zip: 48430,
        density: 37299
      },
      {
        Zip: 49120,
        density: 37178
      },
      {
        Zip: 48146,
        density: 37037
      },
      {
        Zip: 49441,
        density: 36012
      },
      {
        Zip: 48601,
        density: 35986
      },
      {
        Zip: 48127,
        density: 35985
      },
      {
        Zip: 48205,
        density: 35925
      },
      {
        Zip: 48105,
        density: 35754
      },
      {
        Zip: 48239,
        density: 35711
      },
      {
        Zip: 49341,
        density: 35546
      },
      {
        Zip: 49503,
        density: 35484
      },
      {
        Zip: 48910,
        density: 35338
      },
      {
        Zip: 48035,
        density: 35101
      },
      {
        Zip: 49426,
        density: 34783
      },
      {
        Zip: 48186,
        density: 34199
      },
      {
        Zip: 48234,
        density: 34083
      },
      {
        Zip: 48073,
        density: 33832
      },
      {
        Zip: 49506,
        density: 33741
      },
      {
        Zip: 48313,
        density: 33594
      },
      {
        Zip: 49855,
        density: 33500
      },
      {
        Zip: 48312,
        density: 33491
      },
      {
        Zip: 48640,
        density: 33374
      },
      {
        Zip: 49546,
        density: 33178
      },
      {
        Zip: 48209,
        density: 32879
      },
      {
        Zip: 48322,
        density: 32766
      },
      {
        Zip: 49686,
        density: 32747
      },
      {
        Zip: 48021,
        density: 32576
      },
      {
        Zip: 48507,
        density: 32425
      },
      {
        Zip: 48178,
        density: 32362
      },
      {
        Zip: 48917,
        density: 32205
      },
      {
        Zip: 49548,
        density: 31938
      },
      {
        Zip: 48423,
        density: 31869
      },
      {
        Zip: 48642,
        density: 31861
      },
      {
        Zip: 49505,
        density: 31720
      },
      {
        Zip: 49022,
        density: 31498
      },
      {
        Zip: 48174,
        density: 31267
      },
      {
        Zip: 48152,
        density: 31172
      },
      {
        Zip: 48091,
        density: 31074
      },
      {
        Zip: 48210,
        density: 30948
      },
      {
        Zip: 48089,
        density: 30923
      },
      {
        Zip: 49417,
        density: 30714
      },
      {
        Zip: 48602,
        density: 30589
      },
      {
        Zip: 48446,
        density: 30447
      },
      {
        Zip: 48071,
        density: 30168
      },
      {
        Zip: 48236,
        density: 29968
      },
      {
        Zip: 48237,
        density: 29751
      },
      {
        Zip: 48124,
        density: 29575
      },
      {
        Zip: 48042,
        density: 29413
      },
      {
        Zip: 48195,
        density: 29355
      },
      {
        Zip: 49525,
        density: 29326
      },
      {
        Zip: 48238,
        density: 29181
      },
      {
        Zip: 49444,
        density: 29178
      },
      {
        Zip: 48506,
        density: 29168
      },
      {
        Zip: 49519,
        density: 29051
      },
      {
        Zip: 48309,
        density: 28999
      },
      {
        Zip: 49464,
        density: 28961
      },
      {
        Zip: 49024,
        density: 28651
      },
      {
        Zip: 49006,
        density: 28517
      },
      {
        Zip: 48504,
        density: 28303
      },
      {
        Zip: 48162,
        density: 28300
      },
      {
        Zip: 49418,
        density: 27986
      },
      {
        Zip: 48306,
        density: 27936
      },
      {
        Zip: 48101,
        density: 27519
      },
      {
        Zip: 48317,
        density: 27435
      },
      {
        Zip: 48867,
        density: 27375
      },
      {
        Zip: 49428,
        density: 27298
      },
      {
        Zip: 48315,
        density: 27248
      },
      {
        Zip: 48116,
        density: 27156
      },
      {
        Zip: 48316,
        density: 27020
      },
      {
        Zip: 48135,
        density: 27001
      },
      {
        Zip: 48708,
        density: 26956
      },
      {
        Zip: 48092,
        density: 26946
      },
      {
        Zip: 49015,
        density: 26920
      },
      {
        Zip: 48336,
        density: 26716
      },
      {
        Zip: 48603,
        density: 26608
      },
      {
        Zip: 49509,
        density: 26495
      },
      {
        Zip: 48161,
        density: 26469
      },
      {
        Zip: 48108,
        density: 26457
      },
      {
        Zip: 48433,
        density: 26288
      },
      {
        Zip: 48906,
        density: 26115
      },
      {
        Zip: 48328,
        density: 26011
      },
      {
        Zip: 48150,
        density: 25905
      },
      {
        Zip: 48503,
        density: 25902
      },
      {
        Zip: 48340,
        density: 25862
      },
      {
        Zip: 48076,
        density: 25825
      },
      {
        Zip: 49048,
        density: 25352
      },
      {
        Zip: 48329,
        density: 25338
      },
      {
        Zip: 48192,
        density: 25225
      },
      {
        Zip: 48204,
        density: 25096
      },
      {
        Zip: 48067,
        density: 25017
      },
      {
        Zip: 48085,
        density: 24963
      },
      {
        Zip: 48045,
        density: 24907
      },
      {
        Zip: 48141,
        density: 24738
      },
      {
        Zip: 48223,
        density: 24323
      },
      {
        Zip: 48213,
        density: 24137
      },
      {
        Zip: 48371,
        density: 23905
      },
      {
        Zip: 48093,
        density: 23871
      },
      {
        Zip: 48203,
        density: 23498
      },
      {
        Zip: 48390,
        density: 23484
      },
      {
        Zip: 49036,
        density: 23380
      },
      {
        Zip: 48375,
        density: 23211
      },
      {
        Zip: 49085,
        density: 23049
      },
      {
        Zip: 48348,
        density: 23017
      },
      {
        Zip: 48346,
        density: 23009
      },
      {
        Zip: 48083,
        density: 23002
      },
      {
        Zip: 48220,
        density: 22646
      },
      {
        Zip: 48382,
        density: 22596
      },
      {
        Zip: 49001,
        density: 22552
      },
      {
        Zip: 48335,
        density: 22486
      },
      {
        Zip: 48176,
        density: 22433
      },
      {
        Zip: 48080,
        density: 22386
      },
      {
        Zip: 48088,
        density: 22255
      },
      {
        Zip: 49401,
        density: 22253
      },
      {
        Zip: 49707,
        density: 22037
      },
      {
        Zip: 49315,
        density: 21996
      },
      {
        Zip: 48167,
        density: 21982
      },
      {
        Zip: 49017,
        density: 21947
      },
      {
        Zip: 49316,
        density: 21940
      },
      {
        Zip: 48864,
        density: 21914
      },
      {
        Zip: 48207,
        density: 21832
      },
      {
        Zip: 48036,
        density: 21830
      },
      {
        Zip: 48327,
        density: 21824
      },
      {
        Zip: 48214,
        density: 21805
      },
      {
        Zip: 48168,
        density: 21798
      },
      {
        Zip: 48075,
        density: 21651
      },
      {
        Zip: 48473,
        density: 21631
      },
      {
        Zip: 48420,
        density: 21553
      },
      {
        Zip: 48813,
        density: 21433
      },
      {
        Zip: 49014,
        density: 21386
      },
      {
        Zip: 49534,
        density: 21349
      },
      {
        Zip: 49037,
        density: 21337
      },
      {
        Zip: 48505,
        density: 21231
      },
      {
        Zip: 48134,
        density: 21223
      },
      {
        Zip: 48331,
        density: 21220
      },
      {
        Zip: 48182,
        density: 21175
      },
      {
        Zip: 48326,
        density: 21115
      },
      {
        Zip: "48842 and 49601",
        density: 21061
      },
      {
        Zip: 48169,
        density: 21047
      },
      {
        Zip: 48081,
        density: 20867
      },
      {
        Zip: 48442,
        density: 20799
      },
      {
        Zip: 48114,
        density: 20756
      },
      {
        Zip: 49307,
        density: 20737
      },
      {
        Zip: 48009,
        density: 20653
      },
      {
        Zip: 48314,
        density: 20610
      },
      {
        Zip: 49002,
        density: 20584
      },
      {
        Zip: 48125,
        density: 20344
      },
      {
        Zip: 49301,
        density: 20101
      },
      {
        Zip: 49202,
        density: 20071
      },
      {
        Zip: 49445,
        density: 20047
      },
      {
        Zip: 48846,
        density: 19827
      },
      {
        Zip: 48532,
        density: 19709
      },
      {
        Zip: 49783,
        density: 19672
      },
      {
        Zip: 48458,
        density: 19618
      },
      {
        Zip: 49735,
        density: 19577
      },
      {
        Zip: 49091,
        density: 19500
      },
      {
        Zip: 48837,
        density: 19439
      },
      {
        Zip: 48098,
        density: 19362
      },
      {
        Zip: 48854,
        density: 19050
      },
      {
        Zip: 49456,
        density: 19041
      },
      {
        Zip: 49058,
        density: 19036
      },
      {
        Zip: 48334,
        density: 18867
      },
      {
        Zip: 48094,
        density: 18807
      },
      {
        Zip: 48206,
        density: 18049
      },
      {
        Zip: 49093,
        density: 18021
      },
      {
        Zip: 48838,
        density: 18016
      },
      {
        Zip: 48879,
        density: 17934
      },
      {
        Zip: 48820,
        density: 17842
      },
      {
        Zip: 48051,
        density: 17741
      },
      {
        Zip: 48323,
        density: 17661
      },
      {
        Zip: 48912,
        density: 17646
      },
      {
        Zip: 48240,
        density: 17568
      },
      {
        Zip: 49010,
        density: 17523
      },
      {
        Zip: 48386,
        density: 17489
      },
      {
        Zip: 49331,
        density: 17454
      },
      {
        Zip: 48341,
        density: 17350
      },
      {
        Zip: 49829,
        density: 17345
      },
      {
        Zip: 48324,
        density: 17235
      },
      {
        Zip: 49431,
        density: 17175
      },
      {
        Zip: 49770,
        density: 17148
      },
      {
        Zip: 48184,
        density: 17143
      },
      {
        Zip: 49512,
        density: 17117
      },
      {
        Zip: 48342,
        density: 17060
      },
      {
        Zip: 49321,
        density: 16875
      },
      {
        Zip: 48202,
        density: 16762
      },
      {
        Zip: 48393,
        density: 16750
      },
      {
        Zip: 48304,
        density: 16687
      },
      {
        Zip: 48082,
        density: 16626
      },
      {
        Zip: 48030,
        density: 16587
      },
      {
        Zip: 48230,
        density: 16532
      },
      {
        Zip: 49319,
        density: 16507
      },
      {
        Zip: 48033,
        density: 16420
      },
      {
        Zip: 48043,
        density: 16377
      },
      {
        Zip: 49080,
        density: 16244
      },
      {
        Zip: 49008,
        density: 16182
      },
      {
        Zip: 48362,
        density: 16073
      },
      {
        Zip: 48827,
        density: 15972
      },
      {
        Zip: 49004,
        density: 15828
      },
      {
        Zip: 48624,
        density: 15756
      },
      {
        Zip: 48377,
        density: 15702
      },
      {
        Zip: 48084,
        density: 15655
      },
      {
        Zip: 48130,
        density: 15554
      },
      {
        Zip: 48374,
        density: 15386
      },
      {
        Zip: 48193,
        density: 15288
      },
      {
        Zip: 49242,
        density: 15280
      },
      {
        Zip: 48072,
        density: 15239
      },
      {
        Zip: 48302,
        density: 15203
      },
      {
        Zip: 48059,
        density: 15008
      },
      {
        Zip: 48025,
        density: 14762
      },
      {
        Zip: 48855,
        density: 14633
      },
      {
        Zip: 49286,
        density: 14622
      },
      {
        Zip: 48026,
        density: 14620
      },
      {
        Zip: 49068,
        density: 14584
      },
      {
        Zip: 48301,
        density: 14572
      },
      {
        Zip: 48451,
        density: 14378
      },
      {
        Zip: 48225,
        density: 14294
      },
      {
        Zip: 49721,
        density: 14291
      },
      {
        Zip: 49047,
        density: 14238
      },
      {
        Zip: 49660,
        density: 14166
      },
      {
        Zip: 48623,
        density: 14055
      },
      {
        Zip: 48201,
        density: 14045
      },
      {
        Zip: 48462,
        density: 13968
      },
      {
        Zip: 49090,
        density: 13898
      },
      {
        Zip: 49224,
        density: 13886
      },
      {
        Zip: 48189,
        density: 13865
      },
      {
        Zip: 48836,
        density: 13748
      },
      {
        Zip: 49345,
        density: 13505
      },
      {
        Zip: 48383,
        density: 13414
      },
      {
        Zip: 48160,
        density: 13375
      },
      {
        Zip: "48034 and 48604",
        density: 13348
      },
      {
        Zip: 48381,
        density: 13315
      },
      {
        Zip: 48625,
        density: 13163
      },
      {
        Zip: 48840,
        density: 13150
      },
      {
        Zip: 49079,
        density: 13127
      },
      {
        Zip: 48825,
        density: 12928
      },
      {
        Zip: 48801,
        density: 12836
      },
      {
        Zip: 48118,
        density: 12755
      },
      {
        Zip: 49849,
        density: 12734
      },
      {
        Zip: 48638,
        density: 12492
      },
      {
        Zip: 48173,
        density: 12481
      },
      {
        Zip: 48215,
        density: 12180
      },
      {
        Zip: 48723,
        density: 12155
      },
      {
        Zip: 49348,
        density: 12130
      },
      {
        Zip: 48079,
        density: 12122
      },
      {
        Zip: 48017,
        density: 11982
      },
      {
        Zip: 48360,
        density: 11847
      },
      {
        Zip: 48001,
        density: 11840
      },
      {
        Zip: 48609,
        density: 11821
      },
      {
        Zip: 49858,
        density: 11808
      },
      {
        Zip: 49801,
        density: 11583
      },
      {
        Zip: 48166,
        density: 11480
      },
      {
        Zip: 49337,
        density: 11442
      },
      {
        Zip: 48895,
        density: 11194
      },
      {
        Zip: 49103,
        density: 11189
      },
      {
        Zip: 48732,
        density: 11116
      },
      {
        Zip: 49127,
        density: 11092
      },
      {
        Zip: 49412,
        density: 11074
      },
      {
        Zip: 48065,
        density: 11041
      },
      {
        Zip: 49333,
        density: 10917
      },
      {
        Zip: 48809,
        density: 10861
      },
      {
        Zip: 49097,
        density: 10760
      },
      {
        Zip: "48875 and 48128",
        density: 10640
      },
      {
        Zip: 49457,
        density: 10619
      },
      {
        Zip: 49230,
        density: 10473
      },
      {
        Zip: 49007,
        density: 10441
      },
      {
        Zip: 48122,
        density: 10437
      },
      {
        Zip: 48661,
        density: 10359
      },
      {
        Zip: 49112,
        density: 10162
      },
      {
        Zip: 48138,
        density: 10161
      },
      {
        Zip: 49107,
        density: 10123
      },
      {
        Zip: 48529,
        density: 10117
      },
      {
        Zip: 49306,
        density: 10083
      },
      {
        Zip: 48880,
        density: 10059
      },
      {
        Zip: 48653,
        density: 9868
      },
      {
        Zip: 49323,
        density: 9853
      },
      {
        Zip: 48117,
        density: 9847
      },
      {
        Zip: 49931,
        density: 9820
      },
      {
        Zip: 49240,
        density: 9783
      },
      {
        Zip: 48040,
        density: 9775
      },
      {
        Zip: 48144,
        density: 9649
      },
      {
        Zip: 49071,
        density: 9632
      },
      {
        Zip: 49738,
        density: 9625
      },
      {
        Zip: 49837,
        density: 9590
      },
      {
        Zip: 49544,
        density: 9586
      },
      {
        Zip: 48915,
        density: 9580
      },
      {
        Zip: 48062,
        density: 9539
      },
      {
        Zip: 48768,
        density: 9490
      },
      {
        Zip: 49461,
        density: 9418
      },
      {
        Zip: 48229,
        density: 9388
      },
      {
        Zip: 48444,
        density: 9361
      },
      {
        Zip: 49408,
        density: 9337
      },
      {
        Zip: 48415,
        density: 9265
      },
      {
        Zip: 49038,
        density: 9193
      },
      {
        Zip: 48208,
        density: 9180
      },
      {
        Zip: 48074,
        density: 9179
      },
      {
        Zip: 49078,
        density: 9140
      },
      {
        Zip: 48359,
        density: 9128
      },
      {
        Zip: 49404,
        density: 9079
      },
      {
        Zip: 48612,
        density: 8927
      },
      {
        Zip: 49720,
        density: 8917
      },
      {
        Zip: 48509,
        density: 8858
      },
      {
        Zip: 48164,
        density: 8720
      },
      {
        Zip: 48746,
        density: 8701
      },
      {
        Zip: 49329,
        density: 8651
      },
      {
        Zip: 48356,
        density: 8585
      },
      {
        Zip: 48750,
        density: 8577
      },
      {
        Zip: 49327,
        density: 8518
      },
      {
        Zip: 48461,
        density: 8458
      },
      {
        Zip: 48455,
        density: 8442
      },
      {
        Zip: 48617,
        density: 8433
      },
      {
        Zip: 48357,
        density: 8414
      },
      {
        Zip: 49302,
        density: 8356
      },
      {
        Zip: 48429,
        density: 8322
      },
      {
        Zip: 48015,
        density: 8313
      },
      {
        Zip: 49646,
        density: 8290
      },
      {
        Zip: 48457,
        density: 8284
      },
      {
        Zip: 49460,
        density: 8161
      },
      {
        Zip: 49419,
        density: 8125
      },
      {
        Zip: 49349,
        density: 8098
      },
      {
        Zip: 49649,
        density: 8078
      },
      {
        Zip: 49712,
        density: 8055
      },
      {
        Zip: 49866,
        density: 8040
      },
      {
        Zip: 49651,
        density: 7790
      },
      {
        Zip: 48734,
        density: 7740
      },
      {
        Zip: 48657,
        density: 7735
      },
      {
        Zip: 49083,
        density: 7706
      },
      {
        Zip: 48039,
        density: 7667
      },
      {
        Zip: 48629,
        density: 7615
      },
      {
        Zip: 48218,
        density: 7609
      },
      {
        Zip: 49046,
        density: 7606
      },
      {
        Zip: 48158,
        density: 7562
      },
      {
        Zip: 49938,
        density: 7545
      },
      {
        Zip: 48120,
        density: 7516
      },
      {
        Zip: 48519,
        density: 7493
      },
      {
        Zip: 48848,
        density: 7479
      },
      {
        Zip: 49031,
        density: 7469
      },
      {
        Zip: 48350,
        density: 7420
      },
      {
        Zip: 48650,
        density: 7415
      },
      {
        Zip: 49727,
        density: 7397
      },
      {
        Zip: 48616,
        density: 7348
      },
      {
        Zip: 49841,
        density: 7331
      },
      {
        Zip: 48413,
        density: 7296
      },
      {
        Zip: 48872,
        density: 7256
      },
      {
        Zip: 48217,
        density: 7252
      },
      {
        Zip: 49913,
        density: 7222
      },
      {
        Zip: 48438,
        density: 7221
      },
      {
        Zip: 48883,
        density: 7214
      },
      {
        Zip: 49677,
        density: 7209
      },
      {
        Zip: 48054,
        density: 7205
      },
      {
        Zip: 48048,
        density: 7193
      },
      {
        Zip: 48380,
        density: 7175
      },
      {
        Zip: 49740,
        density: 7094
      },
      {
        Zip: 49053,
        density: 7073
      },
      {
        Zip: 49930,
        density: 7072
      },
      {
        Zip: 49057,
        density: 6982
      },
      {
        Zip: 49437,
        density: 6934
      },
      {
        Zip: 49690,
        density: 6931
      },
      {
        Zip: 49415,
        density: 6870
      },
      {
        Zip: 49659,
        density: 6838
      },
      {
        Zip: 48165,
        density: 6799
      },
      {
        Zip: 48131,
        density: 6733
      },
      {
        Zip: 48611,
        density: 6633
      },
      {
        Zip: 49420,
        density: 6592
      },
      {
        Zip: 48211,
        density: 6536
      },
      {
        Zip: 49021,
        density: 6514
      },
      {
        Zip: 49251,
        density: 6508
      },
      {
        Zip: 48622,
        density: 6469
      },
      {
        Zip: 49065,
        density: 6431
      },
      {
        Zip: 48422,
        density: 6427
      },
      {
        Zip: 49028,
        density: 6422
      },
      {
        Zip: "48226 and 49643",
        density: 6406
      },
      {
        Zip: 49269,
        density: 6397
      },
      {
        Zip: 48353,
        density: 6372
      },
      {
        Zip: 49087,
        density: 6363
      },
      {
        Zip: 48070,
        density: 6330
      },
      {
        Zip: 49788,
        density: 6298
      },
      {
        Zip: 48421,
        density: 6294
      },
      {
        Zip: 49854,
        density: 6264
      },
      {
        Zip: 48817,
        density: 6254
      },
      {
        Zip: 49082,
        density: 6192
      },
      {
        Zip: 49631,
        density: 6174
      },
      {
        Zip: 49055,
        density: 6172
      },
      {
        Zip: 49451,
        density: 6144
      },
      {
        Zip: 49663,
        density: 6134
      },
      {
        Zip: 49802,
        density: 6104
      },
      {
        Zip: 49098,
        density: 6093
      },
      {
        Zip: 48847,
        density: 6083
      },
      {
        Zip: 49343,
        density: 6079
      },
      {
        Zip: "48888 and 48003",
        density: 6035
      },
      {
        Zip: 48655,
        density: 6017
      },
      {
        Zip: 49935,
        density: 5979
      },
      {
        Zip: 48821,
        density: 5969
      },
      {
        Zip: 48849,
        density: 5952
      },
      {
        Zip: 48726,
        density: 5951
      },
      {
        Zip: 49250,
        density: 5946
      },
      {
        Zip: 49421,
        density: 5933
      },
      {
        Zip: 48133,
        density: 5860
      },
      {
        Zip: 48626,
        density: 5852
      },
      {
        Zip: 49285,
        density: 5797
      },
      {
        Zip: 48363,
        density: 5772
      },
      {
        Zip: 48881,
        density: 5733
      },
      {
        Zip: 49247,
        density: 5694
      },
      {
        Zip: 48412,
        density: 5637
      },
      {
        Zip: 49270,
        density: 5615
      },
      {
        Zip: 49099,
        density: 5606
      },
      {
        Zip: 48216,
        density: 5600
      },
      {
        Zip: 49013,
        density: 5560
      },
      {
        Zip: 48618,
        density: 5492
      },
      {
        Zip: 48049,
        density: 5480
      },
      {
        Zip: 48005,
        density: 5471
      },
      {
        Zip: 48109,
        density: 5435
      },
      {
        Zip: 49330,
        density: 5384
      },
      {
        Zip: 48811,
        density: 5376
      },
      {
        Zip: 49228,
        density: 5328
      },
      {
        Zip: 48095,
        density: 5327
      },
      {
        Zip: 48893,
        density: 5290
      },
      {
        Zip: 49868,
        density: 5279
      },
      {
        Zip: 48808,
        density: 5272
      },
      {
        Zip: 49045,
        density: 5253
      },
      {
        Zip: 48137,
        density: 5249
      },
      {
        Zip: 49346,
        density: 5228
      },
      {
        Zip: 49862,
        density: 5224
      },
      {
        Zip: "48471 and 48097",
        density: 5197
      },
      {
        Zip: 48763,
        density: 5185
      },
      {
        Zip: 49265,
        density: 5135
      },
      {
        Zip: 48023,
        density: 5083
      },
      {
        Zip: 48632,
        density: 5031
      },
      {
        Zip: 48428,
        density: 5029
      },
      {
        Zip: 48453,
        density: 5021
      },
      {
        Zip: 48658,
        density: 4969
      },
      {
        Zip: 48866,
        density: 4950
      },
      {
        Zip: 49245,
        density: 4945
      },
      {
        Zip: 48416,
        density: 4884
      },
      {
        Zip: 49454,
        density: 4882
      },
      {
        Zip: 48450,
        density: 4830
      },
      {
        Zip: 48892,
        density: 4799
      },
      {
        Zip: 49073,
        density: 4784
      },
      {
        Zip: 48651,
        density: 4736
      },
      {
        Zip: 48756,
        density: 4715
      },
      {
        Zip: 49042,
        density: 4710
      },
      {
        Zip: 49455,
        density: 4662
      },
      {
        Zip: 49236,
        density: 4634
      },
      {
        Zip: 48320,
        density: 4596
      },
      {
        Zip: 49779,
        density: 4553
      },
      {
        Zip: 48041,
        density: 4535
      },
      {
        Zip: 48463,
        density: 4498
      },
      {
        Zip: 49706,
        density: 4493
      },
      {
        Zip: 49106,
        density: 4471
      },
      {
        Zip: 49336,
        density: 4465
      },
      {
        Zip: 48631,
        density: 4456
      },
      {
        Zip: 49283,
        density: 4450
      },
      {
        Zip: 49076,
        density: 4433
      },
      {
        Zip: 48730,
        density: 4432
      },
      {
        Zip: 49067,
        density: 4406
      },
      {
        Zip: 48367,
        density: 4397
      },
      {
        Zip: 48850,
        density: 4371
      },
      {
        Zip: 49682,
        density: 4334
      },
      {
        Zip: 48647,
        density: 4327
      },
      {
        Zip: 48744,
        density: 4301
      },
      {
        Zip: 48884,
        density: 4289
      },
      {
        Zip: 49094,
        density: 4285
      },
      {
        Zip: 48634,
        density: 4255
      },
      {
        Zip: 49665,
        density: 4236
      },
      {
        Zip: 48014,
        density: 4224
      },
      {
        Zip: 49435,
        density: 4172
      },
      {
        Zip: 49920,
        density: 4139
      },
      {
        Zip: 49615,
        density: 4116
      },
      {
        Zip: 48191,
        density: 4093
      },
      {
        Zip: 48064,
        density: 4058
      },
      {
        Zip: 49256,
        density: 4047
      },
      {
        Zip: 48418,
        density: 4039
      },
      {
        Zip: 49326,
        density: 4032
      },
      {
        Zip: 49781,
        density: 4014
      },
      {
        Zip: 48063,
        density: 4006
      },
      {
        Zip: 48006,
        density: 3975
      },
      {
        Zip: 49328,
        density: 3970
      },
      {
        Zip: 49304,
        density: 3961
      },
      {
        Zip: 49267,
        density: 3957
      },
      {
        Zip: 48096,
        density: 3953
      },
      {
        Zip: 49749,
        density: 3947
      },
      {
        Zip: 48656,
        density: 3926
      },
      {
        Zip: 49249,
        density: 3884
      },
      {
        Zip: 48441,
        density: 3861
      },
      {
        Zip: "48739 and 48876",
        density: 3838
      },
      {
        Zip: "49117 and 49765",
        density: 3837
      },
      {
        Zip: 49946,
        density: 3822
      },
      {
        Zip: 49448,
        density: 3795
      },
      {
        Zip: 48179,
        density: 3763
      },
      {
        Zip: 49128,
        density: 3749
      },
      {
        Zip: 49425,
        density: 3737
      },
      {
        Zip: 49657,
        density: 3731
      },
      {
        Zip: 49908,
        density: 3725
      },
      {
        Zip: 49633,
        density: 3717
      },
      {
        Zip: 48831,
        density: 3686
      },
      {
        Zip: 48757,
        density: 3664
      },
      {
        Zip: 49344,
        density: 3662
      },
      {
        Zip: 49676,
        density: 3659
      },
      {
        Zip: 49709,
        density: 3649
      },
      {
        Zip: "49635 and 49064",
        density: 3623
      },
      {
        Zip: 49450,
        density: 3609
      },
      {
        Zip: 48436,
        density: 3596
      },
      {
        Zip: 49878,
        density: 3584
      },
      {
        Zip: 49668,
        density: 3581
      },
      {
        Zip: 49274,
        density: 3572
      },
      {
        Zip: 49310,
        density: 3570
      },
      {
        Zip: 49746,
        density: 3519
      },
      {
        Zip: 49111,
        density: 3462
      },
      {
        Zip: 49056,
        density: 3449
      },
      {
        Zip: 49756,
        density: 3433
      },
      {
        Zip: 48140,
        density: 3425
      },
      {
        Zip: 48145,
        density: 3385
      },
      {
        Zip: 49229,
        density: 3359
      },
      {
        Zip: 49096,
        density: 3357
      },
      {
        Zip: 49072,
        density: 3351
      },
      {
        Zip: 48637,
        density: 3326
      },
      {
        Zip: 49088,
        density: 3313
      },
      {
        Zip: 49870,
        density: 3292
      },
      {
        Zip: 49246,
        density: 3267
      },
      {
        Zip: 49032,
        density: 3263
      },
      {
        Zip: "49637 and 49650",
        density: 3256
      },
      {
        Zip: 49012,
        density: 3246
      },
      {
        Zip: 49621,
        density: 3241
      },
      {
        Zip: 48002,
        density: 3236
      },
      {
        Zip: 48755,
        density: 3230
      },
      {
        Zip: 48722,
        density: 3217
      },
      {
        Zip: 49617,
        density: 3203
      },
      {
        Zip: 49715,
        density: 3202
      },
      {
        Zip: 48027,
        density: 3201
      },
      {
        Zip: 49332,
        density: 3165
      },
      {
        Zip: 48759,
        density: 3163
      },
      {
        Zip: 49807,
        density: 3141
      },
      {
        Zip: 49040,
        density: 3137
      },
      {
        Zip: 49266,
        density: 3120
      },
      {
        Zip: 49916,
        density: 3105
      },
      {
        Zip: 49277,
        density: 3103
      },
      {
        Zip: 49655,
        density: 3077
      },
      {
        Zip: 48703,
        density: 3063
      },
      {
        Zip: 48829,
        density: 3034
      },
      {
        Zip: 49101,
        density: 3008
      },
      {
        Zip: 48822,
        density: 2990
      },
      {
        Zip: 49237,
        density: 2964
      },
      {
        Zip: 49340,
        density: 2963
      },
      {
        Zip: 49253,
        density: 2962
      },
      {
        Zip: 49284,
        density: 2956
      },
      {
        Zip: 48891,
        density: 2928
      },
      {
        Zip: 48835,
        density: 2906
      },
      {
        Zip: 48659,
        density: 2875
      },
      {
        Zip: 48610,
        density: 2873
      },
      {
        Zip: 48615,
        density: 2844
      },
      {
        Zip: 48414,
        density: 2841
      },
      {
        Zip: 48449,
        density: 2811
      },
      {
        Zip: 48857,
        density: 2806
      },
      {
        Zip: 48427,
        density: 2797
      },
      {
        Zip: 49911,
        density: 2795
      },
      {
        Zip: "49051 48417 and 49234",
        density: 2755
      },
      {
        Zip: 49614,
        density: 2753
      },
      {
        Zip: 48819,
        density: 2718
      },
      {
        Zip: 49254,
        density: 2698
      },
      {
        Zip: 49030,
        density: 2693
      },
      {
        Zip: 49953,
        density: 2692
      },
      {
        Zip: 49620,
        density: 2684
      },
      {
        Zip: 49453,
        density: 2651
      },
      {
        Zip: 49945,
        density: 2639
      },
      {
        Zip: 49688,
        density: 2609
      },
      {
        Zip: 48022,
        density: 2605
      },
      {
        Zip: 49034,
        density: 2596
      },
      {
        Zip: 49887,
        density: 2594
      },
      {
        Zip: 48069,
        density: 2562
      },
      {
        Zip: 49232,
        density: 2553
      },
      {
        Zip: 48877,
        density: 2508
      },
      {
        Zip: 49446,
        density: 2507
      },
      {
        Zip: 48159,
        density: 2505
      },
      {
        Zip: 48818,
        density: 2503
      },
      {
        Zip: 49043,
        density: 2501
      },
      {
        Zip: "49241 and 49252",
        density: 2472
      },
      {
        Zip: 48475,
        density: 2470
      },
      {
        Zip: 49622,
        density: 2443
      },
      {
        Zip: 49403,
        density: 2424
      },
      {
        Zip: 49070,
        density: 2405
      },
      {
        Zip: 49449,
        density: 2404
      },
      {
        Zip: 48933,
        density: 2392
      },
      {
        Zip: 49026,
        density: 2364
      },
      {
        Zip: 48419,
        density: 2360
      },
      {
        Zip: 49733,
        density: 2354
      },
      {
        Zip: 49799,
        density: 2309
      },
      {
        Zip: 48467,
        density: 2306
      },
      {
        Zip: 49885,
        density: 2302
      },
      {
        Zip: 48460,
        density: 2292
      },
      {
        Zip: 49255,
        density: 2282
      },
      {
        Zip: 49264,
        density: 2281
      },
      {
        Zip: 48740,
        density: 2274
      },
      {
        Zip: 49616,
        density: 2263
      },
      {
        Zip: "48654 and 48851",
        density: 2260
      },
      {
        Zip: 49235,
        density: 2232
      },
      {
        Zip: 48815,
        density: 2221
      },
      {
        Zip: 49766,
        density: 2212
      },
      {
        Zip: "49639 and 48725",
        density: 2203
      },
      {
        Zip: 48032,
        density: 2196
      },
      {
        Zip: 49233,
        density: 2189
      },
      {
        Zip: 48628,
        density: 2177
      },
      {
        Zip: 49011,
        density: 2172
      },
      {
        Zip: 49339,
        density: 2159
      },
      {
        Zip: 49220,
        density: 2154
      },
      {
        Zip: 49648,
        density: 2153
      },
      {
        Zip: 49683,
        density: 2144
      },
      {
        Zip: 49095,
        density: 2136
      },
      {
        Zip: 48370,
        density: 2130
      },
      {
        Zip: 48464,
        density: 2128
      },
      {
        Zip: 49670,
        density: 2127
      },
      {
        Zip: 49305,
        density: 2125
      },
      {
        Zip: 49272,
        density: 2124
      },
      {
        Zip: 49968,
        density: 2120
      },
      {
        Zip: 49795,
        density: 2119
      },
      {
        Zip: 49629,
        density: 2104
      },
      {
        Zip: 48050,
        density: 2068
      },
      {
        Zip: 49751,
        density: 2066
      },
      {
        Zip: 48886,
        density: 2061
      },
      {
        Zip: 48871,
        density: 2054
      },
      {
        Zip: 48435,
        density: 2051
      },
      {
        Zip: 49342,
        density: 2043
      },
      {
        Zip: 49259,
        density: 2037
      },
      {
        Zip: 49092,
        density: 2033
      },
      {
        Zip: 48834,
        density: 2032
      },
      {
        Zip: 49452,
        density: 2026
      },
      {
        Zip: 49774,
        density: 2012
      },
      {
        Zip: 49730,
        density: 2010
      },
      {
        Zip: 49644,
        density: 2008
      },
      {
        Zip: 48741,
        density: 2005
      },
      {
        Zip: 48890,
        density: 1999
      },
      {
        Zip: 49905,
        density: 1987
      },
      {
        Zip: 49755,
        density: 1978
      },
      {
        Zip: 48865,
        density: 1961
      },
      {
        Zip: 48472,
        density: 1960
      },
      {
        Zip: 49410,
        density: 1954
      },
      {
        Zip: 49747,
        density: 1946
      },
      {
        Zip: 49664,
        density: 1937
      },
      {
        Zip: 48894,
        density: 1932
      },
      {
        Zip: 49892,
        density: 1930
      },
      {
        Zip: 49271,
        density: 1928
      },
      {
        Zip: 48767,
        density: 1925
      },
      {
        Zip: 49713,
        density: 1923
      },
      {
        Zip: 48770,
        density: 1893
      },
      {
        Zip: 49753,
        density: 1890
      },
      {
        Zip: 49287,
        density: 1879
      },
      {
        Zip: 49125,
        density: 1877
      },
      {
        Zip: 49325,
        density: 1810
      },
      {
        Zip: 49238,
        density: 1805
      },
      {
        Zip: 49060,
        density: 1800
      },
      {
        Zip: 49653,
        density: 1797
      },
      {
        Zip: 49780,
        density: 1781
      },
      {
        Zip: "49776 and 49113",
        density: 1772
      },
      {
        Zip: 48748,
        density: 1767
      },
      {
        Zip: 49130,
        density: 1765
      },
      {
        Zip: 49777,
        density: 1744
      },
      {
        Zip: 49680,
        density: 1739
      },
      {
        Zip: 49893,
        density: 1728
      },
      {
        Zip: 49947,
        density: 1717
      },
      {
        Zip: 48742,
        density: 1681
      },
      {
        Zip: 48652,
        density: 1676
      },
      {
        Zip: 48731,
        density: 1674
      },
      {
        Zip: 49061,
        density: 1661
      },
      {
        Zip: 49769,
        density: 1657
      },
      {
        Zip: 48733,
        density: 1648
      },
      {
        Zip: 49322,
        density: 1635
      },
      {
        Zip: 48466,
        density: 1632
      },
      {
        Zip: 48662,
        density: 1629
      },
      {
        Zip: 48401,
        density: 1628
      },
      {
        Zip: 49656,
        density: 1608
      },
      {
        Zip: 49896,
        density: 1591
      },
      {
        Zip: 49309,
        density: 1588
      },
      {
        Zip: 49338,
        density: 1587
      },
      {
        Zip: 48729,
        density: 1580
      },
      {
        Zip: 48878,
        density: 1579
      },
      {
        Zip: 49089,
        density: 1578
      },
      {
        Zip: 49436,
        density: 1574
      },
      {
        Zip: 48635,
        density: 1563
      },
      {
        Zip: 48861,
        density: 1558
      },
      {
        Zip: 49102,
        density: 1553
      },
      {
        Zip: 49759,
        density: 1541
      },
      {
        Zip: 49411,
        density: 1536
      },
      {
        Zip: 49029,
        density: 1535
      },
      {
        Zip: 48873,
        density: 1526
      },
      {
        Zip: 49288,
        density: 1520
      },
      {
        Zip: 48614,
        density: 1511
      },
      {
        Zip: 48860,
        density: 1507
      },
      {
        Zip: 48806,
        density: 1502
      },
      {
        Zip: 48897,
        density: 1487
      },
      {
        Zip: 49318,
        density: 1485
      },
      {
        Zip: 49689,
        density: 1482
      },
      {
        Zip: 49729,
        density: 1461
      },
      {
        Zip: "49645 and 49050",
        density: 1457
      },
      {
        Zip: 49033,
        density: 1452
      },
      {
        Zip: 48760,
        density: 1441
      },
      {
        Zip: 48701,
        density: 1431
      },
      {
        Zip: 49630,
        density: 1430
      },
      {
        Zip: 48649,
        density: 1413
      },
      {
        Zip: 49405,
        density: 1408
      },
      {
        Zip: 48832,
        density: 1398
      },
      {
        Zip: 48445,
        density: 1397
      },
      {
        Zip: 48157,
        density: 1395
      },
      {
        Zip: 48747,
        density: 1365
      },
      {
        Zip: 49814,
        density: 1356
      },
      {
        Zip: 49640,
        density: 1355
      },
      {
        Zip: 49347,
        density: 1343
      },
      {
        Zip: 48766,
        density: 1324
      },
      {
        Zip: 49719,
        density: 1320
      },
      {
        Zip: 49950,
        density: 1315
      },
      {
        Zip: 48727,
        density: 1314
      },
      {
        Zip: 49262,
        density: 1313
      },
      {
        Zip: 49679,
        density: 1294
      },
      {
        Zip: 48621,
        density: 1285
      },
      {
        Zip: 48889,
        density: 1278
      },
      {
        Zip: 49853,
        density: 1273
      },
      {
        Zip: 49625,
        density: 1260
      },
      {
        Zip: 49969,
        density: 1248
      },
      {
        Zip: "48745 and 49632",
        density: 1246
      },
      {
        Zip: "48607 and 49402",
        density: 1236
      },
      {
        Zip: 49227,
        density: 1235
      },
      {
        Zip: 49459,
        density: 1226
      },
      {
        Zip: 48737,
        density: 1224
      },
      {
        Zip: 48454,
        density: 1216
      },
      {
        Zip: 49821,
        density: 1207
      },
      {
        Zip: 48738,
        density: 1203
      },
      {
        Zip: 48468,
        density: 1189
      },
      {
        Zip: 48762,
        density: 1179
      },
      {
        Zip: 49724,
        density: 1166
      },
      {
        Zip: 49619,
        density: 1156
      },
      {
        Zip: 48469,
        density: 1144
      },
      {
        Zip: 48502,
        density: 1142
      },
      {
        Zip: 49126,
        density: 1141
      },
      {
        Zip: 49726,
        density: 1120
      },
      {
        Zip: "49612 and 49303",
        density: 1114
      },
      {
        Zip: 54554,
        density: 1108
      },
      {
        Zip: 49623,
        density: 1099
      },
      {
        Zip: 48613,
        density: 1096
      },
      {
        Zip: 48028,
        density: 1081
      },
      {
        Zip: 49880,
        density: 1073
      },
      {
        Zip: 49874,
        density: 1046
      },
      {
        Zip: 48845,
        density: 1040
      },
      {
        Zip: 49675,
        density: 1035
      },
      {
        Zip: 49876,
        density: 1034
      },
      {
        Zip: 49745,
        density: 1016
      },
      {
        Zip: 49847,
        density: 986
      },
      {
        Zip: 48754,
        density: 985
      },
      {
        Zip: "49744 and 48720",
        density: 980
      },
      {
        Zip: 49268,
        density: 963
      },
      {
        Zip: 49638,
        density: 962
      },
      {
        Zip: 48426,
        density: 957
      },
      {
        Zip: 49812,
        density: 954
      },
      {
        Zip: 49276,
        density: 947
      },
      {
        Zip: 49827,
        density: 940
      },
      {
        Zip: 49934,
        density: 937
      },
      {
        Zip: 54540,
        density: 923
      },
      {
        Zip: 48761,
        density: 920
      },
      {
        Zip: 49818,
        density: 917
      },
      {
        Zip: 48749,
        density: 911
      },
      {
        Zip: 49912,
        density: 908
      },
      {
        Zip: 48885,
        density: 902
      },
      {
        Zip: 48735,
        density: 893
      },
      {
        Zip: 49052,
        density: 890
      },
      {
        Zip: 49836,
        density: 883
      },
      {
        Zip: 49835,
        density: 877
      },
      {
        Zip: 49406,
        density: 869
      },
      {
        Zip: 49701,
        density: 865
      },
      {
        Zip: 49104,
        density: 863
      },
      {
        Zip: 49705,
        density: 861
      },
      {
        Zip: 49716,
        density: 857
      },
      {
        Zip: 49963,
        density: 851
      },
      {
        Zip: 49958,
        density: 842
      },
      {
        Zip: 48856,
        density: 838
      },
      {
        Zip: 49743,
        density: 837
      },
      {
        Zip: "48841 and 49879",
        density: 830
      },
      {
        Zip: 49831,
        density: 810
      },
      {
        Zip: 48470,
        density: 809
      },
      {
        Zip: 49440,
        density: 807
      },
      {
        Zip: 49752,
        density: 794
      },
      {
        Zip: 49248,
        density: 791
      },
      {
        Zip: 48456,
        density: 786
      },
      {
        Zip: 49279,
        density: 770
      },
      {
        Zip: "49642 and 48807",
        density: 768
      },
      {
        Zip: 48636,
        density: 766
      },
      {
        Zip: 49757,
        density: 763
      },
      {
        Zip: 49618,
        density: 758
      },
      {
        Zip: 49718,
        density: 741
      },
      {
        Zip: 48765,
        density: 739
      },
      {
        Zip: 48853,
        density: 737
      },
      {
        Zip: 49891,
        density: 715
      },
      {
        Zip: 49613,
        density: 703
      },
      {
        Zip: 49840,
        density: 692
      },
      {
        Zip: 48465,
        density: 690
      },
      {
        Zip: 48432,
        density: 668
      },
      {
        Zip: 49066,
        density: 665
      },
      {
        Zip: 49760,
        density: 656
      },
      {
        Zip: 49922,
        density: 654
      },
      {
        Zip: 49725,
        density: 637
      },
      {
        Zip: 49886,
        density: 635
      },
      {
        Zip: 49894,
        density: 621
      },
      {
        Zip: 48437,
        density: 617
      },
      {
        Zip: "49895 and 49129",
        density: 616
      },
      {
        Zip: 49816,
        density: 602
      },
      {
        Zip: 49782,
        density: 584
      },
      {
        Zip: 49817,
        density: 578
      },
      {
        Zip: 49654,
        density: 576
      },
      {
        Zip: 48476,
        density: 562
      },
      {
        Zip: "49838 and 49710",
        density: 556
      },
      {
        Zip: 49806,
        density: 549
      },
      {
        Zip: 49762,
        density: 545
      },
      {
        Zip: 49955,
        density: 541
      },
      {
        Zip: "48619 and 49967",
        density: 515
      },
      {
        Zip: 49965,
        density: 508
      },
      {
        Zip: 49335,
        density: 500
      },
      {
        Zip: 49736,
        density: 497
      },
      {
        Zip: 49948,
        density: 491
      },
      {
        Zip: 49861,
        density: 490
      },
      {
        Zip: 48705,
        density: 489
      },
      {
        Zip: 49871,
        density: 484
      },
      {
        Zip: 49667,
        density: 471
      },
      {
        Zip: 49915,
        density: 468
      },
      {
        Zip: 49925,
        density: 462
      },
      {
        Zip: 49927,
        density: 461
      },
      {
        Zip: 49971,
        density: 452
      },
      {
        Zip: 49115,
        density: 443
      },
      {
        Zip: 48721,
        density: 429
      },
      {
        Zip: 49815,
        density: 426
      },
      {
        Zip: 49636,
        density: 403
      },
      {
        Zip: 49839,
        density: 380
      },
      {
        Zip: 49884,
        density: 376
      },
      {
        Zip: 49282,
        density: 373
      },
      {
        Zip: 49261,
        density: 370
      },
      {
        Zip: 49626,
        density: 362
      },
      {
        Zip: 49768,
        density: 357
      },
      {
        Zip: 49881,
        density: 345
      },
      {
        Zip: 49901,
        density: 341
      },
      {
        Zip: 48728,
        density: 336
      },
      {
        Zip: 49796,
        density: 335
      },
      {
        Zip: 49791,
        density: 331
      },
      {
        Zip: 49959,
        density: 325
      },
      {
        Zip: 49910,
        density: 295
      },
      {
        Zip: "48440 and 49822",
        density: 290
      },
      {
        Zip: "49833 and 49312",
        density: 289
      },
      {
        Zip: 49921,
        density: 286
      },
      {
        Zip: "49793 and 49834",
        density: 281
      },
      {
        Zip: 49722,
        density: 278
      },
      {
        Zip: 48177,
        density: 271
      },
      {
        Zip: 49116,
        density: 269
      },
      {
        Zip: 49611,
        density: 260
      },
      {
        Zip: 49917,
        density: 255
      },
      {
        Zip: 49728,
        density: 250
      },
      {
        Zip: 49919,
        density: 231
      },
      {
        Zip: 49970,
        density: 229
      },
      {
        Zip: 48896,
        density: 226
      },
      {
        Zip: 49808,
        density: 217
      },
      {
        Zip: 48724,
        density: 214
      },
      {
        Zip: 49825,
        density: 206
      },
      {
        Zip: 49764,
        density: 202
      },
      {
        Zip: 49717,
        density: 198
      },
      {
        Zip: 49826,
        density: 191
      },
      {
        Zip: 49820,
        density: 190
      },
      {
        Zip: "49627 and 48870",
        density: 186
      },
      {
        Zip: 49872,
        density: 181
      },
      {
        Zip: 49960,
        density: 179
      },
      {
        Zip: 49805,
        density: 178
      },
      {
        Zip: "49902 and 49074",
        density: 175
      },
      {
        Zip: 49748,
        density: 174
      },
      {
        Zip: 49289,
        density: 173
      },
      {
        Zip: 49119,
        density: 169
      },
      {
        Zip: 49929,
        density: 167
      },
      {
        Zip: 49863,
        density: 165
      },
      {
        Zip: 49628,
        density: 163
      },
      {
        Zip: 49962,
        density: 160
      },
      {
        Zip: 48633,
        density: 159
      },
      {
        Zip: 49634,
        density: 157
      },
      {
        Zip: 49027,
        density: 148
      },
      {
        Zip: 48139,
        density: 140
      },
      {
        Zip: "48627 and 49883",
        density: 134
      },
      {
        Zip: 48852,
        density: 128
      },
      {
        Zip: 49903,
        density: 123
      },
      {
        Zip: 49852,
        density: 119
      },
      {
        Zip: 48874,
        density: 118
      },
      {
        Zip: 49873,
        density: 117
      },
      {
        Zip: 49075,
        density: 114
      },
      {
        Zip: 49918,
        density: 104
      },
      {
        Zip: 49848,
        density: 99
      },
      {
        Zip: 49961,
        density: 96
      },
      {
        Zip: "48816 and 48411",
        density: 90
      },
      {
        Zip: 49952,
        density: 89
      },
      {
        Zip: 49864,
        density: 88
      },
      {
        Zip: 48743,
        density: 83
      },
      {
        Zip: 49320,
        density: 79
      },
      {
        Zip: 49775,
        density: 76
      },
      {
        Zip: "48190 and 49674",
        density: 72
      },
      {
        Zip: 49942,
        density: 68
      },
      {
        Zip: 48434,
        density: 65
      },
      {
        Zip: 49458,
        density: 54
      },
      {
        Zip: "49263 and 49084",
        density: 39
      },
      {
        Zip: 48630,
        density: 37
      },
      {
        Zip: 49877,
        density: 36
      },
      {
        Zip: 49819,
        density: 20
      },
      {
        Zip: 49434,
        density: 14
      }
    ];
    /* let state = michigan.features;
    for (let i in state) {
      const p = countyPop
        .filter(item => String(item.Zip) === state[i].properties.ZCTA5CE10)
        .map(item => item.density);
      const pop = p[0]; // != undefined
      //? this.convertToNum(p[0])
      //: 0;
      state[i].properties.density = pop;
      updateState.push(state[i]);
    }*/
    this.updatedStateFeatures(countyPop);
    this.infoControl();
    //$(".state").css("display", "none")
    this.displayLegend("county");
    /*})
      .catch(error => console.error("Error:", error));*/
  }
  convertToNum(str) {
    if (typeof str === "number") {
      return str;
    }
    var n = str.split(",").map(Number);
    return parseInt(n.reduce((a, b) => a + b, ""));
  }
  updatedStateFeatures(data) {
    console.log(data);
    L.geoJSON(data, {
      onEachFeature: (feature, layer) =>
        this.onEachStateFeature(feature, layer),
      style: feature => this.style(feature, "county")
    }).addTo(this.refs.map.leafletElement);
    this.addTileLayer();
  }
  markerIcon(content, latlng) {
    return L.divIcon({ className: "my-div-icon", html: String(content) });
  }
  localFunc() {
    console.log("POP");
  }
  popContent(props) {
    const { properties } = props;
    const t = modalContent => {
      this.props.handleShow(modalContent);
    };
    L.thorsten = {};
    L.thorsten.t = t;
    const htmlStr = `<div class="container">
                        <div class="row pop-pad">
                            <h4>${properties.name}</h4>
                            <div class="pop-address">${properties.street}</div>
                            <div class="pop-address">${properties.city}, ${properties.state}, ${properties.zip}</div>
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

  zoomToFeature(feature, layer) {
    this.refs.map.leafletElement.fitBounds(layer.getBounds());
    this.refs.map.leafletElement.eachLayer(layer => {
      this.refs.map.leafletElement.removeLayer(layer);
    });
    //console.log(feature)
    if (this.state.defaultView === "state") {
      this.addPointers();
      this.setState({ defaultView: "county" });
    }
    if (this.state.defaultView === "country") {
      this.addStateMap(feature.properties.name);
      this.setState({ defaultView: "state" });
    }
    info.update(feature, "county");
  }
  onEachFeature(feature, layer) {
    if (feature.properties.density != 0) {
      layer.on({
        mouseover: this.highlightFeature.bind(this, feature, layer, "state"),
        mouseout: this.resetHighlight.bind(this, feature, layer, "state"),
        click: this.zoomToFeature.bind(this, feature, layer, "state")
      });
    }
  }
  onEachStateFeature(feature, layer) {
    if (feature.properties.density != 0) {
      layer.on({
        mouseover: this.highlightFeature.bind(this, feature, layer, "county"),
        mouseout: this.resetHighlight.bind(this, feature, layer, "county")
      });
    }
  }
  addTileLayer() {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      this.refs.map.leafletElement
    );
  }
  buildCrumbs() {
    let crumbList = "";
    this.state.crumbs.forEach((item, index) => {
      if (index > 0) {
        crumbList += ` > ${item}`;
      } else {
        crumbList += item;
      }
    });
    this.props.breadCrumbs(crumbList);
  }
  infoControl() {
    info.onAdd = function() {
      this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
      this.update();
      return this._div;
    };

    const v = this.state.defaultView;
    // method that we will use to update the control based on feature properties
    // passed
    info.update = function(props, area = "state") {
      console.log(props);
      let header =
        area === "state" && v === "country"
          ? "<h4>Michigan Population Data by Zip Code</h4>"
          : "<h4>Michigan Population Data by Zip Code</h4>";
      this._div.innerHTML =
        header +
        (props
          ? "<b>" +
            props.ZCTA5CE10 +
            "</b><br />" +
            props.density +
            " population"
          : `Hover over a Zip code area`);
    };

    info.addTo(this.refs.map.leafletElement);
  }
  displayReset(area = "state") {
    var legend = L.control({ position: "topright" });
    var div = L.DomUtil.create("div", "reset_ntm");
    div.innerHTML += "<button>Reset </button>";
    return div;
  }
  displayLegend(area) {
    const times = area != "state" ? 15 : 1;
    const cls = "info legend " + area;
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      var div = L.DomUtil.create("div", cls),
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
        div.innerHTML +=
          '<i style="background:' +
          this.getColor(grades[i] + 1, area) +
          '"></i> ' +
          grades[i] +
          (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
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
          <Map center={position} zoom={this.state.zoom} ref="map" />
        </div>
      </React.Fragment>
    );
  }
}
