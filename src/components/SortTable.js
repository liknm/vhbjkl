import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function CourseTable({ tableData ,config}) {
    const [sortConfig, setSortConfig] = useState({
        key: '',
        direction: '',
    });

    const onSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...tableData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {/*<th onClick={() => onSort('id')}>ID</th>
                <th onClick={() => onSort('name')}>考试名称</th>
                <th onClick={() => onSort('start')}>开始时间</th>
                <th onClick={() => onSort('end')}>结束时间</th>
                <th onClick={() => onSort('location')}>考试地点</th>*/}
                {
                    config.map(column=>{
                        return (
                            <th onClick={()=>onSort(column.key)}>{column.name}</th>
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {sortedData.map((course) => (
                <tr key={course.id}>
                    {
                        config.map(column=>{
                            const key=column.key
                            return (
                                <td>{course[key]}</td>
                            )
                        })
                    }
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default CourseTable;