import axios from 'axios'

const creatSys = async(field) =>{
    const resp = await axios({
        url: "/api/setting",
        method: "post",
        headers: {
            token: localStorage.getItem("token")
        },
        data: field
    })
    if(resp) {
        return resp
    }
}
const updateSys = async(id,field) =>{
    console.log(id);
    const resp = await axios({
        url: `/api/setting/${id}`,
        method: "put",
        headers: {
            token: localStorage.getItem("token")
        },
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
        headers: {
            token: localStorage.getItem("token")
        }
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