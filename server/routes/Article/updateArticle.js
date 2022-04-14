const {updateArticle} = require('../../model/index')
module.exports = async (req,res)=>{
    const artId = req.path.split('/')[1]
    try {
        const updatedInfo = await updateArticle(artId,req.body)
        if (updatedInfo) {
            res.status(200).json(updatedInfo)
        }
    } catch (err) {
        res.status(400).json({
            'err': err
        })
    }
}