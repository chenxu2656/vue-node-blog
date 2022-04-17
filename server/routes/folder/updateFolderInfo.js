const {updateFolder} = require('../../model/')
const {errorHandle} = require('../../model/tools/error')
module.exports = async(req,res)=>{
    const folderId = req.path.split('/')[1]
    try {
        const updatedInfo = await updateFolder(folderId,req.body)
        if (updatedInfo) {
            res.status(200).json(updatedInfo)
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