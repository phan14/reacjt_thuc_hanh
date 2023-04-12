import React from "react";
import "./register.scss";

import { Button, Checkbox, Divider, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const RegisterPage = () => {
  return (
    <div className="register-page" style={{ padding: "50px" }}>
      <h3 style={{ textAlign: "center" }}>Đăng ký người dùng mới</h3>
      <Divider />
      <Form
        name="basic"
        // wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "0 auto" }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          labelCol={{ span: 24 }}
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
        // wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type="primary" htmlType="submit" loading={false}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
