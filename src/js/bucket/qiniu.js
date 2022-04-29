import * as qiniu from 'qiniu-js'
const putExtra = { };
const config = { }
const url = 'http://qiniu-btfblog-bucket.xccit.cn/'
/**
 * file
 * token: 从后端请求
 * putExtra： 
 */
const startUpload = (file,key,token) =>{
    const observable = qiniu.upload(file, key, token, putExtra, config)
    return observable
}
// https://developer.qiniu.com/kodo/1283/javascript


export {
    startUpload,
    url
}