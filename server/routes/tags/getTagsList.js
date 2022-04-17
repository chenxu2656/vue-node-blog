const {gettagsList} = require('../../model/')
const {errorHandle} = require('../../model/tools/error')
module.exports = async (req,res)=>{
    try {
        const tagsList = await gettagsList()
        if (tagsList) {
            res.status(200).json(tagsList)
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