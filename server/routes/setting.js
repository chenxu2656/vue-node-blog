const express = require('express');
const router = express.Router();
// 获取token
router.post('/files',require('./setting/create'))

module.exports = router;
