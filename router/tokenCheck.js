const tokenCheck = (to,from,next)=>{
    if (to.path.split('/')[2] === 'login') {
        next()
    } else {
        // 获取token
        let token = localStorage.getItem('token')
        //TODO: 验证一下token对不对 拦截器
        if (!token) {
            // 如果有token继续 没有token 登陆
            next({
                path: "/admin/login/in"
            })
        } else {
            // token 鉴权， 如果token过期
            next()
        }
    }
}
export {
    tokenCheck
}