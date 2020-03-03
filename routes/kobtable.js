var express = require("express");
var router = express.Router();
const https = require("https");

// Gets Flu Model
router.get("/ep/:id/akey/:akey", (req, res, next) => {
  // const count = req.params.id === "all" ? "all"
  // '/v1/7019ae48932b2ebb7b155145977a5d1ef116c429416d81c85935f0c58f18eb1'
  // '9fc689e6dcdc32adea9d7a6e47b3a40da9cdb5d4977f031c59d45d4f12b1b712'
  // console.log(req.params)
  const options = {
    hostname: "demo4.awsdev.kobai.io",
    path: `/v1/${req.params.id}?jsontype=tableau`,
    method: "GET",
    headers: {
      "x-api-key": req.params.akey
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
    response.on("data", function (d) {
      body += d;
    });
    response.on("end", function () {
      // Data reception is done, do whatever with it! var parsed = JSON.parse(body);
      // console.log(parsed) body = body.slice(0, 100) console.log(typeof body)
      body = JSON.parse(body);
      //let fData = [] if (req.params.id != "all") {
      fData = body;
      /*var newArr = [];
      for (i in fData) {
        newArr.push(spreadData(fData[i]));
      }*/
      res.send({success: true, message: "kobai", koData: fData});
    });
  });

  r.on("error", error => {
    console.error(error);
    res.send({success: false, message: "kobai", koData: "Data Error"});
  });

  r.end();
});

function jsonParser(o) {
  var f = Object
    .keys(o)
    .map(i => {
      if (isObject(o[i])) {
        var t = o[i];
        var n = Object
          .keys(t)
          .map(k => {
            var v = `${i}_${k}`;
            return {[v]: t[k]};
          });
        return n;
      } else {
        return {[i]: o[i]};
      }
    });
  return f;
}
function spreadData(d) {
  console.log(d);
  var nd = [];
  for (i in(x = jsonParser(d[0]))) {
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
