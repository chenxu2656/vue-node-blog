// 封装请求
import {instance} from './interceptor'
export default (options)=>{
    return new Promise((resolve,reject)=>{
        let other = {}
        if(options.method == 'get') {
            other = {
                params: options.params
            }
        } else if(options.method == 'post' || options.method == 'put') {
            other = {
                data: options.params,
                headers: options.headers
            }
        } else {
            other = {
                params: options.params
            }
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
