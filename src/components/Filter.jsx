import React, { useState } from "react";
import { Form, Button, Select, DatePicker } from "antd";
import { categories, people } from "../data/items.json";

const { Option } = Select;

const Filter = ({ handleFilter }) => {
  const [form] = Form.useForm();
  const [filter, setFilter] = useState({});

  const handleCategoryChange = (value) => {
    setFilter({ ...filter, category: value });
  };

  const handlePersonChange = (value) => {
    setFilter({ ...filter, person: value });
  };

  const handleDateChange = (value) => {
    setFilter({ ...filter, date: value.format("YYYY-MM-DD") });
  };

  const handleSubmit = () => {
    handleFilter(filter);
  };

  return (
    <Form form={form} layout="inline">
      <Form.Item label="Категория" name="category">
        <Select onChange={handleCategoryChange} placeholder="Выберите категорию">
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Человек" name="person">
        <Select onChange={handlePersonChange} placeholder="Выберите человека">
          {people.map((person) => (
            <Option key={person} value={person}>
              {person}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Дата" name="date">
        <DatePicker onChange={handleDateChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Фильтр
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Filter;
