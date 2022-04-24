const {article} = require('../model/index')
// 创建文章
const createArticle = async(obj)=>{
    const articleRes = await article.create(obj)
    return articleRes
}
// 获取文章列表
const getArticleList = async ()=>{
    // 
    let articleList = await article.find()
    return articleList
}
// 获取文章具体信息
const getArticleDetail = async (id)=>{
    const art = await article.findById(id)
    if(art) {
        return {
            "msg": 'success',
            "art": art
        }
    } else {
        return { 
            'msg': 'error',
            "errorMsg": "No article"
        }
    }

}
// 更新文章信息
const updateArticle = async (id,obj)=>{
    // 返回更新后的文件
    const updateInfo = await article.findByIdAndUpdate( id, obj, {new:true})
    return updateInfo
}
// 删除
const deleteArticle = async (idList)=>{
    // 返回更新后的文件
    const deleteInfo = await article.deleteOne({"_id": {$in: idList}})
    console.log(deleteInfo);
    return deleteInfo
}
module.exports = {
    createArticle,
    getArticleList,
    getArticleDetail,
    updateArticle,
    deleteArticle
}