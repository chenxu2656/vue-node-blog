const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Joi = require('joi')
let userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true   // 保证邮箱唯一
    },
    password: {
        type: String,
        require: true
    },
    ctime: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: "admin"    // admin | user
    },
    status: {
        type: String, 
        default: "active"    //active | inactive
    }
})
const Users = mongoose.model('user',userSchema)

let createUser = async(username,email,password,role,status)=>{
    let salt = await bcrypt.genSalt(11)
    let pwres = await bcrypt.hash(password,salt)
    const user = await Users.create({
        username: username,
        email: email,
        password: pwres,
        role: role,
        status: status
    })
    return user
}
let Credentials = async(email,password)=>{
    const userExit = await Users.findOne({email: email})
    if (userExit) {
        return await bcrypt.compare(password,userExit.password) ? userExit : false
    } else {
        return false
    }
}
let formatVaild = ()=>{
    const userSchema = {
        username: Joi.string().min(6).max(16).required().error(new Error('用户名不符合规范')),
        email: Joi.string().email().required().error(new Error('邮箱不符合规范')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).required().error(new Error('密码不符合规范')),
        // role: Joi.string().valid('normal','admin') //必须是这两个之一
        state : Joi.string().required().error(new Error('角色非法')),
        role: Joi.required().error(new Error('状态非法')),
    }
    const joiSchema = Joi.object(userSchema)
    return joiSchema.validateAsync(user)
}
module.exports = {
    Users: Users,
    createUser: createUser,
    Credentials: Credentials
}