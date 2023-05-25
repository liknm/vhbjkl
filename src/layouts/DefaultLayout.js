import Sidebar from "../components/Sidebar";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import StudentRoute from "../routes/StudentRoute";
import AdminRoute from "../routes/AdminRoute";
import courseService from "../services/course";
import {setLocationList} from "../slice/locationSlice";
const DefaultLayout = () => {
    const userGroup = useSelector(state => state.user.userGroup)
    const dispatch=useDispatch()
    const fetchLocation=async ()=>{
        const locations=await courseService.getAll()
        dispatch(setLocationList(locations))
    }
    useEffect(()=>{
        fetchLocation()
    },[])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        {
                            userGroup === 'admin'
                                ? <AdminRoute/>
                                : <StudentRoute/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
