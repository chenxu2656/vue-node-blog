import axios from 'axios'
const headers = {
    token: localStorage.getItem("token")
}

const creatSys = async(field) =>{
    const resp = await axios({
        url: "/api/setting",
        method: "post",
        headers: headers,
        data: field
    })
    if(resp) {
        return resp
    }
}
const updateSys = async(id,field) =>{
    const resp = await axios({
        url: `/api/setting/${id}`,
        method: "put",
        headers: headers,
        data: field
    })
    if(resp) {
        return resp
    }
}
const getSys = async() =>{
    const resp = await axios({
        url: `/api/setting/`,
        method: "get",
        headers: headers,
    })
    if(resp) {
        return resp
    }
}
export {
    creatSys,
    updateSys,
    getSys
}