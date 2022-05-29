// 封装拦截器
import axios from 'axios'

const instance = axios.create({

})

instance.interceptors.request.use((config)=>{
    console.log(config);
    const token = localStorage.getItem('token')
    
    if (token) {
        config.headers.token = token
    }
    return config
},(err)=>{
    console.log(err);
})

instance.interceptors.response.use((resp)=>{
    console.log(resp.data);
    return resp.data
},err=>{
    console.log(err);
})

export {
    instance
}