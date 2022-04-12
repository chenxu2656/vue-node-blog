const mongoose = require('mongoose')
const {articleStructure} = require('./schema')
let articleSchema = new mongoose.Schema(articleStructure)
const article = mongoose.model('article',articleSchema)
// 创建文章
const createArticle = async(title,content,tags)=>{
    const articleRes = await article.create({
        title: title,
        content: content,
        tags: tags
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
module.exports = {
    article: article,
    createArticle: createArticle,
    getArticleList: getArticleList,
    getArticleDetail: getArticleDetail
}