import axios from "axios";
import {apiUrl} from "../utils/config";

const getAllStudent=async ()=>{
    const result=await axios.get(`${apiUrl}/event`)
    return result.data

}
const getCategoryList=async ()=>{
    const result=await axios.get(`${apiUrl}/event/category`)
    return result.data
}
const addEvent=async (data,failed,activity)=>{
    try {
        if (activity) {
            console.log(`${apiUrl}/event`)
            return await axios.post(`${apiUrl}/event`, {data})
        } else {

        }
    }catch (e) {
        console.log(e)
    }
}
export default {getAllStudent,addEvent,getCategoryList}
