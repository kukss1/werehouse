import React from 'react';
import { Layout } from 'antd';
import ProductList from './components/ProductList';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '50px 50px' }}>
        <ProductList />
      </Content>
    </Layout>
  );
}

export default App;