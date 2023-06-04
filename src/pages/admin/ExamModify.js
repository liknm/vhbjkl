import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import examService from "../../services/exam";
import locationList from '../../utils/locationList.json'
import {enqueueSnackbar} from "notistack";

const ExamModify = () => {
    // 初始化状态
    const [exams, setExams] = useState([]); // 所有考试列表
    const [exam, setExam] = useState({}); // 当前选中的考试
    const [name, setName] = useState(""); // 考试名称
    const [startTime, setStartTime] = useState(""); // 开始时间
    const [endTime, setEndTime] = useState(""); // 结束时间
    const [location, setLocation] = useState(0); // 考试地点
    const [isLoading, setIsLoading] = useState(false); // 是否正在提交表单
    const [examId, setExamId] = useState(null)
    // 加载所有考试
    useEffect(() => {
        examService.getAllForAdmin()
            .then(result => {
                setExams(result)
            })
    }, []);

    // 处理下拉选择器的改变
    const handleSelectChange = (e) => {
        const id = parseInt(e.target.value);
        setExamId(id)
        const selectedExam = exams.find((exam) => exam.id === id);

        setExam(selectedExam);
        setName(selectedExam.name);
        setStartTime(selectedExam.startTime);
        setEndTime(selectedExam.endTime);
        setLocation(selectedExam.location);
    };

    // 处理表单提交
    const handleSubmit = async (e) => {
        e.preventDefault(); // 阻止默认提交行为

        setIsLoading(true);

        const editedExam = {
            name: name,
            startTime: startTime,
            endTime: endTime,
            location: location,
            id: examId
        };

        const result = await examService.modifyExam(editedExam);
        enqueueSnackbar('修改成功')
        setIsLoading(false);
    };

    return (
        <Container>
            <h1>考试修改页</h1>

            <Form onSubmit={handleSubmit}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Form.Group controlId="formSelectExam">
                    <Form.Label>选择要修改的考试：</Form.Label>
                    <Form.Control as="select" onChange={handleSelectChange}>
                        <option value="">请选择考试</option>
                        {exams.map((exam) => (
                            <option value={exam.id} key={exam.id}>
                                {exam.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                {exam.id && (
                    <>
                        <Form.Group controlId="formExamName">
                            <Form.Label>考试名称：</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="请输入考试名称"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formStartTime">
                            <Form.Label>开始时间：</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEndTime">
                            <Form.Label>结束时间：</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formLocation">
                            <Form.Label>考试地点：</Form.Label>
                            <Form.Control
                                as="select"
                                value={location}
                                onChange={(e) => setLocation(parseInt(e.target.value))}
                            >
                                {locationList.map((location) =>
                                    (
                                        <option value={location.value}>{location.name}</option>
                                    )
                                )}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isLoading}>
                            {isLoading ? "修改中..." : "确认修改"}
                        </Button>
                    </>
                )}
            </Form>
        </Container>
    );
};
export default ExamModify
