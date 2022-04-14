const mongoose = require('mongoose')
const {articleStructure} = require('./schema')
let articleSchema = new mongoose.Schema(articleStructure)
const article = mongoose.model('article',articleSchema)
// 创建文章
const createArticle = async(title,content,tags,imgPath)=>{
    const articleRes = await article.create({
        title: title,
        content: content,
        tags: tags,
        imgPath: imgPath
    })
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
const deleteArticle = async (id)=>{
    // 返回更新后的文件
    const deleteInfo = await article.deleteOne({"_id": id})
    console.log(deleteInfo);
    return deleteInfo
}
module.exports = {
    article: article,
    createArticle: createArticle,
    getArticleList: getArticleList,
    getArticleDetail: getArticleDetail,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
}