import {useSelector} from "react-redux";
import {Alert} from "react-bootstrap";

const Message=()=>{
    const message=useSelector(state => state.message.message)
    const type=useSelector(state => state.message.type)
    return (
        <div>
            <Alert variant={type}>
                {message}
            </Alert>
        </div>
    )
}
export default Message
