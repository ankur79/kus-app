var express = require("express");
var router = express.Router();
const https = require("https");

// Gets Flu Model
router.get("/store/:id", (req, res, next) => {
  const options = {
    hostname: "demo2.awsdev.kobai.io",
    path: `/v1/63c255f4a65493ee8e4b9a0e9687ec779e9ef0c29e07ebdead69cdf7af1db1f1?jsontype=tableau&store=${req.params.id}`,
    method: "GET",
    headers: {
      "x-api-key":
        "8d14faf33a4c7df3b86d6a169e58dd54b8e5534c28be05d44af2da28ad180f65"
    }
  };

  const r = https.request(options, response => {
    console.log(`statusCode: ${res.statusCode}`);
    //console.log(res)
    /*res.on('data', (d) => {
            console.log(d)
            //process.stdout.write(d) res.send({success: true, message: 'success', k: d});
        })*/
    var body = "";
    response.on("data", function(d) {
      body += d;
    });
    response.on("end", function() {
      // Data reception is done, do whatever with it! var parsed = JSON.parse(body);
      // console.log(parsed) body = body.slice(0, 100) console.log(typeof body)
      body = JSON.parse(body);
      //let fData = [] if (req.params.id != "all") {
      fData = body;
      /*var newArr = [];
      for (i in fData) {
        newArr.push(spreadData(fData[i]));
      }*/
      res.send({ success: true, message: "kobai", koData: fData });
    });
  });

  r.on("error", error => {
    console.error(error);
    res.send({ success: false, message: "kobai error", koData: "Data Error" });
  });

  r.end();
});

function jsonParser(o) {
  var f = Object.keys(o).map(i => {
    if (isObject(o[i])) {
      var t = o[i];
      var n = Object.keys(t).map(k => {
        var v = `${i}_${k}`;
        return { [v]: t[k] };
      });
      return n;
    } else {
      return { [i]: o[i] };
    }
  });
  return f;
}
function spreadData(d) {
  console.log(d);
  var nd = [];
  for (i in (x = jsonParser(d[0]))) {
    if (x[i].length > 0) {
      nd.push(...x[i]);
    } else {
      nd.push(x[i]);
    }
  }
  return nd;
}
function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}

module.exports = router;
