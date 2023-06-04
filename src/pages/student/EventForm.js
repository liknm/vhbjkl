import {useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import eventService from '../../services/event'; // 导入事件服务
import locationList from '../../utils/locationList.json'
import {useDispatch, useSelector} from "react-redux";
import {timePause} from "../../slice/timeSlice";
import {enqueueSnackbar} from "notistack";
import Modal from "react-bootstrap/Modal";
import {timeFormatter} from "../../utils/functions";
import {apiUrl} from "../../utils/config";
import axios from "axios";

function EventForm({category}) {

    const userGroup = useSelector(state => state.user.userGroup)
    const initialState = {
        name: '',
        startTime: new Date(),
        duration: 0,
        reType: 0,
        online: false,
        location: null, // 线下事务需要选择地点
        genre: 0,
        group: (userGroup === 'admin'),
        platform: '',
        website: '',
        classIndex: 1
    }
    // 初始化表单数据
    const [formData, setFormData] = useState(initialState);
    const [modalShow, setModalShow] = useState(false)
    const [alternatives, setAlternatives] = useState([])
    const [failed, setFailed] = useState(false)
    const [groupList, setGroupList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    useSelector(state => state.data.events);
    useEffect(() => {
        axios.get(`${apiUrl}/classList`)
            .then((result) => {
                const data = result.data
                setGroupList(data)
            })
            .catch(e => {
                console.log(e)
            })
        axios.get(`${apiUrl}/event/category`)
            .then(result => {
                const data = result.data
                setCategoryList(data)
            })
            .catch(e => {
                console.log(e.message)
            })

    }, [])

    function AlternativeModal(props) {
        const handleChoice = (e) => {
            const choice = parseInt(e.target.value)
            console.log(choice)
            const newStartTime = new Date(alternatives[choice])
            setFormData({...formData, startTime: newStartTime})
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
                        {props.alternatives.map((choice, index) => {
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

    const username = useSelector(state => state.user.username)
    // 处理表单提交事件
    const handleSubmit = (e) => {
        e.preventDefault(); // 阻止默认提交事件
        console.log('submit')
        console.log(formData)
        console.log(userGroup)
        eventService.addEvent(formData, failed, (category === 'activity'), username, userGroup)
            .then((result) => {
                if (result.message === 'success') {
                    console.log(result)
                    enqueueSnackbar('提交成功')
                    setFailed(true)
                    setFormData(initialState)
                } else {
                    console.log(result)
                    const returnedAlt = result
                    setAlternatives(returnedAlt.map(hour => {
                        const newDate = new Date(formData.startTime)
                        return newDate.setHours(hour, 0, 0, 0)
                    }))
                    setModalShow(true)

                }
            }).catch((e) => {
            enqueueSnackbar(e)
        })
    };
    const dispatch = useDispatch()
    const acc = useSelector(state => state.time.accelerated)
    useEffect(() => {
        if (acc) {
            dispatch(timePause())
        }
    }, [acc, dispatch])
    return (
        <div>
            <br/>
            <h1>{category === 'activity' ? ('添加课外活动') : ('添加临时事务')}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>名称</Form.Label>
                    <Form.Control type="text" placeholder="请输入名称" value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>开始时间</Form.Label>
                    <Form.Control type="datetime-local" value={formData.startTime.toISOString().slice(0, -8)}
                                  onChange={(e) => setFormData({...formData, startTime: new Date(e.target.value)})}
                                  required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>持续时间（小时)</Form.Label>
                    <Form.Control type="number" placeholder="请输入持续时间" value={formData.duration}
                                  onChange={(e) => {
                                      console.log(e.target.value)
                                      setFormData({...formData, duration: parseInt(e.target.value)})
                                  }}
                                  required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>重复类型</Form.Label>
                    <Form.Control as="select" value={formData.reType}
                                  onChange={(e) => setFormData({...formData, reType: parseInt(e.target.value)})}
                                  required>
                        <option value={0}>一次性</option>
                        <option value={1}>每天</option>
                        <option value={2}>每周</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>是否在线</Form.Label>
                    <Form.Check type="switch" id="online-switch" label={formData.online ? '是' : '否'}
                                checked={formData.online}
                                onChange={() => setFormData({...formData, online: !formData.online})}/>
                </Form.Group>
                {formData.online ? (
                    <>
                        <Form.Group>
                            <Form.Label>平台名称</Form.Label>
                            <Form.Control type="text" placeholder="请输入平台名称" value={formData.platform}
                                          onChange={(e) => setFormData({...formData, platform: e.target.value})}
                                          required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>平台网址</Form.Label>
                            <Form.Control type="url" placeholder="请输入平台网址" value={formData.website}
                                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                                          required/>
                        </Form.Group>
                    </>
                ) : (
                    <Form.Group>
                        <Form.Label>地点</Form.Label>
                        <Form.Control as="select" value={formData.location || ''}
                                      onChange={(e) => setFormData({...formData, location: parseInt(e.target.value)})}>
                            <option value={null}>请选择地点</option>
                            {locationList.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                <Form.Group>
                    <Form.Label>类型</Form.Label>
                    <Form.Control as="select" value={formData.genre || ''}
                                  onChange={(e) => {
                                      console.log(e.target.value)
                                      setFormData({...formData, genre: parseInt(e.target.value)})
                                  }}
                                  required>
                        {categoryList.map(category => {
                            return (
                                <option value={category.id}>{category.name}</option>
                            )
                        })}
                        {/* 其它类型选项 */}
                    </Form.Control>
                </Form.Group>
                {(userGroup === 'admin') &&
                    <Form.Group>
                        <Form.Label>团体号</Form.Label>
                        {(userGroup === 'admin' || formData.group) &&
                            <div>
                                <Form.Control as="select" value={formData.classIndex || groupList[0]}
                                              onChange={(e) => {
                                                  e.preventDefault()
                                                  console.log(e.target.value)
                                                  setFormData({
                                                      ...formData,
                                                      classIndex: parseInt(e.target.value)
                                                  })
                                              }}
                                              required>
                                    {groupList.map(cls => {
                                        return (
                                            <option value={cls}>{cls}</option>
                                        )
                                    })}
                                </Form.Control>
                            </div>}
                    </Form.Group>}
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
