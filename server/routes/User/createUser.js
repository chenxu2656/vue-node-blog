const {User,createUser} = require('../../model/User')
module.exports = async(req,res,next)=>{
    let userInput = req.body
    let {username,email,password,role,state} = userInput
    createUser(username,email,password,role,state)
    res.status(200)
}