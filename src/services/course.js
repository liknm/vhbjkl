import axios from "axios";
import {apiUrl} from "../utils/config";

async function getAllForStudent() {
    const response = await axios.get(apiUrl + '/course')
    return response.data
}

async function getAllForAdmin() {
    const response = await axios.get(apiUrl + '/course')
    return response.data
}

async function modifyCourse(editedCourse, courseId) {
    const result = await axios.put(`${apiUrl}/course/${courseId}`, editedCourse)
    console.log(result.data)
    return result.data
}

async function addCourse(course) {
    try{
        const result = await axios.post(`${apiUrl}/course`, course)
        console.log(result.data)
        return result.data
    } catch (e) {
        return e
    }
}

export default {getAllForStudent: getAllForStudent, getAllForAdmin: getAllForAdmin, modifyCourse, addCourse}
