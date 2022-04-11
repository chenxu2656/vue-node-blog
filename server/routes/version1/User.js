var express = require('express');
var router = express.Router();

/**create user */
router.post('/register',require('./User/register'))
/**login */
router.post('/login',require('./User/login'))
module.exports = router;
