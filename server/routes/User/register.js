const {createUser} = require('../../model/User')
module.exports = async(req,res,next)=>{
    try{
        let userInput = req.body
        let {username,email,password,role,status} = userInput
        console.log(userInput);
        let user = await createUser(username,email,password,role,status)
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
}