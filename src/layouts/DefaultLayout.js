import Sidebar from "../components/Sidebar";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import StudentRoute from "../routes/StudentRoute";
import AdminRoute from "../routes/AdminRoute";
import Message from "../components/Message";
import {Container} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import Notification from "../components/Notification";
import eventService from "../services/event";
import {setCourses, setEvents, setExams} from "../slice/dataSlice";
import {timeStart} from "../slice/timeSlice";
import examService from "../services/exam";
import courseService from "../services/course";
const DefaultLayout = () => {
    const userGroup = useSelector(state => state.user.userGroup)

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                        <Notification/>
                    </div>
                    <div className="col-md-10">
                        <div>
                            {
                                userGroup === 'admin'
                                    ? <AdminRoute/>
                                    : <StudentRoute/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
