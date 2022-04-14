// 创建一个博客
const {createArticle} = require('../../model/article')
module.exports = async (req,res)=>{
    const {title,content,tags,imgPath} = req.body
    try {
        const art = await createArticle(title,content,tags,imgPath)
        console.log(art);
        if(art) {
            res.status(200).json(art)
        } else {
            res.status(500).json({
                'err': 'err'
            })
        }
    } catch(err) {
        res.status(500).json(err)
    }
    
}