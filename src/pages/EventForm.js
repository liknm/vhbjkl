import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

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
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="eventName">
                <Form.Label column sm={3}>
                    Name
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        placeholder="Enter event name"
                        name="name"
                        value={event.name}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartYear">
                <Form.Label column sm={3}>
                    Year
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="Enter start year"
                        name="startYear"
                        value={event.startYear}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartMonth">
                <Form.Label column sm={3}>
                    Month
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="Enter start month"
                        name="startMonth"
                        value={event.startMonth}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartDay">
                <Form.Label column sm={3}>
                    Day
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="Enter start day"
                        name="startDay"
                        value={event.startDay}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventStartHour">
                <Form.Label column sm={3}>
                    Hour
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="Enter start hour"
                        name="startHour"
                        value={event.startHour}
                        onChange={handleChange}
                    />
                </Col>
                <Form.Label column sm={3}>
                    Duration (hours)
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="number"
                        placeholder="Enter duration"
                        name="duration"
                        value={event.duration}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventReType">
                <Form.Label column sm={3}>
                    Repeat type
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        as="select"
                        name="reType"
                        value={event.reType}
                        onChange={handleChange}
                    >
                        <option value="">Choose...</option>
                        <option value="0">Once</option>
                        <option value="1">Everyday</option>
                        <option value="2">Each week</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventOnline">
                <Form.Label column sm={3}>
                    Online
                </Form.Label>
                <Col sm={9}>
                    <Form.Check
                        type="checkbox"
                        label="Check if the event is online"
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
                            Platform
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="Enter platform name"
                                name="platform"
                                value={event.platform}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="eventWebsite">
                        <Form.Label column sm={3}>
                            Website
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="Enter website URL"
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
                        Location
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter location"
                            name="location"
                            value={event.location}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
            )}

            <Form.Group as={Row} controlId="eventGenre">
                <Form.Label column sm={3}>
                    Genre
                </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        placeholder="Enter genre"
                        name="genre"
                        value={event.genre}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="eventGroup">
                <Form.Label column sm={3}>
                    Group
                </Form.Label>
                <Col sm={9}>
                    <Form.Check
                        type="checkbox"
                        label="Check if the event is for group"
                        name="group"
                        checked={event.group}
                        onChange={handleChange}
        />
                </Col>
            </Form.Group>

            

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default TemporaryEventForm;
