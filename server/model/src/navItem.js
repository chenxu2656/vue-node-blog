const {navItemModel} = require('../model/index')

let createNavItem = async(data)=>{
    const createNavResp = await navItemModel.create(data)
    return createNavResp
}
let getNavItem = async()=>{
    const resp = await navItemModel.find()
    return resp
}
let deleteNavItem = async(id)=>{
    const resp = await navItemModel.deleteOne({"_id": id})
    return resp
}
module.exports = {
    createNavItem,
    getNavItem,
    deleteNavItem
}