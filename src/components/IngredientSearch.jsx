import { useState } from "react";
import React from "react";
function IngredientSearch(props) {
  
  const{ ingredientInfo } = props;
  const [searchItem, setSearchItem] = useState();

if (!ingredientInfo) {
    return <></>;
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
    <div className="recipe-container">
      
      <select name="menu-item"
        id="select-item"
        value={searchItem && searchItem.name}
        onChange={handleChange}>
          <option disabled selected >Choose Item</option>

          {ingredientInfo.map((item) => (
            <option >{item.fields.name}</option>
          ))}
        </select>
    
      <h2>{searchItem && searchItem.name}</h2>
      <p>{searchItem && searchItem.ingredients}</p>
      
    </div>
  );
}
export default IngredientSearch;
