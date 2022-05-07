const express = require('express');
const router = express.Router();
// 获取token
router.post('/',require('./setting/create'))
router.get('/',require('./setting/get'))
router.put('/:id',require('./setting/update'))
module.exports = router;
