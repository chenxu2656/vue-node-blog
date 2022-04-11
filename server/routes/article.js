// 操作文章
const express = require('express');
const router = express.Router();

/**create user */
router.get('/',require('./Article/articleList'))
/**login */
router.post('/',require('./Article/createArticle'))
module.exports = router;
