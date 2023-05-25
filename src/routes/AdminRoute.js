import {Route, Routes} from "react-router-dom";
import React from "react";

const AdminRoute = ()=>(
    <Routes>
        <Route path='/' element={<h1>Admin Homepage </h1>}/>
    </Routes>
)
export default AdminRoute
