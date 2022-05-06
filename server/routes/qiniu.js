const express = require('express');
const router = express.Router();
// 获取token
router.get('/files',require('./token/fileList'))
router.post('/token',require('./token/token'))

module.exports = router;
