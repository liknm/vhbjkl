import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../sidebar.css'
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../slice/userSlice";
import {resetCookie} from "../utils/cookie";
import TimeSwitch from "./TimeSwitch";
import NavigationModal from "./NavigationModal";

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userGroup = useSelector(state => state.user.userGroup)
    const logoutHandler = (e) => {
        e.preventDefault()
        resetCookie()
        navigate('/')
        dispatch(clearUser())
    }
    const studentNav = [
        {to: "/", name: "日程搜索"},
        {to: "/courses", name: "课程查询"},
        {to: "/exams", name: "考试查询"},
        {to: "/events", name: "临时事务查询"},
        {to: "/addEvent", name: "添加临时事务"},
        {to: '/activity', name: '课外活动查询'},
        {to: '/addActivity', name: '添加课外活动'}
    ];
    const adminNav = [
        {to: '/', name: '总览'},
        {to: '/releaseCourse', name: '发布课程'},
        {to: '/modifyCourse', name: '修改课程'},
        {to: '/releaseExam', name: '发布考试'},
        {to: '/modifyExam', name: '修改考试'},
        {to: '/addActivity', name: '发布课外活动'},
    ]
    const finalNav = (userGroup === 'admin'
        ? adminNav
        : studentNav)
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <h3>正能量管理系统</h3>
            </div>
            <ul className="list-unstyled components">
                {
                    finalNav.map((nav, index) => {
                        return (
                            <li key={index}>
                                <Link to={nav.to} className='nav-link'>
                                    {nav.name}
                                </Link>
                            </li>
                        )
                    })
                }
                <li>
                    <Link to='/' className='nav-link' onClick={logoutHandler}>
                        注销
                    </Link>
                </li>
                <li>
                    <TimeSwitch/>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

