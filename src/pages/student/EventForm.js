import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import ThreeLineBreak from "../components/ThreeLineBreak";

const TemporaryEventForm = () => {
    const today = new Date();
    const [event, setEvent] = useState({
        name: "",
        startYear: today.getFullYear(),
        startMonth: today.getMonth() + 1,
        startDay: today.getDate(),
        startHour: "",
        duration: "",
        reType: "",
        online: false,
        platform: "",
        website: "",
        location: "",
        genre: "",
        group: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 简单的表单验证
        if (event.online && (!event.platform || !event.website)) {
            alert("Please fill in platform and website.");
            return;
        } else if (!event.online && !event.location) {
            alert("Please fill in location.");
            return;
        }

        console.log(event);
    };

    return (
        <div>
            <ThreeLineBreak/>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="eventName">
                <Form.Label column sm={3}>
                    名称
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        placeholder="输入事务名称"
                        name="name"
                        value={event.name}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartYear">
                <Form.Label column sm={3}>
                    年份
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="输入开始年份"
                        name="startYear"
                        value={event.startYear}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartMonth">
                <Form.Label column sm={3}>
                    月份
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="输入开始月份"
                        name="startMonth"
                        value={event.startMonth}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartDay">
                <Form.Label column sm={3}>
                    日期
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="输入开始日期"
                        name="startDay"
                        value={event.startDay}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartHour">
                <Form.Label column sm={3}>
                    小时
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="输入开始时间（小时）"
                        name="startHour"
                        value={event.startHour}
                        onChange={handleChange}
                    />
                </Col>
                <Form.Label column sm={3}>
                    持续时间（小时）
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="输入持续时间"
                        name="duration"
                        value={event.duration}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventReType">
                <Form.Label column sm={3}>
                    重复类型
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        as="select"
                        name="reType"
                        value={event.reType}
                        onChange={handleChange}
                    >
                        <option value="">选择...</option>
                        <option value="0">一次性</option>
                        <option value="1">每天</option>
                        <option value="2">每周</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventOnline">
                <Form.Label column sm={3}>
                    是否线上
                </Form.Label>
                <Col sm={9}>
                    <Form.Check
                        type="checkbox"
                        label=""
                        name="online"
                        checked={event.online}
                        onChange={(e) =>
                            setEvent((prevState) => ({
                                ...prevState,
                                online: e.target.checked,
                                platform: "",
                                website: "",
                                location: "",
                            }))
                        }
                    />
                </Col>
            </Form.Group>

            {event.online ? (
                <div>
                    <Form.Group as={Row} controlId="eventPlatform">
                        <Form.Label column sm={3}>
                            平台
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="输入平台名称"
                                name="platform"
                                value={event.platform}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="eventWebsite">
                        <Form.Label column sm={3}>
                            网址
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="输入网址"
                                name="website"
                                value={event.website}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                </div>
            ) : (
                <Form.Group as={Row} controlId="eventLocation">
                    <Form.Label column sm={3}>
                        地点
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="输入地点"
                            name="location"
                            value={event.location}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
            )}

            <Form.Group as={Row} controlId="eventGenre">
                <Form.Label column sm={3}>
                    类型
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        placeholder="输入事务类型"
                        name="genre"
                        value={event.genre}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventGroup">
                <Form.Label column sm={3}>
                    群体事务
                </Form.Label>
                <Col sm={9}>
                    <Form.Check
                        type="checkbox"
                        label="是否群体事务"
                        name="group"
                        checked={event.group}
                        onChange={handleChange}
        />
                </Col>
            </Form.Group>

            

            <Button variant="primary" type="submit">
                提交
            </Button>
        </Form>
        </div>
    );
}

export default TemporaryEventForm;
