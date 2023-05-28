import React from 'react';
import ScheduleSearch from './pages/student/ScheduleSearch';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CourseTable from "./pages/student/CourseTable";
import ExamTable from "./pages/student/ExamTable";
import {courseData, scheduleData, examData, eventData} from "./utils/testCases";
import EventTable from "./pages/student/EventTable";
//import EventForm from "./pages/student/EventForm";
import CanvasTest from "./pages/student/CanvasTest";
import Login from "./pages/LoginPage";
import LogOut from "./pages/LogOut";

function StudentApp() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <Routes>
                        <Route path="/" element={<ScheduleSearch scheduleData={scheduleData}/>}/>
                        <Route path='/courses' element={<CourseTable tableData={courseData}/>}/>
                        <Route path='/exams' element={<ExamTable tableData={examData}/>}/>
                        <Route path='/events' element={<EventTable tableData={eventData}/>}/>
                        {/*<Route path='/addEvent' element={<EventForm/>}/>*/}
                        <Route path='/logout' element={<LogOut/>}/>
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default StudentApp;
