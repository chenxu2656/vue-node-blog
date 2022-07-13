const {updateFront} = require('../../model/index')
module.exports = async (req,res)=>{
    const id = req.path.split('/')[1]
    console.log(id);
    console.log(req.body);
    try {
        const resp = await updateFront(id,req.body)
        if (resp) {
            res.status(200).json(resp)
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({
            'err': err
        })
    }
}