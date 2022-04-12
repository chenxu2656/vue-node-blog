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
const getArticleList = async (req,res)=>{
    // 
    let articleList = await article.find()
    return articleList
}
module.exports = {
    article: article,
    createArticle: createArticle,
    getArticleList: getArticleList
}