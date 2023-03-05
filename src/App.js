import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import AddItem from "./components/AddItem";
import DeleteItem from "./components/DeleteItem";
import Filter from "./components/Filter";

const { Header, Content } = Layout;

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    Promise.all([fetch("/data/items.json"), fetch("/data/people.json")])
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then((data) => {
        const [items, people] = data;
        setItems(items);
        setFilteredItems(items);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleFilter = (filters) => {
    const { category, person, date } = filters;
    let newFilteredItems = items;
    if (category) {
      newFilteredItems = newFilteredItems.filter((item) => item.category === category);
    }
    if (person) {
      newFilteredItems = newFilteredItems.filter((item) => item.person === person);
    }
    if (date) {
      newFilteredItems = newFilteredItems.filter((item) => item.date === date);
    }
    setFilteredItems(newFilteredItems);
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Учет склада</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Filter handleFilter={handleFilter} />
          <br />
          <AddItem items={filteredItems} setItems={setFilteredItems} />
          <br />
          <DeleteItem items={filteredItems} setItems={setFilteredItems} />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
