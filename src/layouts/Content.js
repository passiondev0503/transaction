import { Button, DatePicker, Form, Input, InputNumber, Col, Row } from 'antd';
// import { useState } from 'react';
const { RangePicker } = DatePicker;

const Content = () => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const onFinish = (value) => {
    const { id, date, amount, retailer } = value;
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  return (
    <>
      <Col offset={8}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout='horizontal'
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label='ID' name='id'>
            <Input />
          </Form.Item>
          <Form.Item label='Date' name='date'>
            <DatePicker />
          </Form.Item>
          <Form.Item label='Amount' name='amount'>
            <InputNumber />
          </Form.Item>
          <Form.Item label='Retailer' name='retailer'>
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </>
  );
};

export default Content;
