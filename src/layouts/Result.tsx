import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Row, Statistic } from 'antd';

import { result } from '../action';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const num = useSelector((state: any) => state.result.totalCount);
  const average = useSelector((state: any) => state.result.average);

  const onclick = () => {
    dispatch(
      result({
        totalCount: 0,
        average: 0,
      })
    );
    navigate('/');
  };

  return (
    <>
      <Row style={{ textAlign: 'center' }}>
        <Col offset={6} span={8}>
          <Statistic title='Number of transactions' value={num} />
        </Col>
        <Col>
          <Statistic title='Average transaction value' value={average} />
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col offset={12}>
          <Button type='primary' onClick={onclick}>
            Confirm
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Result;
