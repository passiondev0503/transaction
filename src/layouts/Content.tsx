import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
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

import { result } from '../action';

const { RangePicker } = DatePicker;

interface DataType {
  key: React.Key;
  id: string;
  date: string;
  dateDisplay: string;
  amount: number;
  retailer: string;
}

const Content: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultData = useSelector((state: any) => state.result);

  const [key, setKey] = useState(0);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [confirmRetailer, setConfirmRetailer] = useState('');
  console.log('::::::::', defaultData);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const onFinish = (values: any) => {
    const { id, date, amount, retailer } = values;

    const newData: DataType = {
      key: key,
      id: id,
      date: date,
      dateDisplay: moment(date).format('DD/MM/YYYY'),
      amount: amount,
      retailer: retailer,
    };
    setDataSource([...dataSource, newData]);
    setKey(key + 1);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleExport = () => {
    let num = 0;
    let averageValue = 0;
    console.log('TableData:', dataSource);

    dataSource.map((value, index) => {
      if (
        value.retailer == confirmRetailer &&
        value.date > dateFrom &&
        value.date < dateTo
      ) {
        num++;
        averageValue += value.amount;
      }
    });
    console.log('num:', num);
    console.log('averageValue:', averageValue / num);
    // setCount(num);
    // setAverage(averageValue / num + (averageValue % num) / 10);
    console.log('Export button clicked!!!');
    // console.log(count);
    dispatch(
      result({
        dataSource: dataSource,
        totalCount: num,
        average: averageValue / num + (averageValue % num) / 10,
      })
    );
    navigate('/result');
  };
  const dateSelect = (value: any) => {
    setDateFrom(value[0]);
    setDateTo(value[1]);
  };
  const confirmRetailerfunc = (e: any) => {
    setConfirmRetailer(e.target.value);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'dateDisplay',
      key: 'dateDisplay',
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
          <Form.Item
            label='ID'
            name='id'
            rules={[{ required: true, message: 'Please input your ID!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Date'
            name='date'
            rules={[{ required: true, message: 'Please input your date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label='Amount'
            name='amount'
            rules={[{ required: true, message: 'Please input your amount!' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label='Retailer'
            name='retailer'
            rules={[
              { required: true, message: 'Please input your retailer name!' },
            ]}
          >
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
      <Row>
        <Col offset={6} span={14}>
          <Col
            // justify={'space-between'}
            style={{ marginTop: '50px', marginBottom: '16px' }}
          >
            <Row justify={'space-between'}>
              <Col>
                <RangePicker
                  style={{ marginRight: '20px' }}
                  format='DD/MM/YYYY'
                  onChange={dateSelect}
                />
                <Input
                  style={{ width: 200 }}
                  placeholder='Retailer'
                  onChange={confirmRetailerfunc}
                />
              </Col>
              <Button onClick={handleExport} type='primary'>
                Export
              </Button>
            </Row>
          </Col>
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
