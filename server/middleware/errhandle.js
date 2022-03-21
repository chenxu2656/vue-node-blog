// express router middleware 
// https://expressjs.com/zh-cn/guide/using-middleware.html
module.exports = (req,res,next)=>{
    res.status(404)
    next()
}