import {useEffect, useState} from "react";
import {timeStart} from "../../slice/timeSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import SortTable from "../../components/SortTable";
import NavModal from "../../components/NavModal";

const ScheduleSearch = () => {
    const dispatch = useDispatch()
    const [lgShow, setLgShow] = useState(false);
    const [search, setSearch] = useState('')
    const [targets, setTargets] = useState([])
    useEffect(() => {
        dispatch(timeStart())
    }, [])
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    let tableData = []
    const courses = useSelector(state => state.data.courses)
    const events = useSelector(state => state.data.events)
    const exams = useSelector(state => state.data.exams)
    courses.forEach(course => {
        if (course.name.search(search) !== -1) {
            tableData.push({name: course.name, location: course.location, cate: '课程'})
        }
    })
    events.forEach(event => {
        if (event.name.search(search) !== -1) {
            tableData.push({
                name: event.name,
                location: event.location || 0,
                cate: (event.activity ? '课外活动' : '临时事务')
            })
        }
    })
    exams.forEach(exam => {
        if (exam.name.search(search) !== -1) {
            tableData.push({name: exam.name, location: exam.location, cate: '考试'})
        }
    })
    tableData.push({name: 'go to march', location: 1, cate: '考试'})
    const columns = [
        {
            key: 'name',
            name: '名称',
            selector: row => row.name
        },
        {
            key: 'location',
            name: '位置',
            selector: row => row.location
        },
        {
            key: 'type',
            name: '日程类型',
            selector: row => row.cate
        },
        {
            key: 'nav',
            name: '导航',
            selector: row => {
                return (
                    <>
                        {row.location !== undefined && (
                            row.location !== 0 &&
                            <Button onClick={() => {
                                /*setLgShow(true)
                                setTarget(row.location)*/
                                setTargets([...targets, row.location])
                            }}>导航</Button>
                        )}
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
            <ListGroup horizontal>
                {targets.map(t => {
                    return <ListGroup.Item>{t}</ListGroup.Item>
                })}
                <Button onClick={() => {
                    setLgShow(true)
                }}>开始导航</Button>
            </ListGroup>
            <SortTable tableData={tableData} columns={columns}/>
            <NavModal setLgShow={setLgShow} target={targets} lgShow={lgShow}/>
        </Container>
    )
}
export default ScheduleSearch
