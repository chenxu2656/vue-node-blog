let parseTimeStamp = (timeStamp)=>{
    let date = new Date(parseInt(timeStamp))
    return date.toLocaleString()
}
export {
    parseTimeStamp
}