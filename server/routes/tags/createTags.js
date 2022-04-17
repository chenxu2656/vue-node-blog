const {createtags} = require('../../model')
const {errorHandle} = require('../../model/tools/error')
module.exports = async (req,res)=>{
    const tagsInfo = req.body
    try{
        const tags = await createtags(tagsInfo)
        if(tags) {
            res.status(200).json(tags)
        } else {
            res.status(500).json({
                'err': "create fail"
            })
        }
    } catch (err) {
        const errMsg = errorHandle(err)
        res.status(400).json(errMsg)
    }
}