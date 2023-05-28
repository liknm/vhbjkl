import {Route, Routes} from "react-router-dom";
import React from "react";
import CourseRelease from "../pages/admin/CourseRelease";
import CourseModify from "../pages/admin/CourseModify";
import ExamRelease from "../pages/admin/ExamRelease";
import ExamModify from "../pages/admin/ExamModify";
import EventTable from "../pages/student/EventTable";
import EventForm from "../pages/student/EventForm";

const AdminRoute = ()=>(
    <Routes>
        <Route path='/' element={<h1>Admin Homepage </h1>}/>
        <Route path={'/releaseCourse'} element={<CourseRelease/>}/>
        <Route path='/modifyCourse' element={<CourseModify/>}/>
        <Route path='/releaseExam' element={<ExamRelease/>}/>
        <Route path={'/modifyExam'} element={<ExamModify/>}/>
            <Route path={'/addActivity'} element={<EventForm category={'activity'}/>}/>
    </Routes>
)
export default AdminRoute
