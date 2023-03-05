import React from "react";
import { Table, Button } from "antd";

const DeleteItem = ({ items, setItems }) => {
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const columns = [
    {
      title: "Название товара",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Действия",
      key: "actions",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleDelete(record.id)}>
          Удалить
        </Button>
      ),
    },
  ];

  return <Table dataSource={items} columns={columns} />;
};

export default DeleteItem;
