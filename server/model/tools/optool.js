const mongoose = require('mongoose')
const createModel = (name,schema,collectionName)=>{
    let dataSchema = new mongoose.Schema(schema,{
        collection: collectionName
    })
    let modelName = mongoose.model(name,dataSchema)
    return modelName
}
module.exports = {
    createModel: createModel
}