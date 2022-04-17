const {tags} = require('../model')

const createtags = async(obj)=>{
    const tagsInfo = await tags.create(obj)
    return tagsInfo
}
const gettagsList = async()=>{
    const tagsList = await tags.find()
    return tagsList
}
const gettagsDetail = async (id)=>{
    const tagsDetail = await tags.findById(id)
    return tagsDetail
}
const updatetags = async (id,obj)=>{
    const newtagsInfo = await tags.findByIdAndUpdate( id, obj, {new:true})
    return newtagsInfo
}
// 删除
const deletetags = async (id)=>{
    // 返回更新后的文件
    const deleteInfo = await tags.deleteOne({"_id": id})
    return deleteInfo
}
module.exports = {
    createtags,
    gettagsList,
    gettagsDetail,
    updatetags,
    deletetags
}
