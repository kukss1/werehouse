import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const AddItem = ({ items, setItems }) => {
  const onFinish = (values) => {
    const newItem = {
      id: Math.max(...items.map((item) => item.id)) + 1,
      name: values.name,
      category: values.category,
      quantity: values.quantity,
    };
    setItems([...items, newItem]);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Название товара"
        name="name"
        rules={[{ required: true, message: "Введите название товара" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Категория"
        name="category"
        rules={[{ required: true, message: "Введите категорию товара" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Количество"
        name="quantity"
        rules={[{ required: true, message: "Введите количество товара" }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить товар
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddItem;
