const mongoose = require('mongoose')
const {articleStructure} = require('./schema')
let articleSchema = new mongoose.Schema(articleStructure)
const article = mongoose.model('article',articleSchema)
const createArticle = async(title,content,tags)=>{
    const articleRes = await article.create({
        title: title,
        content: content,
        tags: tags
    })
    return articleRes
}
module.exports = {
    article: article,
    createArticle: createArticle
}