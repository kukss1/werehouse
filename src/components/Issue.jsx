import React, { useState } from "react";
import { Modal, Button, Checkbox, Select } from "antd";
import itemsData from "../data/items.json";
import usersData from "../data/users.json";

const { Option } = Select;

const Users = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState(itemsData);
  const [users, setUsers] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const updatedItems = items.map((item) => {
      if (selectedItems.some((i) => i.id === item.id)) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
    setSelectedItems([]);
    setSelectedUser(null);
    setVisible(false);
  };

  const handleCancel = () => {
    setSelectedItems([]);
    setSelectedUser(null);
    setVisible(false);
  };

  const handleUserChange = (value) => {
    setSelectedUser(value);
  };

  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Выдать товар пользователю
      </Button>
      <Modal
        title="Выдать товар"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: !selectedUser || selectedItems.length === 0 }}
      >
        <p>Выберите пользователя:</p>
        <Select style={{ width: "100%" }} onChange={handleUserChange}>
          {users.map((user) => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
        <p style={{ marginTop: 16 }}>Выберите товары:</p>
        <Checkbox.Group style={{ width: "100%" }}>
          {items.map((item) => (
            <Checkbox
              key={item.id}
              style={{ marginTop: 16 }}
              onChange={(event) => handleCheckboxChange(event, item)}
              disabled={item.quantity === 0}
            >
              {item.name} ({item.quantity} шт.)
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Modal>
    </>
  );
};

export default Users;
