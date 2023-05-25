import SortTable from "../../components/SortTable";
import {useEffect, useState} from "react";
import examService from '../../services/exam'
import locationList from '../../utils/locationList.json'
const ExamTable =  () => {
    const [data,setData]=useState([])
    useEffect( () => {
        examService.getAll()
            .then((result)=>{

                setData(result)
            })
            .catch((error)=>{
                console.log(error)
            })
    },[])
    const columns=[
        {
            key:'id',
            name:'ID',
            selector:row=>row.id
        },
        {
            key:'name',
            name:'考试名称',
            selector:row=>row.name
        },
        {
            key:'start',
            name:'开始时间',
            selector:row => row.startTime
        },
        {
            key:'end',
            name:'结束时间',
            selector:row=>(row.startTime+row.duration)
        },
        {
            key:'location',
            name:'考试地点',
            selector:row=>locationList[row.location].name
        }
    ]
    return (
        <div>
            <SortTable columns={columns} tableData={data}/>
        </div>
    )
}
export default ExamTable
