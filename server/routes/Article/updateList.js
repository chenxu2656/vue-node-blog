const {updateList} = require('../../model/src/article')
module.exports = async(req,res)=>{
    const ids = req.body.ids
    const fields = req.body.field
    console.log(ids);
    console.log(fields);
    const resp = await updateList(ids,fields)
    res.status(200).json(resp)
}