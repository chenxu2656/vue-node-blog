const {deletetags} = require('../../model/')
const {errorHandle} = require('../../model/tools/error')
module.exports = async(req,res)=>{
    const tagsId = req.path.split('/')[1]
    try {
        const info = await deletetags(tagsId) 
        if(info) {
            res.status(200).json(info)
        } else {
            res.status(500).json({
                'err': 'err'
            })
        }
    } catch (err) {
        const errMsg = errorHandle(err)
    }
}