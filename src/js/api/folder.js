// folder
import axios from 'axios'
const headers = {
    token: localStorage.getItem("token")
}
const folderDelete = async(id)=>{
    const resp = await axios({
        url: `/api/folder/${id}`,
        method: "delete",
        headers: headers
    })
    if (resp) {
        return resp
    }
}
const folderNameUpdate = async(id,field)=>{
    const resp = await axios({
        url: `/api/folder/${id}`,
        method: 'put',
        data: field,
        headers: headers
    })
    if (resp) {
        return resp
    }
}
const folderList = async()=>{
    const resp = await axios({
        url: "/api/folder",
        method: "get",
    })
    if (resp) {
        return resp
    }
}
const createFolder = async(field)=>{
    const resp = await axios({
        url: "/api/folder",
        method: "post",
        headers: headers,
        data: field
    })
    if (resp) {
        return resp
    }
}
export{
    folderDelete,
    folderNameUpdate,
    folderList,
    createFolder
}