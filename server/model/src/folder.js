const {folder} = require('../model/')

const createFolder = async(obj)=>{
    const folderInfo = await folder.create(obj)
    return folderInfo
}
const getfolderList = async()=>{
    const folderList = await folder.find()
    return folderList
}
const getfolderDetail = async (id)=>{
    const folderDetail = await folder.findById(id)
    return folderDetail
}
const updateFolder = async (id,obj)=>{
    const newFolderInfo = await folder.findByIdAndUpdate( id, obj, {new:true})
    return newFolderInfo
}
// 删除
const deleteFolder = async (id)=>{
    // 返回更新后的文件
    const deleteInfo = await folder.deleteOne({"_id": id})
    return deleteInfo
}
module.exports = {
    createFolder,
    getfolderList,
    getfolderDetail,
    updateFolder,
    deleteFolder
}
