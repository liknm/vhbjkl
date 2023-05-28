import {apiUrl} from "../utils/config";
import axios from "axios";
const register=({ username, name, className, password })=>{
    const result=axios.post(`${apiUrl}/user`,{ username, name, className, password })
    if (result.message==='success') {
        return true
    } else {
        throw Error('创建用户失败')
    }
}
export default {register}
