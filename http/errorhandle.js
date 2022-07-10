// import { useRouter } from "vue-router";
// const router = useRouter()
const handle402_3 = (errorCode,errorMsg)=>{
    if(localStorage.getItem('token')) {
        localStorage.removeItem('token')
    }
    const currentHref = window.location.pathname
    localStorage.setItem('prev',currentHref)
    window.location.href= '/admin/login/in'
    console.log(`%c ${errorCode}:${errorMsg}`,'background:#ff0012;color:#fff;height:30px;line-height:30px');
}
const handleUndefineError = (err)=>{
    console.error(err);
}
export default (err)=>{
    let errorCode = err.response.status
    let errorMsg = err.response.data.err
    switch (errorCode) {
        case 403:
            handle402_3(errorCode,errorMsg);
            break;
        case 402:
            handle402_3(errorCode,errorMsg);
            break;
        default:
            handleUndefineError(err);
            break;
    }
    
}