
const bcrypt = require('bcrypt')
const {Credentials} = require('../../../model/User')
module.exports = async(req,res)=>{
    let {email,password} = req.body
    try {
        const loginInfo = await Credentials(email,password)
        if (loginInfo) {
            res.status(200).json(loginInfo)
        } else {
            res.status(400).json({"err":"Wrong Credentials"})
        }
    }catch(err){
        res.status(500).json(err)
    }
}