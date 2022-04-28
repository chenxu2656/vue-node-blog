import * as qiniu from 'qiniu-js'
const putExtra = { };
const config = { }
const key = null
/**
 * file
 * token: 从后端请求
 * putExtra： 
 */
const startUpload = (file,token) =>{
    const observable =  qiniu.upload(file, key, token, putExtra, config)
    return observable
}
// https://developer.qiniu.com/kodo/1283/javascript

export {
    startUpload
}