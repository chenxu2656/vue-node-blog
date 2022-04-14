const {folder} = require('../model/')

const createFolder = async(obj)=>{
    const folderInfo = await folder.create(obj)
    return folderInfo || {'err': "create fail"}
}

module.exports = {
    createFolder
}