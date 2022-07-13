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
        syssettingStructure,
        frontDeskSetting,
        navItemList
    } = require('../schema/schema')
// 文章
const article = createModel('article',articleStructure)
// 文件夹
const folder = createModel('folder',folderStructure)
// 用户
const userSchema = new mongoose.Schema(userStructure,{strict: false})
const Users = createModel('user',userSchema)
// 标签
const tags = createModel('tags',tagsStructure,'tags')

// 系统信息
const sysSchema = new mongoose.Schema(syssettingStructure,{strict: false})
const sysSetting = mongoose.model('sysSsetting',sysSchema)

// 前台设置
const frontDesk = new mongoose.Schema(frontDeskSetting)
const frontDeskModel = mongoose.model('frontDeskSetting',frontDesk)

// 导航栏设置
const navItemSchema = new mongoose.Schema(navItemList,{ capped: { size : 1024, max: 1,autoIndexId: true}})
const navItemModel = mongoose.model('navItemSetting',navItemSchema)
module.exports = {
    folder,
    article,
    Users,
    tags,
    sysSetting,
    frontDeskModel,
    navItemModel
}