
const jwt=require("jsonwebtoken");

const {Credentials} = require('../../model/User')
module.exports = async(req,res)=>{
    let {email,password} = req.body
    try {
        const loginInfo = await Credentials(email,password)
        const {username} = loginInfo
        if (loginInfo) {
            let secretkey=loginInfo.email;//加密字段
            const token= jwt.sign(
                {username},
                secretkey,
                {
                    expiresIn:60*10
                }
            );
            res.status(200).json(userInfo)
        } else {
            res.status(400).json({"err":"Wrong Credentials"})
        }
    }catch(err){
        res.status(500).json(err)
    }
}