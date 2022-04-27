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
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const key='4.svg';
// 文件上传
// https://developer.qiniu.com/kodo/1289/nodejs#5
let uploadFile = (readableStream)=>{
  return new Promise((res,rej)=>{
    formUploader.putStream(uploadToken, key, readableStream, putExtra, function(respErr,
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