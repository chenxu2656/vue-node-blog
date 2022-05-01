const {createFolder} = require('../../model')
const {errorHandle} = require('../../model/tools/error')
module.exports = async (req,res)=>{
    const folderInfo = req.body
    try{
        const folder = await createFolder(folderInfo)
        if(folder) {
            res.status(200).json(folder)
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