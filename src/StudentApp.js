import React from 'react';
import ScheduleTable from './pages/ScheduleTable';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CourseTable from "./pages/CourseTable";
import ExamTable from "./pages/ExamTable";
import {courseData, scheduleData, examData, eventData} from "./utils/testCases";
import EventTable from "./pages/EventTable";
import EventForm from "./pages/EventForm";
import CanvasTest from "./pages/CanvasTest";
import Login from "./pages/Login";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <Routes>
                        <Route path="/" element={<ScheduleTable scheduleData={scheduleData}/>}/>
                        <Route path='/courses' element={<CourseTable tableData={courseData}/>}/>
                        <Route path='/exams' element={<ExamTable tableData={examData}/>}/>
                        <Route path='/events' element={<EventTable tableData={eventData}/>}/>
                        <Route path='/addEvent' element={<EventForm/>}/>
                        <Route path='/canvas' element={<CanvasTest/>}/>
                        <Route path='login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default App;