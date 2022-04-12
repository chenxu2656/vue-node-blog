// 获取所有的文章列表
const {getArticleList} = require('../../model/article')
module.exports = async(req,res)=>{
    const articleList  = await getArticleList()
    console.log(articleList);
    if(articleList.length > 0) {
        res.status(200).json(articleList)
    }else{
        res.status(200).json({
            'err': 'no article'
        })
    }

}