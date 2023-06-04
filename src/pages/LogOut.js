import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../slice/userSlice";

const LogOut = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(logout())
    navigate('/')
    return (
        <div>
            <LogOut></LogOut>
        </div>
    )
}
export default LogOut
