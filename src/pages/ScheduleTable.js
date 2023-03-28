import React, {useState} from 'react';
import {Table, Modal} from 'react-bootstrap';

function ScheduleTable({scheduleData}) {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleClose = () => setShowModal(false);

    const handleCellClick = (data) => {
        if (data) {
            setModalData(data);
            setShowModal(true);
        }
    };
    const tableData = {};
    for (let i = 1; i <= 7; i++) {
        tableData[i] = {};
        for (let j = 8; j <= 21; j++) {
            tableData[i][j] = [];
        }
    }

    return (
        <>
            <Table bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                </thead>
                <tbody>
                {Array.from({length: 15}).map((_, index) => (
                    <tr key={index}>
                        <td>{index + 8}:00</td>
                        {Array.from({length: 7}).map((_, weekday) => {
                            const data = scheduleData.find(
                                (item) => item.weekday === weekday + 1 && (item.start - 8 <= index && (item.start - 8 + item.duration - 1) >= index)
                            );
                            return (
                                <td
                                    key={weekday}
                                    onClick={() => handleCellClick(data)}
                                    style={{
                                        backgroundColor: data ? '#cce5ff' : undefined,
                                        cursor: data ? 'pointer' : undefined,
                                    }}
                                >
                                    {data && data.name}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalData && modalData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalData && (
                        <div>
                            <div>ID: {modalData.id}</div>
                            <div>Start Time: {modalData.start}:00</div>
                            <div>Duration: {modalData.duration} hour(s)</div>
                            <div>Weekday: {modalData.weekday}</div>
                            <div>Location: {modalData.location}</div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ScheduleTable;
