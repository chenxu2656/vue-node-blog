const {navItemModel} = require('../model/index')

let createNavItem = async(data)=>{
    const createNavResp = await navItemModel.create(data)
    return createNavResp
}
let getNavItem = async(data)=>{
    const resp = await navItemModel.find()
    return resp
}
module.exports = {
    createNavItem,
    getNavItem
}