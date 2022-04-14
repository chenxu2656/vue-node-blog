const {createModel} = require('../tools/index')
const  {
        folderStructure,
        articleStructure,
        userStructure,
        tagStructure
    } = require('../schema/schema')
// 文章
const article = createModel('article',articleStructure)
// 文件夹
const folder = createModel('folders',folderStructure)
// 用户
const Users = createModel('user',userStructure)
// 标签
const tags = createModel('folder',tagStructure)
module.exports = {
    folder,
    article,
    Users,
    tags
}