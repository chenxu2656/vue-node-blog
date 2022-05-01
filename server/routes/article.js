// 操作文章
const express = require('express');
const router = express.Router();
// 获取文章列表
router.get('/',require('./Article/articleList'))
// 创建文章
router.post('/',require('./Article/createArticle'))
// 查询文章
router.get('/:id',require('./Article/articleDetail'))
// 批量更新
router.put('/list',require('./Article/updateList'))
// 修改文章内容
router.put('/:id',require('./Article/updateArticle'))

// 删除文章
router.delete('/',require('./Article/deleteArticle'))

module.exports = router;
