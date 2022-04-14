const {
    createArticle,
    getArticleList,
    getArticleDetail,
    updateArticle,
    deleteArticle
} = require('./src/article')

const {
    createUser,
    Credentials
} = require('./src/user')

module.exports = {
    createArticle, 
    getArticleList, 
    getArticleDetail,
    updateArticle,
    deleteArticle,
    
    createUser,
    Credentials
}