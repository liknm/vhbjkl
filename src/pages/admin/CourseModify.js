import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import courseService from "../../services/course";
import locationList from '../../utils/locationList.json';
import {enqueueSnackbar} from "notistack";

const CourseModify = () => {
    // 初始化状态
    const [courses, setCourses] = useState([]); // 所有课程列表
    const [course, setCourse] = useState({}); // 当前选中的课程
    const [name, setName] = useState(""); // 课程名称
    const [weekday, setWeekday] = useState(1); // 上课星期几
    const [startTime, setStartTime] = useState(8); // 上课时间（小时）
    const [duration, setDuration] = useState(2); // 上课时长
    const [periodic, setPeriodic] = useState(false); // 是否为周期性上课
    const [location, setLocation] = useState(0); // 上课地点
    const [isLoading, setIsLoading] = useState(false); // 是否正在提交表单
    const [courseId, setCourseId] = useState(null)
    // 加载所有课程
    useEffect(() => {
        courseService.getAllForAdmin()
            .then(result => {
                setCourses(result)
            })
    }, []);

    // 处理下拉选择器的改变
    const handleSelectChange = (e) => {
        const id = parseInt(e.target.value);
        setCourseId(id)
        const selectedCourse = courses.find((course) => course.id === id);

        setCourse(selectedCourse);
        setName(selectedCourse.name);
        setWeekday(selectedCourse.weekday);
        setStartTime(selectedCourse.startTime);
        setDuration(selectedCourse.duration);
        setPeriodic(selectedCourse.periodic);
        setLocation(selectedCourse.location);
    };

    // 处理表单提交
    const handleSubmit = async (e) => {
        e.preventDefault(); // 阻止默认提交行为

        setIsLoading(true);

        const editedCourse = {
            time: startTime,
            location: location,
            weekday: weekday,
            duration: duration
        };

        const result = await courseService.modifyCourse(editedCourse, courseId);

        setIsLoading(false);
        if (result) {
            enqueueSnackbar('修改成功');
        } else {
            enqueueSnackbar('修改失败');
        }
    };

    return (
        <Container>
            <h1>课程修改页</h1>

            <Form onSubmit={handleSubmit}>
                {/* 下拉选择器 */}
                <Form.Group controlId="formSelectCourse">
                    <Form.Label>选择要修改的课程：</Form.Label>
                    <Form.Control as="select" onChange={handleSelectChange}>
                        <option value="">请选择课程</option>
                        {courses.map((course) => (
                            <option value={course.id} key={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                {course.id && (
                    <>
                        {/* 课程名称 */}
                        {/*<Form.Group controlId="formCourseName">
                            <Form.Label>课程名称：</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="请输入课程名称"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>*/}

                        {/* 上课星期几 */}
                        <Form.Group controlId="formWeekday">
                            <Form.Label>上课星期几：</Form.Label>
                            <Form.Control
                                as="select"
                                value={weekday}
                                onChange={(e) => setWeekday(parseInt(e.target.value))}
                            >
                                <option value={1}>星期一</option>
                                <option value={2}>星期二</option>
                                <option value={3}>星期三</option>
                                <option value={4}>星期四</option>
                                <option value={5}>星期五</option>
                                <option value={6}>星期六</option>
                                <option value={7}>星期日</option>
                            </Form.Control>
                        </Form.Group>

                        {/* 上课时间 */}
                        <Form.Group controlId="formStartTime">
                            <Form.Label>上课时间：</Form.Label>
                            <Form.Control
                                type="number"
                                min={0}
                                max={23}
                                placeholder="请输入上课时间（小时）"
                                value={startTime}
                                onChange={(e) => setStartTime(parseInt(e.target.value))}
                            />
                        </Form.Group>

                        {/* 上课时长 */}
                        <Form.Group controlId="formDuration">
                            <Form.Label>上课时长：</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={8}
                                placeholder="请输入上课时长（小时）"
                                value={duration}
                                onChange={(e) => setDuration(parseInt(e.target.value))}
                            />
                        </Form.Group>

                        {/* 是否周期性上课 */}
                        <Form.Group controlId="formPeriodic">
                            <Form.Check
                                type="checkbox"
                                label="是否为周期性上课"
                                checked={periodic}
                                onChange={(e) => setPeriodic(e.target.checked)}
                            />
                        </Form.Group>

                        {/* 上课地点 */}
                        <Form.Group controlId="formLocation">
                            <Form.Label>上课地点：</Form.Label>
                            <Form.Control
                                as="select"
                                value={location}
                                onChange={(e) => setLocation(parseInt(e.target.value))}
                            >
                                {locationList.map((location) => (
                                    <option value={location.value} key={location.value}>
                                        {location.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        {/* 提交按钮 */}
                        <Button variant="primary" type="submit" disabled={isLoading}>
                            {isLoading ? "修改中..." : "确认修改"}
                        </Button>
                    </>
                )}
            </Form>
        </Container>
    );
};

export default CourseModify;
