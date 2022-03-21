const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
let userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number, // admin 1, editer 2
        require: true
    },
    ctime: {
        type: Date,
        default: Date.now
    },
    state: {
        type: Number,
        default: 1   //0 启用 ，1 禁用
    }
})
const Users = mongoose.model('user',userSchema)

let createUser = async(username,email,password,role,state)=>{
    let salt = await bcrypt.genSalt(11)
    let pwres = await bcrypt.hash(password,salt)
    const user = await Users.create({
        username: username,
        email: email,
        password: pwres,
        role: role,
        state: state
    })
}
module.exports = {
    Users: Users,
    createUser: createUser
}