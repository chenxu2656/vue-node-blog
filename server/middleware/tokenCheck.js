// token check middleware
const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    // 看请求是不是登陆或者注册，不是话的都需要进行检测
    const url = req.url
    let rex = /(register|login)/
    if (req.method == 'GET') {
        rex = /(register|login|article|folder|tags|navItem|setting)/s
    } 
    if(!rex.test(url)) {
        const secretkey='useremail';//加密字段
        // token 放在 请求头里
        if (req.headers.token){
            const token = req.headers.token
            jwt.verify(token, secretkey, function(err, decoded) {
                if (err) {
                    res.status(403).json({
                        'err': 'token鉴权失败，可以能是token过期或者无效'
                    })
                } else {
                    next()
                }
            });
        } else {
            res.status(402).json({
                'err': '没有token'
            })
        }
        
    } else {
        console.log('不需要检测token');
        next()
    }
}