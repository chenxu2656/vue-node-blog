const {createModel} = require('../tools/index')
const {folderStructure,articleStructure,userStructure} = require('../schema/schema')
// 文章
const article = createModel('article',articleStructure)
// 文件夹
const folder = createModel('folder',folderStructure)
// 用户
const Users = createModel('user',userStructure)

module.exports = {
    folder: folder,
    article: article,
    Users: Users
}