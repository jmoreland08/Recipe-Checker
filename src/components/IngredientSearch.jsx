import { useState } from "react";
import React from "react";
import "../App.css";

function IngredientSearch(props) {
  
  const{ ingredientInfo } = props;
  const [searchItem, setSearchItem] = useState();

if (!ingredientInfo) {
    return <h1>Loading...</h1>;
  }
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.value
    const found = ingredientInfo.find(
      (item) => item.fields.name === name)
    // console.log(found.fields)
    setSearchItem(found.fields)   
  };
  

  return (
    <div class="recipe-container" id="recipe-render" >
      
      <select  name="menu-item"
        id="select-item"
        value={searchItem && searchItem.name}
        onChange={handleChange}>
          <option disabled selected >Choose Item</option>

          {ingredientInfo.map((item) => (
            <option id="dropdown">{item.fields.name}</option>
          ))}
        </select>
   
      <h2 id="search-item">{searchItem && searchItem.name}</h2>
      <p id="search-paragrph">{searchItem && searchItem.ingredients}</p>
      
    </div>
  );
}
export default IngredientSearch;
