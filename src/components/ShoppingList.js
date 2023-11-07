import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [search,setSearch]=useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    return (item.name.includes(search) && selectedCategory===item.category) || (item.name.includes(search) && selectedCategory==="All")
    ||  (search==="" && selectedCategory==="All") || (search==="" && selectedCategory===item.category) });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;