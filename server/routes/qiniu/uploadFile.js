const {uploadFile} = require('../../cloudBucket/qiniu/index')
module.exports = async(req,res)=>{
    // 获取图片信息
    console.log(1);
    await uploadFile
    console.log(2);
}