const {createModel} = require('../tools/optool')
const  {
        folderStructure,
        articleStructure,
        userStructure,
        tagsStructure
    } = require('../schema/schema')
// 文章
const article = createModel('article',articleStructure)
// 文件夹
const folder = createModel('folder',folderStructure)
// 用户
const Users = createModel('user',userStructure)
// 标签
const tags = createModel('tags',tagsStructure,'tags')
module.exports = {
    folder,
    article,
    Users,
    tags
}