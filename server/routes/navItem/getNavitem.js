const {getNavItem} = require('../../model/index')
module.exports = async(req,res)=>{
    const reqData = req.query
    console.log('111');
    console.log(reqData);
    try {
        const data = await getNavItem(reqData)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(500).json({
                err: "没创建出来"
            })
        }
    } catch (err){
        res.status(400).json({
            err: "出错了"
        })
    }
}