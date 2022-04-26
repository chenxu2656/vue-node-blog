const qiniu = require('qiniu')
const accessKey = 'iTSU7wboYomELP7uxPTinSNqRvozdI-3US3B0vPD';
const secretKey = 'aCq9TM7ygVksC4dTc-dUfghjv_vn6DVaIC4kXzRg';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = { 
    scope: "btfblog", 
    callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    callbackBodyType: 'application/json'
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken=putPolicy.uploadToken(mac);
const config = new qiniu.conf.Config();
const localFile = "/Users/xuchen/Desktop/aitmed/admin/admin/assets/yes.png";
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const key='test.png';
// 文件上传
let uploadFile = new Promise((res,rej)=>{
  formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
    respBody, respInfo) {
    if (respErr) {
      rej(respErr)
    }
    res({
      body: respBody,
      code: respInfo.statusCode
    })
   
  });
})
module.exports = {
  uploadFile
}