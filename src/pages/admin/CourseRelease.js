import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import locationList from '../../utils/locationList.json'
import {intToWeekday, range} from "../../utils/functions";
import courseService from "../../services/course";
import {enqueueSnackbar} from "notistack";
function CourseRelease() {
    const [name, setName] = useState('');
    const [weekday, setWeekday] = useState(1);
    const [startTime, setStartTime] = useState(8);
    const [duration, setDuration] = useState(1);
    const [periodic, setPeriodic] = useState(false);
    const [location, setLocation] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, weekday, startTime, duration, periodic, location };
        const result=await courseService.addCourse(data)
        enqueueSnackbar(result.message)

    };

    return (
        <Container>
            <br/>
            <h1>课程发布</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCourseName">
                    <Form.Label>课程名称</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formWeekday">
                    <Form.Label>上课时间</Form.Label>
                    <Form.Control
                        as="select"
                        value={weekday}
                        onChange={(event) => setWeekday(parseInt(event.target.value))}
                    >
                        {range(1,8).map((idx)=>(
                            <option value={idx}>{intToWeekday(idx)}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formStartTime">
                    <Form.Label>开始时间</Form.Label>
                    <Form.Control
                        as="select"
                        value={startTime}
                        onChange={(event) => setStartTime(parseInt(event.target.value))}
                    >
                        {range(8,23).map((idx)=>(
                            <option value={idx}>{idx}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDuration">
                    <Form.Label>课程时长</Form.Label>
                    <Form.Control
                        type="number"
                        min={1}
                        max={4}
                        value={duration}
                        onChange={(event) => setDuration(parseInt(event.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="formPeriodic">
                    <Form.Check
                        type="checkbox"
                        label="是否周期性"
                        checked={periodic}
                        onChange={(event) => setPeriodic(event.target.checked)}
                    />
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>上课地点</Form.Label>
                    <Form.Control
                        as="select"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    >
                        {locationList.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    提交
                </Button>
            </Form>
        </Container>
    );
}
export default CourseRelease
