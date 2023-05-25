import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function CourseTable({ tableData, columns }) {
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
                {columns.map((column,index) => (
                    <th onClick={() => onSort(column.key)} key={index}>{column.name}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedData.map((row,index) => (
                <tr key={row.id} >
                    {columns.map((column,index) => (
                        <td key={index}>{column.selector(row)}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default CourseTable;
