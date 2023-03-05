import React from 'react';
import { Layout } from 'antd';
import './App.css';
import ProductList from './components/ProductList';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <ProductList />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
