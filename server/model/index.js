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
const {
    createNavItem,
    getNavItem,
    deleteNavItem,
    updateNavItem
} = require('./src/navItem')

const {
    createFront,
    getFront,
    updateFront
} = require('./src/frontDesk')
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
    getSys,
    
    createNavItem,
    getNavItem,
    deleteNavItem,
    updateNavItem,

    createFront,
    getFront,
    updateFront
}