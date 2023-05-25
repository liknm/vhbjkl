import {Route, Routes} from "react-router-dom";
import ScheduleTable from "../pages/student/ScheduleTable";
import {courseData, eventData, examData, scheduleData} from "../utils/testCases";
import CourseTable from "../pages/student/CourseTable";
import ExamTable from "../pages/student/ExamTable";
import EventTable from "../pages/student/EventTable";
import React from "react";
/*
<Route path="/" element={<ScheduleTable scheduleData={scheduleData}/>}/>*/
const StudentRoute = ()=>(
    <Routes>
        <Route path="/" element={<ScheduleTable scheduleData={scheduleData}/>}/>
        <Route path='/courses' element={<CourseTable/>}/>
        <Route path='/exams' element={<ExamTable tableData={examData}/>}/>
        <Route path='/events' element={<EventTable tableData={eventData}/>}/>
    </Routes>
)
export default StudentRoute
