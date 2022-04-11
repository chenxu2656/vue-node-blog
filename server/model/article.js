const mongoose = require('mongoose')
let articleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    ctime: {
        type: String,
        default: Date.now
    },
    content: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        require: true
    }
})
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
    createArticle: createArticle
}