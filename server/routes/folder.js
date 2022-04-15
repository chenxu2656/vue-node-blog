// 操作文章
const express = require('express');
const router = express.Router();
// 获取文件夹列表
router.get('/',require('./Article/articleList'))
// 创建文章
router.post('/',require('./folder/createFolder'))
// 查询文章
router.get('/:id',require('./Article/articleDetail'))
// 修改文章内容
router.put('/:id',require('./Article/updateArticle'))
// 删除文章
router.delete('/:id',require('./Article/deleteArticle'))

module.exports = router;
