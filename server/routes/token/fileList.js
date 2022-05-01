const {getFileList} = require('../../cloudBucket/qiniu/index')
module.exports = async (req,res)=>{
    let maker = req.query.marker ? req.query.marker : ''
    let limit = req.query.limit ? parseInt(req.query.limit) : 10
    try {
        const respData = await getFileList(maker,limit)
        if (respData) {
            res.status(200).json(respData)
        } else {
            res.status(500).json({
                msg: "error"
            })
        }
    } catch(err) {
        res.status(400).json(err)
    }
}