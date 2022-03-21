var express = require('express');
var router = express.Router();
const {createUser} = require('../model/User')

/**create user */
router.all('/user',req)
router.post('/register',require('./User/createUser'))

module.exports = router;
