const {updateNavItem} = require('../../model/index')
module.exports = async (req,res)=>{
    const navId = req.path.split('/')[1]
    try {
        console.log(req.body);
        const updatedInfo = await updateNavItem(navId,req.body)
        if (updatedInfo) {
            res.status(200).json(updatedInfo)
        }
    } catch (err) {
        res.status(400).json({
            'err': err
        })
    }
}