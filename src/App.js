import React, { useState } from "react";

import { Layout, Menu } from "antd"
import AddItem from './components/AddItem'
import DeleteItem from "./components/DeleteItem";
import Filter from "./components/Filter";
import  items  from "./data/items.json"; // добавлено импортирование

const { Header, Content } = Layout;

const App = () => {
const [filteredItems, setFilteredItems] = useState(items); // изменено на filteredItems

const handleFilter = (filters) => {
const { category, person, date } = filters;
let newFilteredItems = items; // изменено на items
if (category) {
  newFilteredItems = newFilteredItems.filter((item) => item.category === category);
}

if (person) {
  newFilteredItems = newFilteredItems.filter((item) => item.person === person);
}

if (date) {
  newFilteredItems = newFilteredItems.filter((item) => item.date === date);
}

setFilteredItems(newFilteredItems); // изменено на setFilteredItems
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
<AddItem items={filteredItems} setItems={setFilteredItems} /> // изменено на filteredItems
<br />
<DeleteItem items={filteredItems} setItems={setFilteredItems} /> // изменено на filteredItems
</div>
</Content>
</Layout>
);
};

export default App;
