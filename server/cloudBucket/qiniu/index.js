const qiniu = require('qiniu')
const accessKey = 'iTSU7wboYomELP7uxPTinSNqRvozdI-3US3B0vPD';
const secretKey = 'aCq9TM7ygVksC4dTc-dUfghjv_vn6DVaIC4kXzRg';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = { 
    scope: "btfblog", 
    callbackBodyType: 'application/json'
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken=putPolicy.uploadToken(mac);
const config = new qiniu.conf.Config();
const localFile = "/Users/chenxu/Desktop/aitmed/admin/admin/assets/keyboard.svg";
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const key='4.svg';
// 文件上传
let uploadFile = (filePath)=>{
  return new Promise((res,rej)=>{
    formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
      respBody, respInfo) {
      if (respErr) {
        rej(respErr)
      }
      res({
        "body": respBody,
        "code": respInfo.statusCode
      })
     
    });
  })
}  
module.exports = {
  uploadFile
}