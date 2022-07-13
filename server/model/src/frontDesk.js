const {frontDeskModel} = require('../model')

const createFront = async(field)=>{
    const resp = await frontDeskModel.create(field)
    return resp
}
const getFront = async ()=>{
    const resp = await frontDeskModel.find()
    return resp
}
const updateFront = async (id,field)=>{
    const resp = await frontDeskModel.findByIdAndUpdate( id, field, {new:true})
    return resp
}
module.exports = {
    createFront,
    getFront,
    updateFront
}