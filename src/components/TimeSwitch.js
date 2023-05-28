import {ButtonGroup, ToggleButton} from "react-bootstrap";
import * as radios from "react-bootstrap/ElementChildren";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAccelerated, toggleAccelerated, updateTime} from "../slice/timeSlice";
import {timeFormatter, withInAnHour, withinAnHour} from "../utils/functions";
import {toast} from "react-toastify";
import {enqueueSnackbar} from "notistack";

const coursesNotified = new Set()
const examsNotified = new Set()
const eventsNotified = new Set()
const TimeSwitch = () => {
    const [radioValue, setRadioValue] = useState('1');
    const dispatch = useDispatch()
    const systemTime = useSelector(state => state.time.currentTime)
    const courses = useSelector(state => state.data.courses)
    const events = useSelector(state => state.data.events)
    const exams = useSelector(state => state.data.exams)
    const systemDate=new Date(systemTime)
    const currentWeekday = systemDate.getDay()
    const currentHour = systemDate.getHours()
    const currentMinute = systemDate.getMinutes()
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
