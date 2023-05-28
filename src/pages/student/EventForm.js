import {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import eventService from '../../services/event'; // 导入事件服务
import locationList from '../../utils/locationList.json'
import {useDispatch, useSelector} from "react-redux";
import {timePause} from "../../slice/timeSlice";
import {setMessage} from "../../slice/messageSlice";
import {enqueueSnackbar} from "notistack";
import Modal from "react-bootstrap/Modal";
import {timeFormatter} from "../../utils/functions";
const initialState={
    name: '',
    start: new Date(),
    duration: 0,
    reType: 0,
    online: false,
    location: null, // 线下事务需要选择地点
    genre: 0,
    group: false,
    platform: '',
    website: ''
}
function EventForm({category}) {
    // 初始化表单数据
    const [formData, setFormData] = useState(initialState);
    const [modalShow,setModalShow]=useState(false)
    const [alternatives,setAlternatives]=useState([])
    const [failed,setFailed]=useState(false)
    function AlternativeModal(props) {
        const handleChoice=(e)=>{
            const choice=e.target.value
            setFormData({...formData,start:props.alternatives[choice]})
            props.onHide()
        }
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        备选时间
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-grid gap-2">
                        {props.alternatives.map((choice,index) => {
                            return (
                                <Button variant='primary' size='lg' key={index} onClick={handleChoice} value={index}>
                                    {timeFormatter(choice)}
                                </Button>)
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    // 处理表单提交事件
    const handleSubmit = (e) => {
        e.preventDefault(); // 阻止默认提交事件
        console.log('submit')
        eventService.addEvent(formData,failed,(category==='activity'))
            .then((result)=>{
                console.log(result)
                if (true){
                    enqueueSnackbar('临时事务提交成功')
                    setFailed(true)
                    setFormData(initialState)
                } else {
                    enqueueSnackbar('时间冲突')
                    setAlternatives(result.alternative)
                    setModalShow(true)
                }
            }).catch((e)=>{
                console.log(e)
        })
    };
    const dispatch=useDispatch()
    const acc=useSelector(state => state.time.accelerated)
    useEffect(()=>{
        if (acc) {
            dispatch(timePause())
        }
    },[acc, dispatch])
    return (
        <div>
            <br/>
            <h1>{category==='activity'?('添加课外活动'):('添加临时事务')}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>名称</Form.Label>
                    <Form.Control type="text" placeholder="请输入名称" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>开始时间</Form.Label>
                    <Form.Control type="datetime-local" value={formData.start.toISOString().slice(0, -8)} onChange={(e) => setFormData({...formData, start: new Date(e.target.value)})} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>持续时间（分钟）</Form.Label>
                    <Form.Control type="number" placeholder="请输入持续时间" value={formData.duration} onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>重复类型</Form.Label>
                    <Form.Control as="select" value={formData.reType} onChange={(e) => setFormData({...formData, reType: parseInt(e.target.value)})} required>
                        <option value={0}>一次性</option>
                        <option value={1}>每天</option>
                        <option value={2}>每周</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>是否在线</Form.Label>
                    <Form.Check type="switch" id="online-switch" label={formData.online ? '是' : '否'} checked={formData.online} onChange={() => setFormData({...formData, online: !formData.online})} />
                </Form.Group>
                {formData.online ? (
                    <>
                        <Form.Group>
                            <Form.Label>平台名称</Form.Label>
                            <Form.Control type="text" placeholder="请输入平台名称" value={formData.platform} onChange={(e) => setFormData({...formData, platform: e.target.value})} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>平台网址</Form.Label>
                            <Form.Control type="url" placeholder="请输入平台网址" value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} required />
                        </Form.Group>
                    </>
                ) : (
                    <Form.Group>
                        <Form.Label>地点</Form.Label>
                        <Form.Control as="select" value={formData.location||''} onChange={(e) => setFormData({...formData, location: parseInt(e.target.value)})}>
                            <option value={null}>请选择地点</option>
                            {locationList.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                <Form.Group>
                    <Form.Label>类型</Form.Label>
                    <Form.Control as="select" value={formData.genre||''} onChange={(e) => setFormData({...formData, genre: parseInt(e.target.value)})} required>
                        <option value={0}>默认</option>
                        {/* 其它类型选项 */}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>是否为团体{category==='activity'?('活动'):('事务')}</Form.Label>
                    <Form.Check type="switch" id="group-switch" label={formData.group ? '是' : '否'} checked={formData.group} onChange={() => setFormData({...formData, group: !formData.group})} />
                    <Form.Label>团体号</Form.Label>
                    {formData.group &&
                        <div>
                            <Form.Control as="select" value={formData.genre||''} onChange={(e) => setFormData({...formData, genre: parseInt(e.target.value)})} required>
                                <option value={0}>默认</option>
                                {/* 其它类型选项 */}
                            </Form.Control>
                        </div>}
                </Form.Group>
                <Button variant="primary" type="submit">提交</Button>
            </Form>
            <AlternativeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                alternatives={alternatives}
            />
        </div>

    );
}
export default EventForm
