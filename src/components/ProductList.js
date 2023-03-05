import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import ProductCard from './ProductCard';

const ProductList = () => {
  const products = useSelector((state) => state.items.itemsList);

  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col span={8} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
