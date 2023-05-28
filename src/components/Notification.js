import {inAnHour, withInAnHour} from "../utils/functions";
import {enqueueSnackbar} from "notistack";
import {useSelector} from "react-redux";
import locationList from '../utils/locationList.json'
import * as events from "events";

const coursesNotified = new Set()
const examsNotified = new Set()
const eventsNotified=new Set()
let weeklyReset = false
const Notification = () => {
    const courses = useSelector(state => state.data.courses)
    const exams = useSelector(state => state.data.exams)
    const systemTime = useSelector(state => state.time.currentTime)
    const events=useSelector(state => state.data.events)
    const systemDate = new Date(systemTime)
    const currentWeekday = systemDate.getDay()
    const currentHour = systemDate.getHours()
    const currentMinute = systemDate.getMinutes()
    if (currentWeekday === 1) {
        if (weeklyReset === false) {
            coursesNotified.clear()
            eventsNotified.clear()
            examsNotified.clear()
            weeklyReset = true
        }
    } else {
        weeklyReset = false
    }
    courses.forEach((course) => {
        if (course.weekday === currentWeekday &&
            withInAnHour(currentHour, currentMinute, course.startTime) &&
            !coursesNotified.has(course.id)) {
            coursesNotified.add(course.id)
            console.log(`course of id ${course.id} detected`)
            const location = locationList[course.location].name
            enqueueSnackbar(`课程 ${course.name} 即将在 ${location}开始`)
        }
    })
    exams.forEach(exam => {
        if (inAnHour(systemTime, exam.startTime &&
            !examsNotified.has(exam.id))) {
            const location=locationList[exam.location].name
            enqueueSnackbar(`考试 ${exam.name} 即将在 ${location}开始`)
        }
    })
    events.forEach(e => {
        if (inAnHour(systemTime, e.startTime &&
            !eventsNotified.has(e.id))) {
            const location=locationList[e.location].name
            enqueueSnackbar(`临时事务 ${e.name} 即将在 ${location}开始`)
        }
    })
    return (
        <>
        </>
    )
}
export default Notification
