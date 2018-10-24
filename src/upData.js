var AWS = require("aws-sdk");
var fs = require('fs');
var f = require('../csvjson.json')

var docClient = new AWS
    .DynamoDB
    .DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");
var allFlu = JSON.parse(fs.readFileSync("../csvjson.json", 'utf8'));
allFlu.forEach(function (flu) {
    var params = {
        TableName: "allflu_model",
        Item: {
            "Date": flu.Date,
            "LEVEL": flu.LEVEL,
            "WEEK": flu.WEEK,
            "SEASON": flu.SEASON,
            "avg": flu["Avg Weekly Temp"],
            "LSTM": flu.LSTM,
            "SARIMA": flu.SARIMA
        }
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add flu", flu.date, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", flu.date);
        }
    });
});
