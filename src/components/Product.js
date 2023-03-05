import React from 'react';
import { Card, Col } from 'antd';

const { Meta } = Card;

const Product = ({ product }) => {
  return (
    <Col span={6} style={{ marginBottom: 20 }}>
      <Card
        hoverable
        cover={<img alt={product.title} src={product.imageUrl} style={{ height: 150, objectFit: 'cover' }} />}
      >
        <Meta title={product.title} description={`Price: ${product.price}$`} />
      </Card>
    </Col>
  );
};

export default Product;
