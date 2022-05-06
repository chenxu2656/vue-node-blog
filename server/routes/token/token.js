const {getToken} = require('../../cloudBucket/qiniu/index')
module.exports = async(req,res)=>{
    const {bucketName: bucket,pk,sk} = req.body
    console.log(`${bucket}  + ${pk}  + ${sk}`);
    console.log(req.body);
    try {
        const data = await getToken(bucket,pk,sk)
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