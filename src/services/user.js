import {apiUrl} from "../utils/config";
import axios from "axios";
import {enqueueSnackbar} from "notistack";

const register = async ({username, name, className, password}) => {
    try {
        const result = await axios.post(`${apiUrl}/user`, {username, name, className, password})
        console.log('response')
        console.log(result.data)
        return result.data.message
    } catch (e) {
        enqueueSnackbar('注册失败')
    }
}
const login = async (username, password, userGroup) => {
    const result = await axios.post(`${apiUrl}/login`, {username, password, userGroup})
    return result.data.message
}
export default {register, login}
