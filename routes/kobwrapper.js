var express = require('express');
var router = express.Router();
const https = require('https');

// Gets Flu Model
router.get('/count/:id', (req, res, next) => {
    //const count = req.params.id === "all" ? "all"
    console.log(req.params)
    const options = {
        hostname: 'demo2.awsdev2.kobai.io',
        path: '/data-svcs/api/kusari/drate',
        method: 'GET'
    }
    const r = https.request(options, (response) => {
        console.log(`statusCode: ${res.statusCode}`)
        //console.log(res)
        /*res.on('data', (d) => {
            console.log(d)
            //process.stdout.write(d) res.send({success: true, message: 'success', k: d});
        })*/
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {

            // Data reception is done, do whatever with it! var parsed = JSON.parse(body);
            // console.log(parsed) body = body.slice(0, 100) console.log(typeof body)
            body = JSON.parse(body);
            let fData = []
            if (req.params.id != "all") {
                fData = body
                    .filter(item => item.avgTempInFahrenheit != "")
                    .map(item => {
                        return {avgTempInFahrenheit: item.avgTempInFahrenheit, reportedFluRate: item.reportedFluRate, endingDate: item.relevantWeek.endingDate}
                    })
                /*body = body.reverse();
                body = body.slice(0, Number(req.params.id));
                body = body.reverse();*/
            }
            res.send({success: true, message: 'kobai', koData: fData});
        });

    })

    r.on('error', (error) => {
        console.error(error)
    })

    r.end()

});

/*
*/
module.exports = router;
