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

const {
    createFolder,
    getfolderList,
    getfolderDetail,
    updateFolder,
    deleteFolder
} = require('./src/folder')

const {
    createtags,
    gettagsList,
    gettagsDetail,
    updatetags,
    deletetags
} = require('./src/tags')
const {
    createSys,
    updateSys,
    getSys
} = require('./src/sysSetting')


module.exports = {
    createArticle, 
    getArticleList, 
    getArticleDetail,
    updateArticle,
    deleteArticle,
    
    createUser,
    Credentials,

    createFolder,
    getfolderList,
    getfolderDetail,
    updateFolder,
    deleteFolder,

    createtags,
    gettagsList,
    gettagsDetail,
    updatetags,
    deletetags,

    createSys,
    updateSys,
    getSys
}