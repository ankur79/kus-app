var express = require('express');
require('dotenv').config()
var router = express.Router();
let mizip = require('../dataSet/mizip.json');
// Gets Flu Model
router.get('/', (req, res, next) => {
    var db = req.db;
    var collection = db.get('statePopulation');

    let updateState = [];
    var convertToNum = (str) => {
        if (typeof(str) === "number") {
            return str;
        }
        var n = str
            .split(",")
            .map(Number);
        return parseInt(n.reduce((a, b) => a + b, ''));
    }
    collection
        .find({}, {}, function (e, docs) {
            //res.render('userlist', {"userlist": docs});

            let countyPop = docs;
            let state = mizip.features;
            for (let i in state) {
                const p = countyPop.filter(item => String(item.Zip) === state[i].properties.ZCTA5CE10).map(item => item.Population);
                const pop = p[0] != undefined
                    ? convertToNum(p[0])
                    : 0;
                state[i].properties.density = pop;
                updateState.push(state[i]);
            }

            res.send({success: true, message: 'State Population', population: updateState});
        });

});

/*
*/
module.exports = router;
