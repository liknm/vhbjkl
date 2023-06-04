import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []
const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        getAllCourses: async (state, action) => {
            try {
                const response = await fetchCourse() //将获取的数据更新到state中
                console.log(response)
                return response
            } catch (error) {
                console.log(error)
            }
        }
    }
})

const fetchCourse = async () => {
    console.log("loading data")
    const results = await axios.get('http://localhost:3000/courses')
    console.log(results)
    return results.data
}

export const {getAllCourses} = courseSlice.actions
export default courseSlice.reducer
