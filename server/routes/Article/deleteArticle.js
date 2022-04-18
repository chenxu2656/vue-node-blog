const {deleteArticle} = require('../../model/index')
module.exports = async(req,res)=>{
    const artId = req.path.split('/')[1]
    const info = await deleteArticle(artId)
    res.status(200).json(info)
}