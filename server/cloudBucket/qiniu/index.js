const qiniu = require('qiniu')
/**
 * @link {七牛云开发文档} https://developer.qiniu.com/kodo/1289/nodejs
 */


/**
 * 生成鉴权对象 mac
 * @param {*} pk
 * @param {*} sk
 */
const genMac = (pk,sk)=>{
  return new qiniu.auth.digest.Mac(pk, sk);
}
/**
 * 前台传递bucketName,pk,sk
 * @param {*} bucket ,bucketName
 * @param {*} pk ak
 * @param {*} sk sk
 * @returns 返回token
 */
 const getToken = async(bucket,pk,sk)=>{
  const options = { 
      scope: bucket, 
      callbackBodyType: 'application/json'
  };
  const mac = genMac(pk, sk);
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken=putPolicy.uploadToken(mac);
  return uploadToken
}  
/**
 * 返回文件列表
 * @param {*} bucket 
 * @param {*} pk 
 * @param {*} sk 
 * @param {*} marker 查询起点， 默认为空， 上个查询的尾巴为下个的起点
 * @param {*} limit 查询条数
 * @returns 返回文件列表
 */
 const getFileList = (bucket,pk,sk,marker,limit)=>{
  const mac = genMac(pk, sk);
  const config = new qiniu.conf.Config();
  const bucketManager = new qiniu.rs.BucketManager(mac, config);
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