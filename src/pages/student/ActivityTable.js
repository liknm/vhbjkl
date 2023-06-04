import SortTable from "../../components/SortTable";
import {dateFormatter} from "../../utils/functions";
import {useSelector} from "react-redux";

const ActivityTable = ({isActivity = true}) => {
    const rawData = useSelector(state => state.data.events)
    console.log(rawData)
    console.log('isactivity?' + isActivity)
    const data = rawData.filter(event => {
        return event.isActivity
    })
    const columns = [
        {
            key: 'id',
            name: 'ID',
            selector: row => row.id
        },
        {
            key: 'name',
            name: '活动名称',
            selector: row => row.name
        },
        {
            key: 'start',
            name: '开始时间',
            selector: row => {
                console.log(row)
                return dateFormatter(row.start)
            }
        },
        {
            key: 'duration',
            name: '持续时间',
            selector: row => row.duration
        },
        {
            key: 'reType',
            name: '重复类型',
            selector: row => {
                switch (row.reType) {
                    case 0:
                        return '一次性';
                    case 1:
                        return '每天';
                    case 2:
                        return '每周'
                    default:
                        return ''
                }
            }
        },
        {
            key: 'online',
            name: '线上活动',
            selector: row => (row.online ? '是' : '否')
        },
        {
            key: 'location',
            name: '地点',
            selector: row =>/*locationList[row.location].name*/'1'
        },
        {
            key: 'genre',
            name: '活动类型',
            selector: row => row.genre
        },
        {
            key: 'group',
            name: '群体活动',
            selector: row => (row.group ? '是' : '否')
        },
        {
            key: 'platform',
            name: '活动平台',
            selector: row => row.platform
        },
        {
            key: 'website',
            name: '网址',
            selector: row => row.website
        }
    ]
    return (
        <div>
            <br/>
            <h1>{isActivity === false ? "临时事务查询" : "课外活动查询"}</h1>
            <SortTable columns={columns} tableData={data}/>
        </div>
    )
}
export default ActivityTable
