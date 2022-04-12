const {getArticleDetail}= require('../../model/article')
module.exports = async(req,res)=>{
    const artId = req.path.split('/')[1]
    console.log(artId);
    try {
        const art = await getArticleDetail(artId)
        if (art.msg == 'success') {
            res.status(200).json(art.art)
        } else {
            res.status(500).json(art)
        }
    } catch (err) {
        console.log('chucuole');
        res.status(400).json(err)
    }
}