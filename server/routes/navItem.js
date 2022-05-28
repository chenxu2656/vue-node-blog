// 操作文件夹
const express = require('express');
const router = express.Router();

router.post('/',require('./navItem/createNavItem'))
router.get('/',require('./navItem/getNavitem'))
module.exports = router;
