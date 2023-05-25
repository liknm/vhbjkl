import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import React from "react";

const LoginRoute=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
        </div>
    )
}
export default LoginRoute
