var express = require('express');
var router = express.Router();
const https = require('https');

// Gets Flu Model
router.get('/', (req, res, next) => {

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
            // console.log(parsed) body = body.slice(0, 100)
            console.log(typeof body)
            body = JSON.parse(body);
            body = body.slice(0, 50)
            res.send({success: true, message: 'kobai', koData: body});
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
