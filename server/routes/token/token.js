const {getToken} = require('../../cloudBucket/qiniu/index')
module.exports = async(req,res)=>{
    try {
        const data = await getToken()
        if (data) {
            res.status(200).json({
                "token": data
            })
        } else {
            res.status(500).json({
                "err": "null"
            })
        }
    }catch(err){
        res.status(400).json(err)
    }
    
}