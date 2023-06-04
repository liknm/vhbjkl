import {Route, Routes} from "react-router-dom";
import ScheduleSearch from "../pages/student/ScheduleSearch";
import CourseTable from "../pages/student/CourseTable";
import ExamTable from "../pages/student/ExamTable";
import EventTable from "../pages/student/EventTable";
import React, {useEffect} from "react";
import EventForm from "../pages/student/EventForm";
import {useDispatch, useSelector} from "react-redux";
import eventService from "../services/event";
import {setCourses, setEventCategoryList, setEvents, setExams} from "../slice/dataSlice";
import examService from "../services/exam";
import courseService from "../services/course";
import CanvasTest from "../pages/student/CanvasTest";
import ActivityTable from "../pages/student/ActivityTable";
/*
<Route path="/" element={<ScheduleSearch scheduleData={scheduleData}/>}/>*/
const StudentRoute = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.user.username)
    console.log(username)
    useEffect(() => {
        eventService.getAllForStudent(username)
            .then((result) => {
                dispatch(setEvents(result))
            })
            .catch((error) => {
                console.log(error)
            })
        examService.getAllForStudent(username)
            .then((result) => {
                dispatch(setExams(result))
                console.log('exam')
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
        courseService.getAllForStudent(username)
            .then((result) => {
                console.log(result)
                dispatch(setCourses(result))
            })
            .catch((error) => {
                console.log(error)
            })
        eventService.getCategoryList()
            .then(result => {
                dispatch(setEventCategoryList(result))
            }).catch(error => {
            console.log(error)
        })
    }, [dispatch, username])
    return (
        <Routes>
            <Route path="/" element={<ScheduleSearch/>}/>
            <Route path='/courses' element={<CourseTable/>}/>
            <Route path='/exams' element={<ExamTable/>}/>
            <Route path='/events' element={<EventTable/>}/>
            <Route path={'/addEvent'} element={<EventForm/>}/>
            <Route path={'/navigation'} element={<CanvasTest/>}/>
            <Route path={'/activity'} element={<ActivityTable/>}/>
            <Route path={'/addActivity'} element={<EventForm category={'activity'}/>}/>
        </Routes>
    )
}
export default StudentRoute
