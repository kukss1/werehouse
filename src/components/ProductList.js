import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Input, Select, DatePicker, Button } from 'antd';
import { fetchProducts, setFilters, setFilteredItems } from '../redux/itemsSlice';
import ProductCard from './ProductCard';
import moment from 'moment/moment';

const { Search } = Input;
const { Option } = Select;

const ProductList = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.items.itemsList);
  const filteredItems = useSelector((state) => state.items.filteredItems);
  const filters = useSelector((state) => state.items.filters);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryFilter = (value) => {
    dispatch(setFilters({ ...filters, category: value }));
  };

  const handlePersonFilter = (value) => {
    dispatch(setFilters({ ...filters, person: value }));
  };

  const handleDateFilter = (date, dateString) => {
    dispatch(setFilters({ ...filters, date: dateString }));
  };

  const handleClearFilters = () => {
    dispatch(setFilters({ category: '', person: '', date: '' }));
  };

  useEffect(() => {
    let filtered = itemsList;
    if (filters.category) {
      filtered = filtered.filter((item) => item.category === filters.category);
    }
    if (filters.person) {
      filtered = filtered.filter((item) => item.person === filters.person);
    }
    if (filters.date) {
      filtered = filtered.filter((item) => item.date === filters.date);
    }
    dispatch(setFilteredItems(filtered));
  }, [dispatch, filters, itemsList]);

  const renderProductList = () => {
    const data = filteredItems.length > 0 ? filteredItems : itemsList;
    return data.map((item) => (
      <Col key={item.id} span={8}>
        <ProductCard item={item} />
      </Col>
    ));
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Search placeholder="Поиск по наименованию" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Select
              placeholder="Категория"
              allowClear
              onChange={handleCategoryFilter}
              value={filters.category}
            >
              <Option value="Фрукты">Фрукты</Option>
              <Option value="Овощи">Овощи</Option>
              <Option value="Мясо">Мясо</Option>
              <Option value="Рыба">Рыба</Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Select
              placeholder="Ответственный"
              allowClear
              onChange={handlePersonFilter}
              value={filters.person}
            >
              <Option value="Иванов">Иванов</Option>
              <Option value="Петров">Петров</Option>
              <Option value="Сидоров">Сидоров</Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DatePicker
          placeholder="Дата поставки"
          onChange={handleDateFilter}
          value={filters.date ? moment(filters.date, 'YYYY-MM-DD') : null}
          style={{ width: '100%' }}
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Button onClick={handleClearFilters}>Сбросить фильтры</Button>
      </Col>
    </Row>
  </div>
  <div>
    <Row gutter={[16, 16]}>{renderProductList()}</Row>
  </div>
</div>
);
};

export default ProductList;