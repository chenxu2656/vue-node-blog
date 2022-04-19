// token check middleware
const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    // 看请求是不是登陆或者注册，不是话的都需要进行检测
    const url = req.url
    let rex = /(register|login)/
    if (req.method) {
        rex = /(register|login|article)/
    } 
    if(!rex.test(url)) {
        const secretkey='useremail';//加密字段
        // token 放在 请求头里
        if (req.headers.token){
            const token = req.headers.token
            jwt.verify(token, secretkey, function(err, decoded) {
                // console.log(decoded) 
                if (err) {
                    res.status(400).json({
                        'err': 'token 过期或者没有token，请重新登录后重试'
                    })
                } else {
                    next()
                }
            });
        } else {
            res.status(400).json({
                'err': '没有token，请重新登录后重试'
            })
        }
        
    } else {
        console.log('不需要检测token');
        next()
    }
}