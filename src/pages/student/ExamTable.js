import SortTable from "../../components/SortTable";
import locationList from '../../utils/locationList.json'
import {dateFormatter} from "../../utils/functions";
import {useSelector} from "react-redux";

const ExamTable = () => {
    const columns = [
        {
            key: 'id',
            name: 'ID',
            selector: row => row.id
        },
        {
            key: 'name',
            name: '考试名称',
            selector: row => row.name
        },
        {
            key: 'start',
            name: '开始时间',
            selector: row => dateFormatter(row.startTime)
        },
        {
            key: 'end',
            name: '结束时间',
            selector: row => dateFormatter(row.endTime)
        },
        {
            key: 'location',
            name: '考试地点',
            selector: row => locationList[row.location].name
        }
    ]

    const data = useSelector(state => state.data.exams)
    return (
        <div>
            <br/>
            <h1>考试查询</h1>
            <SortTable columns={columns} tableData={data}/>
        </div>
    )
}
export default ExamTable
