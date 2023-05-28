import React, { useState } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import userService from '../services/user';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result=await userService.register({ username, name, className, password });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <br/>
            <h1>注册</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>用户名</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="请输入用户名"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>名字</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="请输入名字"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formClassName">
                    <Form.Label>班级名称</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="请输入班级名称"
                        value={className}
                        onChange={(event) => setClassName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>密码</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    注册
                </Button>
            </Form>
        </Container>
    );
};

export default RegisterForm;
