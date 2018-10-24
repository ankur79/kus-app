var express = require('express');
require('dotenv').config()
var router = express.Router();

// Gets all users
router.get('/', (req, res, next) => {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function (e, docs) {
    //res.render('userlist', {"userlist": docs});
    res.send({success: true, message: 'User List', userlist: docs});
  });
});
// Add a user
router.post('/add', (req, res, next) => {});
/*
*/
module.exports = router;
