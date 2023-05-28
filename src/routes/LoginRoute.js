import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import React from "react";
import NotFound from "../pages/NotFound";

const LoginRoute=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}
export default LoginRoute
