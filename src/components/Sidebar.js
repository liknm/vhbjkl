import React from 'react';
import { Link } from 'react-router-dom';
import '../sidebar.css'
function Sidebar() {
    return (
        <nav className="sidebar ">
            <div className="sidebar-header">
                <h3>傻逼代码合集</h3>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <Link to="/" className="nav-link">
                        日程表
                    </Link>
                </li>
                <li>
                    <Link to="/courses" className="nav-link">
                        课程查询
                    </Link>
                </li>
                <li>
                    <Link to="/exams" className="nav-link">
                        考试查询
                    </Link>
                </li>
                <li>
                    <Link to="/events" className="nav-link">
                        临时事务查询
                    </Link>
                </li>
                <li>
                    <Link to="/addEvent" className="nav-link">
                        添加临时事务
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

