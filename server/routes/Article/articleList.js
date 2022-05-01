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
    let query = req.query? listtype(req.query.type) : null
    // console.log(query);
    console.log(query)
    const articleList  = await getArticleList(query)
    if(articleList.length > 0) {
        res.status(200).json(articleList)
    }else{
        res.status(200).json([])
    }

}