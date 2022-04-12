// 操作文章
const express = require('express');
const router = express.Router();

/**create user */
router.get('/',require('./Article/articleList'))
/**login */
router.post('/',require('./Article/createArticle'))
// 获取制定文章
router.get('/:id',require('./Article/articleDetail'))
module.exports = router;
