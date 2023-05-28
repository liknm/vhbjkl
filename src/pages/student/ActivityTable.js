import SortTable from "../../components/SortTable";
import {useEffect, useState} from "react";
import eventService from "../../services/event";
import locationList from '../../utils/locationList.json'
import {dateFormatter, inAnHour} from "../../utils/functions";
import {useDispatch, useSelector} from "react-redux";
import {setEvents} from "../../slice/dataSlice";
import {timeStart} from "../../slice/timeSlice";
import * as events from "events";
const ActivityTable =  ({isActivity=true}) => {
    const rawData=useSelector(state => state.data.events)
    const data=rawData.filter(event=>{
        if (isActivity===false) {
            return !(event.activity)
        } else {
            return event.activity
        }
    })
    const columns=[
        {
            key:'id',
            name:'ID',
            selector:row=>row.id
        },
        {
            key:'name',
            name:'活动名称',
            selector:row=>row.name
        },
        {
            key:'start',
            name:'开始时间',
            selector:row => dateFormatter(row.startTime)
        },
        {
            key:'duration',
            name:'持续时间',
            selector:row=>row.duration
        },
        {
            key:'reType',
            name:'重复类型',
            selector:row=>{
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
            key:'online',
            name:'线上活动',
            selector:row=>(row.online?'是':'否')
        },
        {
            key:'location',
            name:'地点',
            selector:row=>locationList[row.location].name
        },
        {
            key:'genre',
            name:'活动类型',
            selector:row=>row.genre
        },
        {
            key:'group',
            name:'群体活动',
            selector:row=>(row.group?'是':'否')
        },
        {
            key:'platform',
            name:'活动平台',
            selector:row=>row.platform
        },
        {
            key:'website',
            name:'网址',
            selector:row=>row.website
        }
    ]
    return (
        <div>
            <br/>
            <h1>{isActivity===false?"临时事务查询":"课外活动查询"}</h1>
            <SortTable columns={columns} tableData={data}/>
        </div>
    )
}
export default ActivityTable
