import React, {useState} from 'react';
import {Form, Button, ButtonGroup, Container, Row, Col, Alert} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import userService from '../services/api'
import {setUser} from "../slice/userSlice";
import cookie, {setCookie} from "../utils/cookie";
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [userGroup,setUserGroup]=useState('student')
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userClass=userService.login(username,password,userGroup)
        if (userClass) {
            dispatch(setUser({username, password, userGroup}))
            setCookie(username,userGroup,userClass)
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

                        <br/>
                        <div style={{display:'flex'}}>
                            <Button variant="primary" type="submit" key="login">
                                登录
                            </Button>
                            <Link to='register' style={{float:'right'}}>
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
