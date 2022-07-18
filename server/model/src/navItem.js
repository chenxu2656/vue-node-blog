const {navItemModel} = require('../model/index')

let createNavItem = async(data)=>{
    const createNavResp = await navItemModel.create(data)
    return createNavResp
}
let getNavItem = async(reqData)=>{
    const resp = await navItemModel.find(reqData).sort({
        weight: -1
    })
    return resp
}
let deleteNavItem = async(id)=>{
    const resp = await navItemModel.deleteOne({"_id": id})
    return resp
}
// 更新文章信息
const updateNavItem = async (id,obj)=>{
    // 返回更新后的文件
    const updateInfo = await navItemModel.findByIdAndUpdate( id, obj, {new:true})
    return updateInfo
}
module.exports = {
    createNavItem,
    getNavItem,
    deleteNavItem,
    updateNavItem
}