const {deleteArticle} = require('../../model/index')
module.exports = async(req,res)=>{
    const artIdList = req.body.ids
    const info = await deleteArticle(artIdList)
    res.status(200).json(info)
}