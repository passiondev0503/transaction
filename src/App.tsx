import React from 'react';
import './App.css';
import Title from './layouts/Header';
import Body from './layouts/Content';
import Result from './layouts/Result';
// import DataTable from './layouts/Footer';

import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  marginBottom: 30,
};

const App: React.FC = () => (
  <>
    <Routes>
      <Route
        path='/'
        element={
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={headerStyle}>
              <Title />
            </Header>
            <Content>
              <Body />
            </Content>
          </Layout>
        }
      />
      <Route
        path='/result'
        element={
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={headerStyle}>
              <h1>Result</h1>
            </Header>
            <Content>
              <Result />
            </Content>
          </Layout>
        }
      />
    </Routes>
  </>
);

export default App;
