const {createSys} = require('../../model/index')
module.exports = async (req,res)=>{
    const reqData = req.body
    try{
        const resp = await createSys(reqData)
        if(resp) {
            res.status(200).json(resp)
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