import {useDispatch, useSelector} from "react-redux";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import {BrowserRouter} from "react-router-dom";
import cookie, {loadCookie, setCookie} from "./utils/cookie";
import {setUser} from "./slice/userSlice";
import React, {useEffect} from "react";
import locationService from "./services/location";
import {setLocationList} from "./slice/locationSlice";
import {ToastContainer} from "react-toastify";
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
                <SnackbarProvider />
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
