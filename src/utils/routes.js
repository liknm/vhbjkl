import {Route, Routes} from "react-router-dom";
import ScheduleTable from "../pages/ScheduleTable";
import {courseData, eventData, examData, scheduleData} from "./testCases";
import CourseTable from "../pages/CourseTable";
import ExamTable from "../pages/ExamTable";
import EventTable from "../pages/EventTable";
import EventForm from "../pages/EventForm";
import React from "react";

export const userRoute = (
    <Routes>
        <Route path="/" element={<ScheduleTable scheduleData={scheduleData}/>}/>
        <Route path='/courses' element={<CourseTable tableData={courseData}/>}/>
        <Route path='/exams' element={<ExamTable tableData={examData}/>}/>
        <Route path='/events' element={<EventTable tableData={eventData}/>}/>
        <Route path='/addEvent' element={<EventForm/>}/>
    </Routes>
)
export const adminRoute = (
    <Routes>
        <Route path='/' element={<h1>Admin Homepage </h1>}/>
    </Routes>
)