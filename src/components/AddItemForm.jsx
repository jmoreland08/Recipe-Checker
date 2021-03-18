import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function AddItemForm(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [gluten, setGluten] = useState("");
  // const [toggleFetch, setToggleFetch] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMenuItem = {
      name,
      ingredients,
      gluten,
    };
    await axios.post(baseURL, { fields: newMenuItem }, config);
    props.setToggleFetch((toggleFetch)=>!toggleFetch);
  };

  return (
    <div>
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          required
          type="textarea"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label htmlFor="gluten">Has Gluten?</label>
        <input
          required
          type="checkbox"
          id="gluten"
          value={gluten}
          onChange={(e) => setGluten(e.target.checked)}
        >
        
        </input>
        <button type="submit">Add new menu item</button>
      </form>
    </div>
  );
}

export default AddItemForm;
