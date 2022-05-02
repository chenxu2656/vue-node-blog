const {updateSys} = require('../../model/index')
module.exports = async (req,res)=>{
    const id = req.path.split('/')[1]
    try {
        const resp = await updateSys(id,req.body)
        if (resp) {
            res.status(200).json(resp)
        }
    } catch (err) {
        res.status(400).json({
            'err': err
        })
    }
}