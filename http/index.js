// 封装请求
import {instance} from './interceptor'
export default (options)=>{
    return new Promise((resolve,reject)=>{
        let other = { }
        if(options.method == 'get') {
            other = {
                parmas: options.parmas
            }
        } else if(options.method == 'post') {
            other = {
                data: options.parmas
            }
        } else {
            other = {}
        }
        instance({
            method: options.method || 'get',
            url: options.url,
            ...other
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}
