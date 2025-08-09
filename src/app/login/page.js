"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Input } from 'antd';

const Login = () => {
    const router = useRouter();

    const onFinish = values => {
        console.log('Success:', values);
        router.push('/');
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <h2 style={{ padding: 30 }}>
                Login
            </h2>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>

    );
}


export default Login;