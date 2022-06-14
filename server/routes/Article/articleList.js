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
    if(req.query.count){
        query.count = req.query.count
    }
    if(req.query.skip){
        query.skip = req.query.skip
    }
    if(req.query.limit){
        query.limit = req.query.limit
    }
    const resp  = await getArticleList(query)
    if(req.query.count == 'true') {
        res.status(200).json(resp)
    } else {
        if(resp.length > 0) {
            res.status(200).json(resp)
        }else{
            res.status(200).json([])
        }
    }
    
}