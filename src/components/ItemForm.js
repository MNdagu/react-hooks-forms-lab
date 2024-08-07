import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm(props) {
  const [itemCategory, setItemCategory] = useState("Produce")
  const [itemName, setItemName] = useState("")

  function handleItemChange(e){
    setItemName(e.target.value)
  }
  function handleCategoryChange(e){
    setItemCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    props.onItemFormSubmit(newItem)
    setItemName("");
    setItemCategory("Produce");

  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce" >Produce</option>
          <option value="Dairy" >Dairy</option>
          <option value="Dessert" >Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
