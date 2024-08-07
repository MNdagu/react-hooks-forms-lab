import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [searchItem, setSearchItem] = useState("");
  const [listItems, setListItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearchItem(event.target.value);
  }


  function handleSubmit(newItem){
    setListItems([...listItems,newItem])
  }

  const itemsToDisplay = listItems.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchItem.toLowerCase());
    }

    return (
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={searchItem}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

