import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Table,
  Col,
  Row,
  DatePicker,
  InputNumber,
} from 'antd';

interface DataType {
  key: React.Key;
  id: string;
  date: string;
  amount: number;
  retailer: string;
}

const Content: React.FC = () => {
  const [count, setCount] = useState(1);
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      id: 'WLMFRDGD',
      date: '20/08/2018 12:45:33',
      amount: 59.99,
      retailer: 'Kwik-E-Mart',
    },
  ]);

  const onFinish = (values: any) => {
    const { id, date, amount, retailer } = values;

    const newData: DataType = {
      key: count,
      id: '1',
      date: '32',
      amount: 1000,
      retailer: 'retailer',
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);

    console.log('Success:', date);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleExport = () => {
    console.log('object');
  };

  // const dataSource = [
  //   {
  //     key: '1',
  //     id: 'WLMFRDGD',
  //     date: '20/08/2018 12:45:33',
  //     amount: 59.99,
  //     retailer: 'Kwik-E-Mart',
  //   },
  //   {
  //     key: '2',
  //     id: 'WLMFRDGD',
  //     date: '20/08/2018 12:45:33',
  //     amount: 59.99,
  //     retailer: 'Kwik-E-Mart',
  //   },
  //   {
  //     key: '3',
  //     id: 'WLMFRDGD',
  //     date: '20/08/2018 12:45:33',
  //     amount: 59.99,
  //     retailer: 'Kwik-E-Mart',
  //   },
  //   {
  //     key: '4',
  //     id: 'WLMFRDGD',
  //     date: '20/08/2018 12:45:33',
  //     amount: 59.99,
  //     retailer: 'Kwik-E-Mart',
  //   },
  //   {
  //     key: '5',
  //     id: 'WLMFRDGD',
  //     date: '20/08/2018 12:45:33',
  //     amount: 59.99,
  //     retailer: 'Kwik-E-Mart',
  //   },
  // ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Retailer',
      dataIndex: 'retailer',
      key: 'retailer',
    },
  ];

  return (
    <>
      {/* <Row> */}
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
      {/* </Row> */}
      <Row style={{ marginTop: '50px' }}>
        <Col offset={6} span={14}>
          <Button
            onClick={handleExport}
            type='primary'
            style={{ marginBottom: 16 }}
          >
            Export
          </Button>
          <Table
            dataSource={dataSource}
            columns={columns}
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default () => <Content />;
