let parseTimeStamp = (timeStamp)=>{
    let date = new Date(parseInt(timeStamp))
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
    logInfo
}