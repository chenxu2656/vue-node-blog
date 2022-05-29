const express = require('express');
const router = express.Router();

router.post('/',require('./navItem/createNavItem'))
router.get('/',require('./navItem/getNavitem'))
router.delete('/:id',require('./navItem/deleteNavitem'))
module.exports = router;
