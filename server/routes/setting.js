const express = require('express');
const router = express.Router();
// 获取token
console.log('jinlkaile s');
router.post('/',require('./setting/create'))
router.put('/:id',require('./setting/create'))
module.exports = router;
