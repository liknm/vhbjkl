import Canvas from "../../components/Canvas";
import {useSelector} from "react-redux";

const CanvasTest = () => {
    const expoints = useSelector(state => state.navigation)
    console.log(expoints)
    return (
        <Canvas expoints={expoints}/>
    )
}
export default CanvasTest
