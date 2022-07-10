const {getToken} = require('../../cloudBucket/qiniu/index')
module.exports = async(req,res)=>{
    const {bucketName: bucket,pk,sk} = req.body
    try {
        const data = await getToken(bucket,pk,sk)
        console.log(data);
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
        console.log('err');
        res.status(400).json(err)
    }
    
}