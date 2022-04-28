import * as qiniu from 'qiniu-js'
const putExtra = {
    fname: "qiniu.txt",
    mimeType: "text/plain",
    customVars: { 'x:test': 'qiniu'},
    metadata: { 'x-qn-meta': 'qiniu'},
};
const config = {

}
const key = null
/**
 * file
 * token: 从后端请求
 * putExtra： 
 */
const startUpload = async(file,token) =>{
    const observable = qiniu.upload(file, key, token, putExtra, config)
    return observable
}
// https://developer.qiniu.com/kodo/1283/javascript

export {
    startUpload
}