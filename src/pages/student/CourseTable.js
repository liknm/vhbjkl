import React from 'react';
import SortTable from "../components/SortTable";
import ThreeLineBreak from "../components/ThreeLineBreak";

const config = [
    {
        key: 'id',
        name: 'ID'
    },
    {
        key: 'name',
        name: '课程名称'
    },
    {
        key: 'hour',
        name: '上课时间（小时）'
    },
    {
        key: 'day',
        name: '上课日期（星期几）'
    },
    {
        key: 'duration',
        name: '持续时长'
    },
    {
        key: 'frequency',
        name: '重复频率'
    },
    {
        key: 'location',
        name: '上课地点'
    }
];

function CourseTable({tableData}) {
    return (
        <div>
            <ThreeLineBreak/>
            <SortTable tableData={tableData} config={config}/>
        </div>
    )
}

export default CourseTable;
