import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { name, category, person, date } = product;

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Button type="primary" size="small">
          Edit
        </Button>,
        <Button type="danger" size="small">
          Delete
        </Button>,
      ]}
    >
      <Meta title={name} description={`Category: ${category}, Person: ${person}, Date: ${date}`} />
    </Card>
  );
};

export default ProductCard;
