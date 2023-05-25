import {useDispatch, useSelector} from "react-redux";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import {BrowserRouter} from "react-router-dom";
import cookie, {loadCookie, setCookie} from "./utils/cookie";
import {setUser} from "./slice/userSlice";
import {useEffect} from "react";
import locationService from "./services/location";
import {setLocationList} from "./slice/locationSlice";

const App=()=>{
    const dispatch=useDispatch()
    const userGroup=useSelector(state => state.user.userGroup)

    useEffect(()=>{
        const user=loadCookie()
        dispatch(setUser(user))
    },[dispatch])
    return (
        <BrowserRouter>
            {
                userGroup?
                    <DefaultLayout/>:
                    <LoginLayout/>
            }
        </BrowserRouter>
    )
}
export default App
