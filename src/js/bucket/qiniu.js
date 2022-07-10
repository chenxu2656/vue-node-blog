import * as qiniu from 'qiniu-js'
import apiRequest from '../../../http/index'
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
/**
 * sk + pk + bucketname获取token
 * @param {*} qiniu 
 */
const getQiniuToken = async()=>{
    const qiniuToken = await apiRequest({
        url: "/api/qiniu/token",
        method: "post",
        headers: {
            token: localStorage.getItem('token')
        },
        params: JSON.parse(localStorage.getItem('qiniuToken'))
    })
    return qiniuToken.token
}
/**
 * 上传文件至七牛云并返回文件路径
 * @param {*} file 
 * @return String 文件路径
 */
const uploadFile = async(file)=>{
    const qiniuToken = await getQiniuToken();
    const qiniuUrl = JSON.parse(localStorage.getItem('qiniuToken')).url
    return new Promise((resolve,reject)=>{
        const observable = startUpload(
            file,
            `${Date.now()}_${file.name}`,
            qiniuToken
        );
        observable.subscribe({
            next(res) {
                console.log(res.total.percent);
            },
            error(err) {
              reject(err)
            },
            complete(res) {
              resolve(`${qiniuUrl}/${res.key}`)
            },
          });
    })
}
// const uploadImg = (file,key,token)=>{

// }

export {
    startUpload,
    url,
    getQiniuToken,
    uploadFile
}