const {createModel} = require('../tools/optool')
const  {
        folderStructure,
        articleStructure,
        userStructure,
        tagStructure
    } = require('../schema/schema')
// 文章
const article = createModel('article',articleStructure)
// 文件夹
const folder = createModel('folder',folderStructure)
// 用户
const Users = createModel('user',userStructure)
// 标签
const tags = createModel('tag',tagStructure)
module.exports = {
    folder,
    article,
    Users,
    tags
}