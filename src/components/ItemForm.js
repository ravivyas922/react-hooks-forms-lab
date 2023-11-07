import React from "react";
import {useState} from "react"
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name,setName]=useState("");
  const [category,setCategory]=useState("");

  function handleName(event){setName(event.target.value)};

  function handleCategory(event){setCategory(event.target.value);}

  function handleSubmit(event){
    event.preventDefault();
    const newItem=
    {
      id:uuid(),
      name,
      category
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleName} value={name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;