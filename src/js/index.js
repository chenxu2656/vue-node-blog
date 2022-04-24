let parseTimeStamp = (timeStamp)=>{
    let date = new Date(parseInt(timeStamp))
    return date.toLocaleString()
}
let formateCtime = (row)=>{
    let date = new Date(parseInt(row.ctime))
    return date.toLocaleString()
}
const routerPush = ($router,url)=>{
    $router.push(url)
}
const logInfo = (info)=>{
    console.log(info);
}
export {
    parseTimeStamp,
    routerPush,
    logInfo,
    formateCtime
}