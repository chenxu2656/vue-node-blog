const {createModel} = require('../tools/optool')
const mongoose = require('mongoose')
// const createModel = (name,schema,collectionName)=>{
//     let dataSchema = new mongoose.Schema(schema,{
//         collection: collectionName
//     })
//     let modelName = mongoose.model(name,dataSchema)
//     return modelName
// }
// module.exports = {
//     createModel: createModel
// }
const  {
        folderStructure,
        articleStructure,
        userStructure,
        tagsStructure,
        syssettingStructure
    } = require('../schema/schema')
// 文章
const article = createModel('article',articleStructure)
// 文件夹
const folder = createModel('folder',folderStructure)
// 用户
const Users = createModel('user',userStructure)
// 标签
const tags = createModel('tags',tagsStructure,'tags')
// 系统信息
const sysSchema = new mongoose.Schema(syssettingStructure,{strict: false})
const sysSetting = mongoose.model('sysSsetting',sysSchema)
module.exports = {
    folder,
    article,
    Users,
    tags,
    sysSetting
}