import SortTable from "../components/SortTable";
const tableConfig=[
    {
        key:'id',
        name:'ID'
    },
    {
        key:'name',
        name:'考试名称'
    },
    {
        key:'start',
        name:'开始时间'
    },
    {
        key:'end',
        name:'结束时间'
    },
    {
        key:'location',
        name:'考试地点'
    }
]

const ExamTable=({tableData})=>{
    return (
        <div>
            <SortTable config={tableConfig} tableData={tableData} />
        </div>
    )
}
export default ExamTable