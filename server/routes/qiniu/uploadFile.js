const {uploadFile} = require('../../cloudBucket/qiniu/index')
module.exports = async(req,res)=>{
    // 获取图片信息
    console.log(1);
    const data = await uploadFile()
    if (data.code == 200 ) {
        res.status(200).json(data)
    } else {
        res.status(400).json(data)
    }
    console.log(2);
}