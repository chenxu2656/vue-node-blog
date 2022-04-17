// 操作文件夹
const express = require('express');
const router = express.Router();
// 获取文件夹列表
router.get('/',require('./tags/getTagsList'))
// 创建文件夹
router.post('/',require('./tags/createTags'))
// 查询文件夹
router.get('/:id',require('./tags/TagsDetail'))
// 修改文件夹内容
router.put('/:id',require('./tags/updateTagsInfo'))
// 删除文件夹
router.delete('/:id',require('./tags/deleteTags'))

module.exports = router;
