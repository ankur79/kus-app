var express = require('express');
require('dotenv').config()
var router = express.Router();

// Gets Flu Model
router.get('/', (req, res, next) => {
    var db = req.db;
    var collection = db.get('fluActivity');
    collection.find({}, {}, function (e, docs) {
        //res.render('userlist', {"userlist": docs});
        res.send({
            success: true,
            message: 'Flu Activity',
            fluActivity: docs,
            model: [
                {
                    id: 0,
                    name: "UNIVARIATE LSTM",
                    id: "UNIVARIATE_LSTM",
                    check: false
                }, {
                    id: 1,
                    name: "UNIVARIATE SARIMA",
                    id: "UNIVARIATE_SARIMA",
                    check: false
                }, {
                    id: 2,
                    name: "MULTIVARIATE XGBOOST",
                    id: "MULTIVARIATE_XGBOOST",
                    check: false
                }, {
                    id: 3,
                    name: "MULTIVARIATE RANDOM FOREST",
                    id: "MULTIVARIATE_RANDOM_FOREST",
                    check: false
                }, {
                    id: 4,
                    name: "MULTIVARIATE NEURAL NETWORK",
                    id: "MULTIVARIATE_NEURAL_NETWORK",
                    check: false
                }, {
                    id: 5,
                    name: "MULTIVARIATE LSTM",
                    id: "MULTIVARIATE_LSTM",
                    check: false
                }
            ]
        });
    });
});
/*
*/
module.exports = router;
