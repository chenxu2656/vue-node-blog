const {getArticleDetail}= require('../../model/index')
module.exports = async(req,res)=>{
    const artId = req.params.id
    console.log(artId);
    try {
        const art = await getArticleDetail(artId)
        if (art.msg == 'success') {
            res.status(200).json(art.art)
        } else {
            res.status(500).json(art)
        }
    } catch (err) {
        res.status(400).json(err)
    }
}