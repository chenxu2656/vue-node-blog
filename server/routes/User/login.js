
const jwt=require("jsonwebtoken");

const {Credentials} = require('../../model/')
module.exports = async(req,res)=>{
    let {email,password} = req.body
    try {
        const loginInfo = await Credentials(email,password)
        const {username} = loginInfo
        if (loginInfo) {
            const secretkey='useremail';//加密字段
            const token= jwt.sign(
                {username},
                secretkey,
                {
                    expiresIn: "7 days"
                }
            );
            res.status(200).json({
                "token":token,
                "message": "success"
            })
        } else {
            res.status(400).json({"err":"Wrong Credentials"})
        }
    }catch(err){
        res.status(500).json(err)
    }
}