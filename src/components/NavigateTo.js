import {useDispatch} from "react-redux";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {setNavigation} from "../slice/navigationSlice";

const NavigateTo = ({target}) => {
    console.log(target)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const clickHandler = () => {
        dispatch(setNavigation([1, target]))
        navigate('/navigation')
    }
    return (
        <Button onClick={clickHandler}>前往导航</Button>
    )
}
export default NavigateTo
