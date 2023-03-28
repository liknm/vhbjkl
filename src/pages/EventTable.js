import SortTable from "../components/SortTable";

const config=[
    {
        name:'事件名称',
        key:'name'
    },
    {
        name:'开始时间',
        key:'start'
    },
    {
        name:'持续时间',
        key:'duration'
    },
    {
        name:'重复频率',
        key:'reType'
    },
    {
        name:'地点',
        key:'location'
    },
    {
        name:'线上事务',
        key:'online'
    },
]
const EventTable=({tableData})=>{
    return (
        <SortTable tableData={tableData} config={config}/>
    )
}
export default EventTable