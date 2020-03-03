import React from "react";
import AppChart from "../components/AppChart";
import { groupBy } from "lodash";
class HospModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      pedData: [],
      chartData: [],
      seasons: [],
      value: "season",
      lines: [
        {
          name: "AGE 0-4",
          dp: "AGE 0-4"
        },
        {
          name: "AGE 5-24",
          dp: "AGE 5-24"
        },
        {
          name: "AGE 25-49",
          dp: "AGE 25-49"
        },
        {
          name: "AGE 25-64",
          dp: "AGE 25-64"
        },
        {
          name: "AGE 50-64",
          dp: "AGE 50-64"
        },
        {
          name: "AGE 65",
          dp: "AGE 65"
        }
      ]
    };
  }

  componentDidMount() {
    /*const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/hospitalizations`)
            .then(res => res.json())
            .then(res => {*/
    let res = [
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 1,
        "AGE 0-4": 9410,
        "AGE 25-49": 13383,
        "AGE 25-64": "X",
        "AGE 5-24": 11717,
        "AGE 50-64": 6871,
        "AGE 65": 5888,
        ILITOTAL: 47269
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 2,
        "AGE 0-4": 10053,
        "AGE 25-49": 15380,
        "AGE 25-64": "X",
        "AGE 5-24": 17357,
        "AGE 50-64": 7772,
        "AGE 65": 6199,
        ILITOTAL: 56761
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 3,
        "AGE 0-4": 11997,
        "AGE 25-49": 16012,
        "AGE 25-64": "X",
        "AGE 5-24": 21897,
        "AGE 50-64": 7569,
        "AGE 65": 5561,
        ILITOTAL: 63036
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 4,
        "AGE 0-4": 13408,
        "AGE 25-49": 18317,
        "AGE 25-64": "X",
        "AGE 5-24": 30625,
        "AGE 50-64": 8911,
        "AGE 65": 6065,
        ILITOTAL: 77326
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 5,
        "AGE 0-4": 14844,
        "AGE 25-49": 19086,
        "AGE 25-64": "X",
        "AGE 5-24": 37200,
        "AGE 50-64": 8915,
        "AGE 65": 5940,
        ILITOTAL: 85985
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 6,
        "AGE 0-4": 15192,
        "AGE 25-49": 19527,
        "AGE 25-64": "X",
        "AGE 5-24": 38606,
        "AGE 50-64": 8626,
        "AGE 65": 5874,
        ILITOTAL: 87825
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 7,
        "AGE 0-4": 13365,
        "AGE 25-49": 17203,
        "AGE 25-64": "X",
        "AGE 5-24": 32124,
        "AGE 50-64": 8079,
        "AGE 65": 5439,
        ILITOTAL: 76210
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 8,
        "AGE 0-4": 10154,
        "AGE 25-49": 12437,
        "AGE 25-64": "X",
        "AGE 5-24": 20450,
        "AGE 50-64": 5805,
        "AGE 65": 4179,
        ILITOTAL: 53025
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 9,
        "AGE 0-4": 7208,
        "AGE 25-49": 8485,
        "AGE 25-64": "X",
        "AGE 5-24": 13392,
        "AGE 50-64": 4104,
        "AGE 65": 2875,
        ILITOTAL: 36064
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 10,
        "AGE 0-4": 6368,
        "AGE 25-49": 6485,
        "AGE 25-64": "X",
        "AGE 5-24": 10850,
        "AGE 50-64": 3138,
        "AGE 65": 2292,
        ILITOTAL: 29133
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 11,
        "AGE 0-4": 5588,
        "AGE 25-49": 5928,
        "AGE 25-64": "X",
        "AGE 5-24": 9468,
        "AGE 50-64": 2822,
        "AGE 65": 2132,
        ILITOTAL: 25938
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 12,
        "AGE 0-4": 5223,
        "AGE 25-49": 5408,
        "AGE 25-64": "X",
        "AGE 5-24": 8640,
        "AGE 50-64": 2563,
        "AGE 65": 1971,
        ILITOTAL: 23805
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 13,
        "AGE 0-4": 4721,
        "AGE 25-49": 4720,
        "AGE 25-64": "X",
        "AGE 5-24": 7214,
        "AGE 50-64": 2295,
        "AGE 65": 1743,
        ILITOTAL: 20693
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 14,
        "AGE 0-4": 4553,
        "AGE 25-49": 4459,
        "AGE 25-64": "X",
        "AGE 5-24": 6218,
        "AGE 50-64": 2153,
        "AGE 65": 1691,
        ILITOTAL: 19074
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 15,
        "AGE 0-4": 4145,
        "AGE 25-49": 3749,
        "AGE 25-64": "X",
        "AGE 5-24": 5505,
        "AGE 50-64": 1818,
        "AGE 65": 1447,
        ILITOTAL: 16664
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 16,
        "AGE 0-4": 3856,
        "AGE 25-49": 3214,
        "AGE 25-64": "X",
        "AGE 5-24": 5269,
        "AGE 50-64": 1427,
        "AGE 65": 1103,
        ILITOTAL: 14869
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 17,
        "AGE 0-4": 3723,
        "AGE 25-49": 3026,
        "AGE 25-64": "X",
        "AGE 5-24": 5336,
        "AGE 50-64": 1371,
        "AGE 65": 1096,
        ILITOTAL: 14552
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 18,
        "AGE 0-4": 3658,
        "AGE 25-49": 2604,
        "AGE 25-64": "X",
        "AGE 5-24": 4815,
        "AGE 50-64": 1217,
        "AGE 65": 997,
        ILITOTAL: 13291
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 19,
        "AGE 0-4": 3444,
        "AGE 25-49": 2205,
        "AGE 25-64": "X",
        "AGE 5-24": 4133,
        "AGE 50-64": 935,
        "AGE 65": 902,
        ILITOTAL: 11619
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 20,
        "AGE 0-4": 3359,
        "AGE 25-49": 2239,
        "AGE 25-64": "X",
        "AGE 5-24": 3764,
        "AGE 50-64": 905,
        "AGE 65": 799,
        ILITOTAL: 11066
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 21,
        "AGE 0-4": 3385,
        "AGE 25-49": 2082,
        "AGE 25-64": "X",
        "AGE 5-24": 3429,
        "AGE 50-64": 884,
        "AGE 65": 866,
        ILITOTAL: 10646
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 22,
        "AGE 0-4": 3220,
        "AGE 25-49": 1822,
        "AGE 25-64": "X",
        "AGE 5-24": 2987,
        "AGE 50-64": 846,
        "AGE 65": 733,
        ILITOTAL: 9608
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 23,
        "AGE 0-4": 2847,
        "AGE 25-49": 1838,
        "AGE 25-64": "X",
        "AGE 5-24": 2552,
        "AGE 50-64": 802,
        "AGE 65": 654,
        ILITOTAL: 8693
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 24,
        "AGE 0-4": 2375,
        "AGE 25-49": 1596,
        "AGE 25-64": "X",
        "AGE 5-24": 2245,
        "AGE 50-64": 699,
        "AGE 65": 658,
        ILITOTAL: 7573
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 25,
        "AGE 0-4": 2312,
        "AGE 25-49": 1554,
        "AGE 25-64": "X",
        "AGE 5-24": 2162,
        "AGE 50-64": 729,
        "AGE 65": 616,
        ILITOTAL: 7373
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 26,
        "AGE 0-4": 2206,
        "AGE 25-49": 1530,
        "AGE 25-64": "X",
        "AGE 5-24": 1916,
        "AGE 50-64": 669,
        "AGE 65": 626,
        ILITOTAL: 6947
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 27,
        "AGE 0-4": 2009,
        "AGE 25-49": 1299,
        "AGE 25-64": "X",
        "AGE 5-24": 1862,
        "AGE 50-64": 539,
        "AGE 65": 549,
        ILITOTAL: 6258
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 28,
        "AGE 0-4": 1943,
        "AGE 25-49": 1443,
        "AGE 25-64": "X",
        "AGE 5-24": 1901,
        "AGE 50-64": 627,
        "AGE 65": 587,
        ILITOTAL: 6501
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 29,
        "AGE 0-4": 1741,
        "AGE 25-49": 1290,
        "AGE 25-64": "X",
        "AGE 5-24": 1720,
        "AGE 50-64": 566,
        "AGE 65": 469,
        ILITOTAL: 5786
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 30,
        "AGE 0-4": 1665,
        "AGE 25-49": 1202,
        "AGE 25-64": "X",
        "AGE 5-24": 1643,
        "AGE 50-64": 524,
        "AGE 65": 463,
        ILITOTAL: 5497
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 31,
        "AGE 0-4": 1618,
        "AGE 25-49": 1246,
        "AGE 25-64": "X",
        "AGE 5-24": 1769,
        "AGE 50-64": 525,
        "AGE 65": 454,
        ILITOTAL: 5612
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 32,
        "AGE 0-4": 1726,
        "AGE 25-49": 1334,
        "AGE 25-64": "X",
        "AGE 5-24": 1784,
        "AGE 50-64": 541,
        "AGE 65": 476,
        ILITOTAL: 5861
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 33,
        "AGE 0-4": 1986,
        "AGE 25-49": 1387,
        "AGE 25-64": "X",
        "AGE 5-24": 2170,
        "AGE 50-64": 516,
        "AGE 65": 478,
        ILITOTAL: 6537
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 34,
        "AGE 0-4": 2239,
        "AGE 25-49": 1492,
        "AGE 25-64": "X",
        "AGE 5-24": 2468,
        "AGE 50-64": 609,
        "AGE 65": 515,
        ILITOTAL: 7323
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 35,
        "AGE 0-4": 2445,
        "AGE 25-49": 1638,
        "AGE 25-64": "X",
        "AGE 5-24": 2830,
        "AGE 50-64": 656,
        "AGE 65": 542,
        ILITOTAL: 8111
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 36,
        "AGE 0-4": 2814,
        "AGE 25-49": 1985,
        "AGE 25-64": "X",
        "AGE 5-24": 3343,
        "AGE 50-64": 767,
        "AGE 65": 621,
        ILITOTAL: 9530
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 37,
        "AGE 0-4": 2773,
        "AGE 25-49": 2112,
        "AGE 25-64": "X",
        "AGE 5-24": 3660,
        "AGE 50-64": 829,
        "AGE 65": 691,
        ILITOTAL: 10065
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 38,
        "AGE 0-4": 3242,
        "AGE 25-49": 2347,
        "AGE 25-64": "X",
        "AGE 5-24": 3949,
        "AGE 50-64": 922,
        "AGE 65": 729,
        ILITOTAL: 11189
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 39,
        "AGE 0-4": 3481,
        "AGE 25-49": 2488,
        "AGE 25-64": "X",
        "AGE 5-24": 4198,
        "AGE 50-64": 931,
        "AGE 65": 669,
        ILITOTAL: 11767
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 40,
        "AGE 0-4": 4829,
        "AGE 25-49": 3846,
        "AGE 25-64": "X",
        "AGE 5-24": 6144,
        "AGE 50-64": 1537,
        "AGE 65": 1290,
        ILITOTAL: 17646
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 41,
        "AGE 0-4": 5276,
        "AGE 25-49": 4001,
        "AGE 25-64": "X",
        "AGE 5-24": 6026,
        "AGE 50-64": 1658,
        "AGE 65": 1320,
        ILITOTAL: 18281
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 42,
        "AGE 0-4": 5476,
        "AGE 25-49": 4364,
        "AGE 25-64": "X",
        "AGE 5-24": 6503,
        "AGE 50-64": 1731,
        "AGE 65": 1378,
        ILITOTAL: 19452
      },
      {
        "REGION TYPE": "National",
        YEAR: 2018,
        WEEK: 43,
        "AGE 0-4": 6064,
        "AGE 25-49": 4531,
        "AGE 25-64": "X",
        "AGE 5-24": 7114,
        "AGE 50-64": 1823,
        "AGE 65": 1451,
        ILITOTAL: 20983
      }
    ];
    this.setState(
      {
        pedData: res,
        chartData: res
      },
      () => {
        this.buildSeries(res);
      }
    );

    /*})
            .catch(error => console.error('Error:', error))*/
  }
  buildSeries = data => {
    let modelName = this.state.lines.filter(i => i.dp).map(i => i.dp);
    const s = [];
    const fd = this.state.chartData;
    for (var i in modelName) {
      let data = fd.map(k => {
        return k[modelName[i]];
      });
      s.push({ name: modelName[i], data: data });
    }

    let cats = fd.map(i => {
      return `W ${i.WEEK} - Y ${i.YEAR}`;
    });
    this.setState({ series: s, categories: cats });
  };
  render() {
    const { model, seasons } = this.state;
    return (
      <div className="row placeholders">
        <div className="col-xs-12 col-sm-12 placeholder insight-tab">
          <div className="row">
            <div className="col">
              <AppChart
                chartTitle="Hospitalizations"
                categories={this.state.categories}
                series={this.state.series}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HospModel;
