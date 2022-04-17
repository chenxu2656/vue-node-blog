const {getfolderDetail}= require('../../model/index')
const {errorHandle} = require('../../model/tools/error')
module.exports = async(req,res)=>{
    const artId = req.path.split('/')[1]
    try {
        const art = await getfolderDetail(artId)
        if (art) {
            res.status(200).json(art)
        } else {
            res.status(500).json({
                'err': "没有获取到任何内容"
            })
        }
    } catch (err) {
        const errMsg = errorHandle(err)
        res.status(400).json(errMsg)
    }
}