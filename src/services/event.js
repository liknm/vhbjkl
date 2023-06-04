import axios from "axios";
import {apiUrl} from "../utils/config";

const getAllStudent = async (username) => {
    const result = await axios.get(`${apiUrl}/user/${username}/event`)
    console.log(result)
    return result.data

}
const getCategoryList = async () => {
    const result = await axios.get(`${apiUrl}/event/category`)
    return result.data
}
const addEvent = async (data, failed, activity, username, userGroup) => {
    if (activity) {
        console.log(`${apiUrl}/event`)
        data = {...data, isActivity: true, username: username}
        console.log(data)
        console.log(data)
        if (userGroup === 'admin') {
            const key = await axios.post(`${apiUrl}/event`, data)
            console.log(key)
            return key
        } else {
            console.log('stuevent')
            const result = await axios.post(`${apiUrl}/event`, data)
            console.log(result)
            return result.data
        }
    } else {
        console.log('stuevent')
        const result = await axios.post(`${apiUrl}/user/${username}/event`, data)
        console.log(result)
        return result.data
    }
}
export default {getAllForStudent: getAllStudent, addEvent, getCategoryList}
