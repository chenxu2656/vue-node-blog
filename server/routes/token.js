const express = require('express');
const router = express.Router();
// 上传至七牛云
router.post('/qiniu',require('./token/qiniu'))

module.exports = router;
