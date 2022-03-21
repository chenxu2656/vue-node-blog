var express = require('express');
var router = express.Router();
const {User,createUser} = require('../model/User')

/**create user */
router.post('/createUser',require('./User/createUser'))
/* GET home page. */
router.get('/aa', function(req, res, next) {
  res.send();
});

module.exports = router;
