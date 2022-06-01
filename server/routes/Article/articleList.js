// 获取所有的文章列表
const {getArticleList} = require('../../model/index')
const listtype = (type) =>{
    if (type == 'list') {
        return {
            tage: 1
        }
    } else if (type == 'draft') {
        return {
            tage: 0
        }
    } else if (type == 'trash') {
        return {
            tage: -1
        }
    }
}
module.exports = async(req,res)=>{
    let query = req.query.type? listtype(req.query.type) : {}
    if(req.query.tagid){
        query.tagid = req.query.tagid
    }
    if(req.query.folderid){
        query.folderid = req.query.folderid
    }
    const articleList  = await getArticleList(query)
    if(articleList.length > 0) {
        res.status(200).json(articleList)
    }else{
        res.status(200).json([])
    }
}