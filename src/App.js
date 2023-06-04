import {useDispatch, useSelector} from "react-redux";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import {BrowserRouter} from "react-router-dom";
import {loadCookie} from "./utils/cookie";
import {setUser} from "./slice/userSlice";
import React, {useEffect} from "react";
import {SnackbarProvider} from "notistack";

const App = () => {
    const dispatch = useDispatch()
    const userGroup = useSelector(state => state.user.userGroup)

    useEffect(() => {
        const user = loadCookie()
        dispatch(setUser(user))
    }, [dispatch])
    return (
        <div>

            <BrowserRouter>
                <SnackbarProvider/>
                {
                    userGroup ?
                        <DefaultLayout/> :
                        <LoginLayout/>
                }
            </BrowserRouter>
        </div>
    )
}
export default App
