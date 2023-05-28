import SortTable from "../../components/SortTable";
import {useEffect, useState} from "react";
import examService from "../../services/exam";
import locationList from '../../utils/locationList.json'
import {dateFormatter, defaultMomentFormat} from "../../utils/functions";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {setExams} from "../../slice/dataSlice";
import {timeStart} from "../../slice/timeSlice";

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
