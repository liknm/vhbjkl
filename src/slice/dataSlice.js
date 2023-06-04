import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    events: [],
    exams: [],
    eventCategoryList: []
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        setEvents: (state, action) => {
            state.events = action.payload
        },
        setExams: (state, action) => {
            state.exams = action.payload
        },
        setEventCategoryList: (state, action) => {
            state.eventCategoryList = action.payload
        }
    }
})
export default dataSlice.reducer
export const {setExams, setCourses, setEvents, setEventCategoryList} = dataSlice.actions
