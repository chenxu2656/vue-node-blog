const express = require('express');
const router = express.Router();
// 获取token
router.get('/files',require('./token/fileList'))
router.get('/token',require('./token/token'))

module.exports = router;
