import React, {useState} from 'react';
import {Table, Modal} from 'react-bootstrap';
import {intToWeekday} from "../utils/functions";
import ThreeLineBreak from "../components/ThreeLineBreak";
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
            <ThreeLineBreak/>
            <Table bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th>星期一</th>
                    <th>星期二</th>
                    <th>星期三</th>
                    <th>星期四</th>
                    <th>星期五</th>
                    <th>星期六</th>
                    <th>星期日</th>
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
                            <div>开始时间: {modalData.start}:00</div>
                            <div>持续时间: {modalData.duration} hour(s)</div>
                            <div>上课日期: {intToWeekday(modalData.weekday)}</div>
                            <div>位置: {modalData.location}</div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ScheduleTable;
