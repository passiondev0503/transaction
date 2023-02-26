import React from 'react';
import './App.css';
import Title from './layouts/Header';
import Body from './layouts/Content';
// import DataTable from './layouts/Footer';

import { Layout } from 'antd';

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
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={headerStyle}>
        <Title />
      </Header>
      <Content>
        <Body />
      </Content>
    </Layout>
  </>
);

export default App;
