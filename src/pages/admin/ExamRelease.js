import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import moment from "moment";
import locationList from '../../utils/locationList.json'
import examService from "../../services/exam";
import {enqueueSnackbar} from "notistack";
import {setExams} from "../../slice/dataSlice";

function ExamRelease() {
    const [name, setName] = useState('');
    const [startTime, setStartTime] = useState(moment().toDate());
    const [endTime, setEndTime] = useState(moment().toDate());
    const [location, setLocation] = useState(0);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const result = await examService.releaseExam({name,startTime,endTime,location})
            enqueueSnackbar('考试发布成功')
            setStartTime(moment().toDate())
            setEndTime(moment().toDate())
            setLocation(0)
            setName('')
        } catch (e) {
            enqueueSnackbar('考试发布失败')
        }
    };

    return (
        <Container>
            <br/>
            <h1>考试发布</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formExamName">
                    <Form.Label>考试名称</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formStartTime">
                    <Form.Label>开始时间</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        value={moment(startTime).format('YYYY-MM-DDTHH:mm')}
                        onChange={(event) => setStartTime(moment(event.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="formEndTime">
                    <Form.Label>结束时间</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        value={moment(endTime).format('YYYY-MM-DDTHH:mm')}
                        onChange={(event) => setEndTime(moment(event.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>考试地点</Form.Label>
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

export default ExamRelease
