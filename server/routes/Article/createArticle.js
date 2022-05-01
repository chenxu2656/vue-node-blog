// 创建一个博客
const {createArticle} = require('../../model/index')
module.exports = async (req,res)=>{
    const article= req.body
    try {
        const art = await createArticle(article)
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