import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, DatePicker, Button } from 'antd';
import { setFilter } from '../redux/itemsSlice';

const { Option } = Select;

const Filters = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemsList);
  const [category, setCategory] = useState('');
  const [person, setPerson] = useState('');
  const [date, setDate] = useState(null);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handlePersonChange = (value) => {
    setPerson(value);
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleFilter = () => {
    const filteredItems = items.filter(
      (item) =>
        (!category || item.category === category) &&
        (!person || item.person === person) &&
        (!date || item.date === date.format('YYYY-MM-DD'))
    );
    dispatch(setFilter(filteredItems));
  };

  return (
    <div className="filters">
      <Select
        placeholder="Select category"
        style={{ width: 200 }}
        onChange={handleCategoryChange}
      >
        <Option value="">All categories</Option>
        <Option value="category1">Category 1</Option>
        <Option value="category2">Category 2</Option>
        <Option value="category3">Category 3</Option>
      </Select>
      <Select
        placeholder="Select person"
        style={{ width: 200 }}
        onChange={handlePersonChange}
      >
        <Option value="">All people</Option>
        <Option value="person1">Person 1</Option>
        <Option value="person2">Person 2</Option>
        <Option value="person3">Person 3</Option>
      </Select>
      <DatePicker style={{ width: 200 }} onChange={handleDateChange} />
      <Button type="primary" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
};

export default Filters;
