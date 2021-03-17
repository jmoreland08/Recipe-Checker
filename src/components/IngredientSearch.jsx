import { useEffect, useState } from "react";
import React from "react";
import { baseURL, config } from "../services";
import axios from "axios";

function IngredientSearch() {
  const [ingredientInfo, setIngredientInfo] = useState();
  // const [searchItem, setSearchItem] = useState();

  useEffect(() => {
    const getRecipe = async () => {
      const resp = await axios.get(baseURL, config);
      setIngredientInfo(resp.data.records);
      console.log(ingredientInfo);
    };
    getRecipe();
  }, []);

  if (!ingredientInfo) {
    return <></>;
  }

  return (
    <div className="recipe-container">
      <form>
        <select name="menu-item" id="select-item">
          <option disabled selected>
            Choose Item
          </option>

          {ingredientInfo.map((item) => (
            <option>{item.fields.name}</option>
          ))}
        </select>
        <button type="submit">Get Ingredients</button>
      </form>
      <h2>{ }</h2>
      <p>{}</p>
    </div>
  );
}
export default IngredientSearch;
