const {sysSetting} = require('../model')

const createSys = async(field)=>{
    console.log(field);
    const resp = await sysSetting.create(field)
    return resp
}
const updateSys = async (id,field)=>{
    const resp = await sysSetting.findByIdAndUpdate( id, field, {new:true})
    return resp
}
const getSys = async ()=>{
    const resp = await sysSetting.find()
    return resp
}
module.exports = {
    createSys,
    updateSys,
    getSys
}