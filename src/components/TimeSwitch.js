import {ButtonGroup, ToggleButton} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleAccelerated, updateTime} from "../slice/timeSlice";
import {timeFormatter} from "../utils/functions";
import {enqueueSnackbar} from "notistack";

const TimeSwitch = () => {
    const [radioValue, setRadioValue] = useState('1');
    const dispatch = useDispatch()
    const systemTime = useSelector(state => state.time.currentTime)
    const radios = [{name: '正常', value: '1'}, {name: '调试', value: '2'},];
    useEffect(() => {
        setInterval(() => {
            dispatch(updateTime())
        }, 1000)
    }, [])
    return (<div>
            <ButtonGroup>
                {radios.map((radio, idx) => (<ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-danger' : 'outline-primary'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {
                        setRadioValue(e.currentTarget.value)
                        dispatch(toggleAccelerated())
                        enqueueSnackbar('时间流速已改变')
                    }}
                >
                    {radio.name}
                </ToggleButton>))}
            </ButtonGroup>
            <br/>
            {timeFormatter(systemTime)}
        </div>

    )
}
export default TimeSwitch
