// 封装拦截器
import axios from 'axios'
import  errorhandle  from './errorhandle'
const instance = axios.create({ })
// 请求拦截
instance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config
},(err)=>{
    console.log(err);
})
// 响应拦截
instance.interceptors.response.use((resp)=>{
    return resp.data
},err=>{
    errorhandle(err)
})

export {
    instance
}