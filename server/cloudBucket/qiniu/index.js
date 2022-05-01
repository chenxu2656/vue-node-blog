const { async } = require('@kangc/v-md-editor');
const qiniu = require('qiniu')
const bucket = 'btfblog'

const accessKey = 'iTSU7wboYomELP7uxPTinSNqRvozdI-3US3B0vPD';
const secretKey = 'aCq9TM7ygVksC4dTc-dUfghjv_vn6DVaIC4kXzRg';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
const bucketManager = new qiniu.rs.BucketManager(mac, config);
// 获取所有文件列表
// https://developer.qiniu.com/kodo/1289/nodejs
// const config = new qiniu.conf.Config();
// const formUploader = new qiniu.form_up.FormUploader(config);
// const putExtra = new qiniu.form_up.PutExtra();
// const key='4.svg';
// 文件上传 , 前台需要后台鉴权  并 返回 token
// https://developer.qiniu.com/kodo/1289/nodejs#5
let getToken = async()=>{
  const options = { 
      scope: bucket, 
      callbackBodyType: 'application/json'
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken=putPolicy.uploadToken(mac);
  return uploadToken
}  

let getFileList = (marker,limit)=>{
  let options = {
    limit: limit,
    marker: marker
  };
  return new Promise((res,rej)=>{
    bucketManager.listPrefix(bucket, options, function(err, respBody, respInfo) {
      if (err) {
        rej(err)
      } 
      if (respInfo.statusCode == 200) {
        res(respInfo)
      } else {
        res(respInfo)
      }
    });
  })
}
module.exports = {
  getToken,
  getFileList
}