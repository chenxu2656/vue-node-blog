const express = require('express');
const router = express.Router();

router.post('/',require('./frontDesk/infoSetting'))
router.get('/',require('./frontDesk/getInfo'))
router.put('/:id',require('./frontDesk/updateInfo'))
module.exports = router;
