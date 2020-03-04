import React from "react";
import AppChart from "../components/AppChart";
import { groupBy } from "lodash";
class AnalyticalModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      fluData: [],
      chartData: [],
      model: [
        {
          id: 0,
          name: "LSTM",
          check: false
        },
        {
          id: 1,
          name: "SARIMA",
          check: false
        }
      ],
      seasons: [],
      value: "season"
    };
  }
  componentDidMount() {
    /*const loc = window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : ""
        fetch(`${loc}/api/fluModel`)
            .then(res => res.json())
            .then(res => {*/
    let res = [
      {
        State: "Michigan",
        Date: "8/1/2009",
        Week: 30,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/8/2009",
        Week: 31,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/15/2009",
        Week: 32,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/22/2009",
        Week: 33,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/29/2009",
        Week: 34,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/5/2009",
        Week: 35,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/12/2009",
        Week: 36,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/19/2009",
        Week: 37,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/26/2009",
        Week: 38,
        SEASON: "2008-09",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/3/2009",
        Week: 39,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/10/2009",
        Week: 40,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/17/2009",
        Week: 41,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/24/2009",
        Week: 42,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/31/2009",
        Week: 43,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/7/2009",
        Week: 44,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/14/2009",
        Week: 45,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/21/2009",
        Week: 46,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/28/2009",
        Week: 47,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/5/2009",
        Week: 48,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/12/2009",
        Week: 49,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/19/2009",
        Week: 50,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/26/2009",
        Week: 51,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/2/2010",
        Week: 52,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/9/2010",
        Week: 1,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/16/2010",
        Week: 2,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/23/2010",
        Week: 3,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/30/2010",
        Week: 4,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/6/2010",
        Week: 5,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/13/2010",
        Week: 6,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/20/2010",
        Week: 7,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/27/2010",
        Week: 8,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/6/2010",
        Week: 9,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/13/2010",
        Week: 10,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/20/2010",
        Week: 11,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/27/2010",
        Week: 12,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/3/2010",
        Week: 13,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/10/2010",
        Week: 14,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/17/2010",
        Week: 15,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/24/2010",
        Week: 16,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/1/2010",
        Week: 17,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/8/2010",
        Week: 18,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/15/2010",
        Week: 19,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/22/2010",
        Week: 20,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/29/2010",
        Week: 21,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/5/2010",
        Week: 22,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/12/2010",
        Week: 23,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/19/2010",
        Week: 24,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/26/2010",
        Week: 25,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/3/2010",
        Week: 26,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/10/2010",
        Week: 27,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/17/2010",
        Week: 28,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/24/2010",
        Week: 29,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/31/2010",
        Week: 30,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/7/2010",
        Week: 31,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/14/2010",
        Week: 32,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/21/2010",
        Week: 33,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/28/2010",
        Week: 34,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/4/2010",
        Week: 35,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/11/2010",
        Week: 36,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/18/2010",
        Week: 37,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/25/2010",
        Week: 38,
        SEASON: "2009-10",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/2/2010",
        Week: 39,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/9/2010",
        Week: 40,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/16/2010",
        Week: 41,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/23/2010",
        Week: 42,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/30/2010",
        Week: 43,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/6/2010",
        Week: 44,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/13/2010",
        Week: 45,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/20/2010",
        Week: 46,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/27/2010",
        Week: 47,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/4/2010",
        Week: 48,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/11/2010",
        Week: 49,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/18/2010",
        Week: 50,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/25/2010",
        Week: 51,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/1/2011",
        Week: 52,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/8/2011",
        Week: 1,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/15/2011",
        Week: 2,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/22/2011",
        Week: 3,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/29/2011",
        Week: 4,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/5/2011",
        Week: 5,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/12/2011",
        Week: 6,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/19/2011",
        Week: 7,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/26/2011",
        Week: 8,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/5/2011",
        Week: 9,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/12/2011",
        Week: 10,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/19/2011",
        Week: 11,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/26/2011",
        Week: 12,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/2/2011",
        Week: 13,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/9/2011",
        Week: 14,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/16/2011",
        Week: 15,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/23/2011",
        Week: 16,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/30/2011",
        Week: 17,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/7/2011",
        Week: 18,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/14/2011",
        Week: 19,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/21/2011",
        Week: 20,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/28/2011",
        Week: 21,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/4/2011",
        Week: 22,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/11/2011",
        Week: 23,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/18/2011",
        Week: 24,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/25/2011",
        Week: 25,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/2/2011",
        Week: 26,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/9/2011",
        Week: 27,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/16/2011",
        Week: 28,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/23/2011",
        Week: 29,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/30/2011",
        Week: 30,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/6/2011",
        Week: 31,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/13/2011",
        Week: 32,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/20/2011",
        Week: 33,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/27/2011",
        Week: 34,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/3/2011",
        Week: 35,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/10/2011",
        Week: 36,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/17/2011",
        Week: 37,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/24/2011",
        Week: 38,
        SEASON: "2010-11",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/1/2011",
        Week: 39,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/8/2011",
        Week: 40,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/15/2011",
        Week: 41,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/22/2011",
        Week: 42,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/29/2011",
        Week: 43,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/5/2011",
        Week: 44,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/12/2011",
        Week: 45,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/19/2011",
        Week: 46,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/26/2011",
        Week: 47,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/3/2011",
        Week: 48,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/10/2011",
        Week: 49,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/17/2011",
        Week: 50,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/24/2011",
        Week: 51,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/31/2011",
        Week: 52,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/7/2012",
        Week: 1,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/14/2012",
        Week: 2,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/21/2012",
        Week: 3,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/28/2012",
        Week: 4,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/4/2012",
        Week: 5,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/11/2012",
        Week: 6,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/18/2012",
        Week: 7,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/25/2012",
        Week: 8,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/3/2012",
        Week: 9,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/10/2012",
        Week: 10,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/17/2012",
        Week: 12,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/24/2012",
        Week: 11,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/31/2012",
        Week: 13,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/7/2012",
        Week: 14,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/14/2012",
        Week: 15,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/21/2012",
        Week: 16,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/28/2012",
        Week: 17,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/5/2012",
        Week: 18,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/12/2012",
        Week: 19,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/19/2012",
        Week: 20,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/26/2012",
        Week: 21,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/2/2012",
        Week: 22,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/9/2012",
        Week: 23,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/16/2012",
        Week: 24,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/23/2012",
        Week: 25,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/30/2012",
        Week: 26,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/7/2012",
        Week: 27,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/14/2012",
        Week: 28,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/21/2012",
        Week: 29,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/28/2012",
        Week: 30,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/4/2012",
        Week: 31,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/11/2012",
        Week: 32,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/18/2012",
        Week: 33,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/25/2012",
        Week: 34,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/1/2012",
        Week: 35,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/8/2012",
        Week: 36,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/15/2012",
        Week: 37,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/22/2012",
        Week: 38,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/29/2012",
        Week: 39,
        SEASON: "2011-12",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/6/2012",
        Week: 40,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/13/2012",
        Week: 41,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/20/2012",
        Week: 42,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/27/2012",
        Week: 43,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/3/2012",
        Week: 44,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/10/2012",
        Week: 45,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/17/2012",
        Week: 46,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/24/2012",
        Week: 47,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/1/2012",
        Week: 48,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/8/2012",
        Week: 49,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/15/2012",
        Week: 50,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/22/2012",
        Week: 51,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/29/2012",
        Week: 52,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/5/2013",
        Week: 1,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 9,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/12/2013",
        Week: 2,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 8,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/19/2013",
        Week: 3,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 9,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/26/2013",
        Week: 4,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/2/2013",
        Week: 5,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/9/2013",
        Week: 6,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/16/2013",
        Week: 7,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/23/2013",
        Week: 8,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/2/2013",
        Week: 9,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/9/2013",
        Week: 10,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/16/2013",
        Week: 11,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/23/2013",
        Week: 12,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/30/2013",
        Week: 13,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/6/2013",
        Week: 14,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/13/2013",
        Week: 15,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/20/2013",
        Week: 16,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/27/2013",
        Week: 17,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/4/2013",
        Week: 18,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/11/2013",
        Week: 19,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/18/2013",
        Week: 20,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/25/2013",
        Week: 21,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/1/2013",
        Week: 22,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/8/2013",
        Week: 23,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/15/2013",
        Week: 24,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/22/2013",
        Week: 25,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/29/2013",
        Week: 26,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/6/2013",
        Week: 27,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/13/2013",
        Week: 28,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/20/2013",
        Week: 29,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/27/2013",
        Week: 30,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/3/2013",
        Week: 31,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/10/2013",
        Week: 32,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/17/2013",
        Week: 33,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/24/2013",
        Week: 34,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/31/2013",
        Week: 35,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/7/2013",
        Week: 36,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/14/2013",
        Week: 37,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/21/2013",
        Week: 38,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/28/2013",
        Week: 39,
        SEASON: "2012-13",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/5/2013",
        Week: 40,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/12/2013",
        Week: 41,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/19/2013",
        Week: 42,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/26/2013",
        Week: 43,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/2/2013",
        Week: 44,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/9/2013",
        Week: 45,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/16/2013",
        Week: 46,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/23/2013",
        Week: 47,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/30/2013",
        Week: 48,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/7/2013",
        Week: 49,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/14/2013",
        Week: 50,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/21/2013",
        Week: 51,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/28/2013",
        Week: 52,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/4/2014",
        Week: 1,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/11/2014",
        Week: 2,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/18/2014",
        Week: 3,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/25/2014",
        Week: 4,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/1/2014",
        Week: 5,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/8/2014",
        Week: 6,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/15/2014",
        Week: 7,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/22/2014",
        Week: 8,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/1/2014",
        Week: 9,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/8/2014",
        Week: 10,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/15/2014",
        Week: 11,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/22/2014",
        Week: 12,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/29/2014",
        Week: 13,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/5/2014",
        Week: 14,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/12/2014",
        Week: 15,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/19/2014",
        Week: 16,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/26/2014",
        Week: 17,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/3/2014",
        Week: 18,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/10/2014",
        Week: 19,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/17/2014",
        Week: 20,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/24/2014",
        Week: 21,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/31/2014",
        Week: 22,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/7/2014",
        Week: 23,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/14/2014",
        Week: 24,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/21/2014",
        Week: 25,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/28/2014",
        Week: 26,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/5/2014",
        Week: 27,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/12/2014",
        Week: 28,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/19/2014",
        Week: 29,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/26/2014",
        Week: 30,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/2/2014",
        Week: 31,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/9/2014",
        Week: 32,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/16/2014",
        Week: 33,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/23/2014",
        Week: 34,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/30/2014",
        Week: 35,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/6/2014",
        Week: 36,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/13/2014",
        Week: 37,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/20/2014",
        Week: 38,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/27/2014",
        Week: 39,
        SEASON: "2013-14",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/4/2014",
        Week: 40,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/11/2014",
        Week: 41,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/18/2014",
        Week: 42,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/25/2014",
        Week: 43,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/1/2014",
        Week: 44,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/8/2014",
        Week: 45,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/15/2014",
        Week: 46,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/22/2014",
        Week: 47,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/29/2014",
        Week: 48,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/6/2014",
        Week: 49,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/13/2014",
        Week: 50,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/20/2014",
        Week: 51,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/27/2014",
        Week: 52,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 9,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/3/2015",
        Week: 53,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/10/2015",
        Week: 1,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/17/2015",
        Week: 2,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/24/2015",
        Week: 3,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/31/2015",
        Week: 4,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/7/2015",
        Week: 5,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/14/2015",
        Week: 6,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/21/2015",
        Week: 7,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/28/2015",
        Week: 8,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/7/2015",
        Week: 9,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/14/2015",
        Week: 10,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/21/2015",
        Week: 11,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/28/2015",
        Week: 12,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/4/2015",
        Week: 13,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/11/2015",
        Week: 14,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/18/2015",
        Week: 15,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/25/2015",
        Week: 16,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/2/2015",
        Week: 17,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/9/2015",
        Week: 18,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/16/2015",
        Week: 19,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/23/2015",
        Week: 20,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/30/2015",
        Week: 21,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/6/2015",
        Week: 22,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/13/2015",
        Week: 23,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/20/2015",
        Week: 24,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/27/2015",
        Week: 25,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/4/2015",
        Week: 26,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/11/2015",
        Week: 27,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/18/2015",
        Week: 28,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/25/2015",
        Week: 29,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/1/2015",
        Week: 30,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/8/2015",
        Week: 31,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/15/2015",
        Week: 32,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/22/2015",
        Week: 33,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/29/2015",
        Week: 34,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/5/2015",
        Week: 35,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/12/2015",
        Week: 36,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/19/2015",
        Week: 37,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/26/2015",
        Week: 38,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/3/2015",
        Week: 39,
        SEASON: "2014-15",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/10/2015",
        Week: 40,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/17/2015",
        Week: 41,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/24/2015",
        Week: 42,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/31/2015",
        Week: 43,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/7/2015",
        Week: 44,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/14/2015",
        Week: 45,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/21/2015",
        Week: 46,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/28/2015",
        Week: 47,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/5/2015",
        Week: 48,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/12/2015",
        Week: 49,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/19/2015",
        Week: 50,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/26/2015",
        Week: 51,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/2/2016",
        Week: 52,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/9/2016",
        Week: 1,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/16/2016",
        Week: 2,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/23/2016",
        Week: 3,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/30/2016",
        Week: 4,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/6/2016",
        Week: 5,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/13/2016",
        Week: 6,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/20/2016",
        Week: 7,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/27/2016",
        Week: 8,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/5/2016",
        Week: 9,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/12/2016",
        Week: 10,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/19/2016",
        Week: 11,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/26/2016",
        Week: 12,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/2/2016",
        Week: 13,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/9/2016",
        Week: 14,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/16/2016",
        Week: 15,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/23/2016",
        Week: 16,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/30/2016",
        Week: 17,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/7/2016",
        Week: 18,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/14/2016",
        Week: 19,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/21/2016",
        Week: 20,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/28/2016",
        Week: 21,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/4/2016",
        Week: 22,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/11/2016",
        Week: 23,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/18/2016",
        Week: 24,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/25/2016",
        Week: 25,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/2/2016",
        Week: 26,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/9/2016",
        Week: 27,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/16/2016",
        Week: 28,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/23/2016",
        Week: 29,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/30/2016",
        Week: 30,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/6/2016",
        Week: 31,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/13/2016",
        Week: 32,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/20/2016",
        Week: 33,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/27/2016",
        Week: 34,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/3/2016",
        Week: 35,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/10/2016",
        Week: 36,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/17/2016",
        Week: 37,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/24/2016",
        Week: 38,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/1/2016",
        Week: 39,
        SEASON: "2015-16",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/8/2016",
        Week: 40,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/15/2016",
        Week: 41,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/22/2016",
        Week: 42,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/29/2016",
        Week: 43,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/5/2016",
        Week: 44,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/12/2016",
        Week: 45,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/19/2016",
        Week: 46,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/26/2016",
        Week: 47,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/3/2016",
        Week: 48,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/10/2016",
        Week: 49,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/17/2016",
        Week: 50,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/24/2016",
        Week: 51,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/7/2017",
        Week: 52,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/14/2017",
        Week: 1,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/21/2017",
        Week: 2,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/28/2017",
        Week: 3,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/4/2017",
        Week: 4,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/11/2017",
        Week: 5,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/18/2017",
        Week: 6,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/25/2017",
        Week: 7,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/4/2017",
        Week: 8,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 9,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/11/2017",
        Week: 9,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/18/2017",
        Week: 10,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/25/2017",
        Week: 11,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/1/2017",
        Week: 12,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/8/2017",
        Week: 13,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 5,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/15/2017",
        Week: 14,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/22/2017",
        Week: 15,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/29/2017",
        Week: 16,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/6/2017",
        Week: 17,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/13/2017",
        Week: 18,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/20/2017",
        Week: 19,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/27/2017",
        Week: 20,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/3/2017",
        Week: 21,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/10/2017",
        Week: 22,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/17/2017",
        Week: 23,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/24/2017",
        Week: 24,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/1/2017",
        Week: 25,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/8/2017",
        Week: 26,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/15/2017",
        Week: 27,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/22/2017",
        Week: 28,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/29/2017",
        Week: 29,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/5/2017",
        Week: 30,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/12/2017",
        Week: 31,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/19/2017",
        Week: 32,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/26/2017",
        Week: 33,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/2/2017",
        Week: 34,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/9/2017",
        Week: 35,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/16/2017",
        Week: 36,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/23/2017",
        Week: 37,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/30/2017",
        Week: 38,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/7/2017",
        Week: 39,
        SEASON: "2016-17",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/14/2017",
        Week: 40,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 0,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/21/2017",
        Week: 41,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 0,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/28/2017",
        Week: 42,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 0,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/4/2017",
        Week: 43,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 0,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/11/2017",
        Week: 44,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 0,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/18/2017",
        Week: 45,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/25/2017",
        Week: 46,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/2/2017",
        Week: 47,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/9/2017",
        Week: 48,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/16/2017",
        Week: 49,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/23/2017",
        Week: 50,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/30/2017",
        Week: 51,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/6/2018",
        Week: 1,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/13/2018",
        Week: 2,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 6,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/20/2018",
        Week: 3,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 9,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/27/2018",
        Week: 4,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/3/2018",
        Week: 5,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/10/2018",
        Week: 6,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/17/2018",
        Week: 7,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 10,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/24/2018",
        Week: 8,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 9,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/3/2018",
        Week: 9,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 7,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/10/2018",
        Week: 10,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/17/2018",
        Week: 11,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/24/2018",
        Week: 12,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/31/2018",
        Week: 13,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/7/2018",
        Week: 14,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/14/2018",
        Week: 15,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/21/2018",
        Week: 16,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/28/2018",
        Week: 17,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/5/2018",
        Week: 18,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 4,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/12/2018",
        Week: 19,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/19/2018",
        Week: 20,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 3,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/26/2018",
        Week: 21,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/2/2018",
        Week: 22,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/9/2018",
        Week: 23,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/16/2018",
        Week: 24,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/23/2018",
        Week: 25,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/30/2018",
        Week: 26,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/7/2018",
        Week: 27,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/14/2018",
        Week: 28,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/21/2018",
        Week: 29,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/28/2018",
        Week: 30,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/4/2018",
        Week: 31,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/11/2018",
        Week: 32,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/18/2018",
        Week: 33,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "8/25/2018",
        Week: 34,
        SEASON: "2017-18",
        "Flu Activity Level (Actuals)": 2,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/1/2018",
        Week: 35,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/8/2018",
        Week: 36,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/15/2018",
        Week: 37,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/22/2018",
        Week: 38,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "9/29/2018",
        Week: 39,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/6/2018",
        Week: 40,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/13/2018",
        Week: 41,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/20/2018",
        Week: 42,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "10/27/2018",
        Week: 43,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": 1,
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/3/2018",
        Week: 44,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/10/2018",
        Week: 45,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/17/2018",
        Week: 46,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "11/24/2018",
        Week: 47,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/1/2018",
        Week: 48,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/8/2018",
        Week: 49,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/15/2018",
        Week: 50,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/22/2018",
        Week: 51,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "12/29/2018",
        Week: 52,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/5/2019",
        Week: 1,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/12/2019",
        Week: 2,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/19/2019",
        Week: 3,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "1/26/2019",
        Week: 4,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/2/2019",
        Week: 5,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/9/2019",
        Week: 6,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/16/2019",
        Week: 7,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "2/23/2019",
        Week: 8,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/2/2019",
        Week: 9,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/9/2019",
        Week: 10,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/16/2019",
        Week: 11,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/23/2019",
        Week: 12,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "3/30/2019",
        Week: 13,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/6/2019",
        Week: 14,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/13/2019",
        Week: 15,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/20/2019",
        Week: 16,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "4/27/2019",
        Week: 17,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/4/2019",
        Week: 18,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/11/2019",
        Week: 19,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/18/2019",
        Week: 20,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "5/25/2019",
        Week: 21,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/1/2019",
        Week: 22,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/8/2019",
        Week: 23,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/15/2019",
        Week: 24,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/22/2019",
        Week: 25,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "6/29/2019",
        Week: 26,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/6/2019",
        Week: 27,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/13/2019",
        Week: 28,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/20/2019",
        Week: 29,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      },
      {
        State: "Michigan",
        Date: "7/27/2019",
        Week: 30,
        SEASON: "2018-19",
        "Flu Activity Level (Actuals)": "Yet to come from CDC",
        LSTM: "",
        SARIMA: ""
      }
    ];
    const seasons = Object.keys(groupBy(res, "SEASON"));
    this.setState(
      {
        fluData: res,
        chartData: res,
        seasons
      },
      () => {
        this.buildSeries(res);
      }
    );

    /*})
            .catch(error => console.error('Error:', error))*/
  }
  handleChange = e => {
    const d = groupBy(this.state.fluData, "SEASON");
    this.setState(
      {
        chartData:
          e.target.value === "season" ? this.state.fluData : d[e.target.value],
        value: e.target.value
      },
      () => {
        this.buildSeries(this.state.chartData);
      }
    );
  };
  handleInputChange = e => {
    const target = e.target;
    let model = this.state.model;
    let update = model.filter(i => i.name === target.name);
    update[0].check = target.checked;
    model[update.id] = update;
    this.setState(
      {
        model
      },
      () => {
        this.buildSeries(this.state.chartData);
      }
    );
  };
  buildSeries = data => {
    let modelName = this.state.model.filter(i => i.check).map(i => i.name);
    const x = ["Avg Weekly Temp", ...modelName];
    const s = [];
    const fd = this.state.chartData;
    for (var i in x) {
      let data = fd.map(k => {
        return k[x[i]];
      });
      s.push({ name: x[i], data: data });
    }
    this.setState({
      series: s,
      categories: Object.keys(groupBy(fd, "Date"))
    });
  };
  render() {
    const { model, seasons } = this.state;
    return (
      <div className="row placeholders">
        <div className="col-xs-12 col-sm-12 placeholder insight-tab">
          <div className="row">
            <div className="col col-md-1">
              <select className="form-control">
                <option>USA</option>
              </select>
            </div>
            <div className="col col-md-2">
              <select className="form-control">
                <option>Michigan</option>
              </select>
            </div>
            <div className="col col-md-2">
              <select
                className="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="season">All Seasons</option>
                {seasons.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-4 mt-2">
              <div className="row">
                Forecasting model:
                <form className="row">
                  {model.map(m => {
                    return (
                      <div className="form-check ml-4" key={m.name}>
                        <input
                          type="checkbox"
                          name={m.name}
                          checked={m.check}
                          onChange={this.handleInputChange}
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          {m.name}
                        </label>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <AppChart
                chartTitle="Flu Forecast"
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

export default AnalyticalModel;
