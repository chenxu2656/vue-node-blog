const {deleteFolder} = require('../../model/')
const {errorHandle} = require('../../model/tools/error')
module.exports = async(req,res)=>{
    const folderId = req.path.split('/')[1]
    try {
        const info = await deleteFolder(folderId) 
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