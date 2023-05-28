import {useEffect, useState} from "react";
import {timeStart} from "../../slice/timeSlice";
import {useDispatch, useSelector} from "react-redux";
import {enqueueSnackbar} from "notistack";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/InputGroup'
import SortTable from "../../components/SortTable";
import course from "../../services/course";
import locationList from '../../utils/locationList.json'
import {Link} from "react-router-dom";
import {setNavigation} from "../../slice/navigationSlice";
import NavigateTo from "../../components/NavigateTo";
const ScheduleSearch = () => {
    const dispatch = useDispatch()
    const [search,setSearch]=useState('')
    useEffect(() => {
        dispatch(timeStart())
    }, [])
    const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    let tableData=[]
    const courses=useSelector(state => state.data.courses)
    const events=useSelector(state => state.data.events)
    const exams=useSelector(state=>state.data.exams)
    courses.forEach(course=>{
        if (course.name.search(search)!==-1) {
            tableData.push({name:course.name,location:course.location,cate:'课程'})
        }
    })
    events.forEach(event=>{
        if (event.name.search(search)!==-1) {
            tableData.push({name:event.name,location:event.location||0,cate:(event.activity?'课外活动':'临时事务')})
        }
    })
    exams.forEach(exam=>{
        if (exam.name.search(search)!==-1) {
            tableData.push({name:exam.name,location:exam.location,cate:'考试'})
        }
    })
    tableData.push({name:'go to march',location:1,cate:'考试'})
    const columns=[
        {
            key:'name',
            name:'名称',
            selector:row=>row.name
        },
        {
            key:'location',
            name:'位置',
            selector:row => locationList[row.location].name
        },
        {
            key:'type',
            name:'日程类型',
            selector:row => row.cate
        },
        {
            key:'nav',
            name:'导航',
            selector:row=>{
                return (
                    <>
                        {row.location!==0 &&
                        <NavigateTo target={row.location}/>}
                    </>
                )
            }
        }
    ]
    return (
        <Container>
            <br/>
            <h1>日程搜索</h1>
            <div>{search}</div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    搜索日程：
                </InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={handleSearch} value={search}/>
            </InputGroup>
            <SortTable tableData={tableData} columns={columns}/>
        </Container>
    )
}
export default ScheduleSearch
