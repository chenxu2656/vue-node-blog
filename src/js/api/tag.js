// folder
import axios from 'axios'
const headers = {
    token: localStorage.getItem("token")
}
const tagDelete = async(id)=>{
    const resp = await axios({
        url: `/api/tags/${id}`,
        method: "delete",
        headers: headers
    })
    if (resp) {
        return resp
    }
}
const folderNameUpdate = async(id,field)=>{
    const resp = await axios({
        url: `/api/tags/${id}`,
        method: 'put',
        data: field,
        headers: headers
    })
    if (resp) {
        return resp
    }
}
const tagList = async()=>{
    const resp = await axios({
        url: "/api/tags",
        method: "get",
    })
    if (resp) {
        return resp
    }
}
const createTag = async(field)=>{
    const resp = await axios({
        url: "/api/tags",
        method: "post",
        headers: headers,
        data: field
    })
    if (resp) {
        return resp
    }
}
export{
    tagList,
    createTag,
    tagDelete,
    folderNameUpdate
}