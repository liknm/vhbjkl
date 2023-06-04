import Sidebar from "../components/Sidebar";
import React from "react";
import {useSelector} from "react-redux";
import StudentRoute from "../routes/StudentRoute";
import AdminRoute from "../routes/AdminRoute";
import Notification from "../components/Notification";

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
