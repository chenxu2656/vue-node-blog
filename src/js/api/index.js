// folder
import axios from 'axios'

const folderDelete = async(id)=>{
    const resp = await axios({
        url: `/api/folder/${id}`,
        method: "delete"
    })
    if (resp) {
        return resp
    }
}
export{
    folderDelete
}