import React, {useState} from 'react';
import {Alert, Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import userService from '../services/user'
import {setUser} from "../slice/userSlice";
import {setCookie} from "../utils/cookie";
import {enqueueSnackbar} from "notistack";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [userGroup, setUserGroup] = useState('admin')
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const loginMessage = await userService.login(username, password, userGroup)
            console.log(loginMessage)
            if (loginMessage) {
                dispatch(setUser({username, password, userGroup}))
                setCookie(username, userGroup, loginMessage)
                enqueueSnackbar('登录成功')
            } else {
                enqueueSnackbar('登录失败')
            }
        } catch (e) {
            enqueueSnackbar('登录失败')
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <h2 className="text-center mb-4">登录</h2>

                    {/* 显示错误提示 */}
                    {showAlert && (
                        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                            用户ID和密码不能为空
                        </Alert>
                    )}

                    {/* 登录表单 */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="userId">
                            <Form.Label>用户ID</Form.Label>
                            <Form.Control type="text" placeholder="请输入用户ID" value={username}
                                          onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>密码</Form.Label>
                            <Form.Control type="password" placeholder="请输入密码" value={password}
                                          onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="userGroup">
                            <Form.Label>用户组： </Form.Label>
                            <>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="管理员"
                                    name="userGroup"
                                    value="admin"
                                    checked={userGroup === "admin"}
                                    onChange={(e) => setUserGroup(e.target.value)}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="学生"
                                    name="userGroup"
                                    value="user"
                                    checked={userGroup === "user"}
                                    onChange={(e) => setUserGroup(e.target.value)}
                                />
                            </>
                        </Form.Group>


                        <br/>
                        <div>
                            <Button variant="primary" type="submit" key="login">
                                登录
                            </Button>
                            <Link to='register' style={{float: 'right'}}>
                                注册
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
