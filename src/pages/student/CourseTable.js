import SortTable from "../../components/SortTable";
import locationList from '../../utils/locationList.json'
import {useSelector} from "react-redux";
import {intToWeekday} from "../../utils/functions";

const CourseTable = () => {
    const courses = useSelector(state => state.data.courses) || []
    console.log(courses)
    const columns = [
        {
            key: 'id',
            name: 'ID',
            selector: row => row.id
        },
        {
            key: 'name',
            name: '课程名称',
            selector: row => row.name
        },
        {
            key: 'weekday',
            name: '上课日期',
            selector: row => intToWeekday(row.weekday)
        },
        {
            key: 'start',
            name: '开始时间',
            selector: row => row.startTime
        },
        {
            key: 'end',
            name: '结束时间',
            selector: row => (row.startTime + row.duration)
        },
        {
            key: 'periodic',
            name: '周期性',
            selector: row => (row.periodic ? '是' : '否')
        },
        {
            key: 'location',
            name: '课程地点',
            selector: row => locationList[row.location].name
        }
    ]
    return (
        <div>
            <br/>
            <h1>课程查询</h1>
            <SortTable columns={columns} tableData={courses}/>
        </div>
    )
}
export default CourseTable
