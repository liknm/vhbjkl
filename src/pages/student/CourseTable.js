import SortTable from "../../components/SortTable";
import {useEffect, useState} from "react";
import courseService from '../../services/course'
import locationList from '../../utils/locationList.json'
const CourseTable =  () => {
    const [data,setData]=useState([])
    useEffect( () => {
        courseService.getAll()
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
            name:'课程名称',
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
            key:'periodic',
            name:'周期性',
            selector:row=>(row.periodic?'是':'否')
        },
        {
            key:'location',
            name:'课程地点',
            selector:row=>locationList[row.location].name
        }
    ]
  return (
      <div>
          <SortTable columns={columns} tableData={data}/>
      </div>
  )
}
export default CourseTable
