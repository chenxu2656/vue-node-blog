const {deleteNavItem} = require('../../model/')
module.exports = async(req,res)=>{
    const id = req.path.split('/')[1]
    console.log(id);
    try {
        const info = await deleteNavItem(id) 
        if(info) {
            res.status(200).json(info)
        } else {
            res.status(500).json({
                'err': 'err'
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}