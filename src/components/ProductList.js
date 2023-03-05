import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Table } from 'antd';
import { fetchProducts } from '../redux/itemsSlice';

const { Column } = Table;

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.items.itemsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Card>
      <Table dataSource={productList} rowKey="id">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Category" dataIndex="category" key="category" />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
      </Table>
    </Card>
  );
};

export default ProductList;
