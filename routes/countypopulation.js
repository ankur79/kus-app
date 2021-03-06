var express = require('express');
require('dotenv').config()
var router = express.Router();

// Gets Flu Model
router.get('/', (req, res, next) => {
    var db = req.db;
    var collection = db.get('countyPopulation');
    collection.find({}, {}, function (e, docs) {
        //res.render('userlist', {"userlist": docs});
        res.send({success: true, message: 'County Population', population: docs});
    });
});

/*
*/
module.exports = router;
