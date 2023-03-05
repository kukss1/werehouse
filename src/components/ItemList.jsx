import React, { useState } from "react";
import { Table, Tag, Space } from "antd";
import itemsData from "../data/items.json";
import Filter from "./Filter";

const ItemList = () => {
    const [items, setItems] = useState(itemsData);
  
    const columns = [
      {
        title: "Название",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Категория",
        dataIndex: "category",
        key: "category",
        render: (category) => {
          let color = "";
          switch (category) {
            case "Одежда":
              color = "blue";
              break;
            case "Обувь":
              color = "green";
              break;
            case "Электроника":
              color = "purple";
              break;
            default:
              break;
          }
          return <Tag color={color}>{category}</Tag>;
        },
      },
      {
        title: "Человек",
        dataIndex: "person",
        key: "person",
      },
      {
        title: "Дата",
        dataIndex: "date",
        key: "date",
      },
    ];
  
    const handleFilterChange = ({ category, person, date }) => {
      let filteredItems = itemsData;
      if (category) {
        filteredItems = filteredItems.filter((item) => item.category === category);
      }
      if (person) {
        filteredItems = filteredItems.filter((item) => item.person === person);
      }
      if (date) {
        filteredItems = filteredItems.filter((item) => item.date === date.format("YYYY-MM-DD"));
      }
      setItems(filteredItems);
    };
  
    return (
      <>
        <Filter onFilterChange={handleFilterChange} />
        <Table columns={columns} dataSource={items} />
      </>
    );
  };
  
  export default ItemList;
  
