import axios from "axios";
import {apiUrl} from "../utils/config";

const getAllForStudent=async ()=>{
    const result=await axios.get(`${apiUrl}/exam`)
    return result.data

}
const releaseExam=async (exam)=>{
    console.log(exam)
    exam.startTime=exam.startTime.toString()
    exam.endTime=exam.endTime.toString()
    const result=await axios.post(`${apiUrl}/exam`,exam)
    return result.data
}
const getAllForAdmin=async ()=>{
    const result=await axios.get(`${apiUrl}/exam`)
    console.log(result.data)
    return result.data

}
const modifyExam=async (exam) =>{
    try{
        const result = await axios.put(`${apiUrl}/exam`,exam)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export default {getAllForStudent,releaseExam,getAllForAdmin,modifyExam}
