// 操作文件夹
const express = require('express');
const router = express.Router();
// 获取文件夹列表
router.get('/',require('./folder/getFolderList'))
// 创建文件夹
router.post('/',require('./folder/createFolder'))
// 查询文件夹
router.get('/:id',require('./folder/folderDetail'))
// 修改文件夹内容
router.put('/:id',require('./folder/updateFolderInfo'))
// 删除文件夹
router.delete('/:id',require('./folder/deleteFolder'))

module.exports = router;
