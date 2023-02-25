import React from 'react';
import { Layout } from 'antd';
import Body from '../layouts/Content';
import Title from '../layouts/Header';

const { Header, Content, Footer } = Layout;

export default function App() {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };

  return (
    <>
      <Layout>
        <Header style={headerStyle}>
          <Title />
        </Header>
        <Content>
          <Body />
        </Content>
        <Footer>Transaction Analyzer</Footer>
      </Layout>
    </>
  );
}
