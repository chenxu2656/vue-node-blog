const {article} = require('../model/index')
// 创建文章
const createArticle = async(obj)=>{
    const articleRes = await article.create(obj)
    return articleRes
}
// 获取文章列表
const getArticleList = async (query)=>{
    let queryField = {}
    let limit = 10000,
        skip = 0
    if(query.hasOwnProperty('skip')){
        skip = query.skip
        delete query.skip
    }
    if(query.hasOwnProperty('limit')){
        limit = query.limit
        delete query.limit
        
    }
    if(query.hasOwnProperty('tagid')) {
        queryField = {
            tage: query.tage,
            tags: {$all: [query.tagid]}
        }
    }else if (query.hasOwnProperty('folderid')){
        queryField = {
            tage: query.tage,
            folders: {$all: [query.folderid]}
        }
    } else {
        queryField = query
    }
    if (query.count == 'true') {
        console.log('111');
        return await article.find(queryField).count()
    }else{
        return await article.find(queryField).limit(limit).skip(skip)
    }
}
// 获取文章具体信息s
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
const updateList = async (ids,fields)=>{
    // 返回更新后的文件
    const updateInfo = await article.updateMany( {_id: {$in: ids}}, fields, {new:true})
    return updateInfo
}
// 删除
const deleteArticle = async (ids)=>{
    // 返回更新后的文件
    const deleteInfo = await article.deleteMany({"_id": {$in: ids}})
    return deleteInfo
}
module.exports = {
    createArticle,
    getArticleList,
    getArticleDetail,
    updateArticle,
    deleteArticle,
    updateList
}