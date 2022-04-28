const { async } = require('@kangc/v-md-editor');
const qiniu = require('qiniu')

// const config = new qiniu.conf.Config();
// const formUploader = new qiniu.form_up.FormUploader(config);
// const putExtra = new qiniu.form_up.PutExtra();
// const key='4.svg';
// 文件上传 , 前台需要后台鉴权  并 返回 token
// https://developer.qiniu.com/kodo/1289/nodejs#5
let getToken = async()=>{
  const accessKey = 'iTSU7wboYomELP7uxPTinSNqRvozdI-3US3B0vPD';
  const secretKey = 'aCq9TM7ygVksC4dTc-dUfghjv_vn6DVaIC4kXzRg';
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  const options = { 
      scope: "btfblog", 
      callbackBodyType: 'application/json'
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken=putPolicy.uploadToken(mac);
  return uploadToken
}  
module.exports = {
  getToken
}