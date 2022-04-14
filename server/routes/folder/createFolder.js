const {createFolder} = require('../../model')
module.exports = async (req,res)=>{
    const folderInfo = req.body
    try{
        const folder = await createFolder(folderInfo)
        if(folder) {
            console.log(folder);
            res.status(200).json(folder)
        } else {
            res.status(500).json({
                'err': "create fail"
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}