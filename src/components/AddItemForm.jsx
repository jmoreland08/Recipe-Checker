import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function AddItemForm(props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [gluten, setGluten] = useState("");
  // const [toggleFetch, setToggleFetch] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMenuItem = {
      name,
      course,
      ingredients,
      gluten,
    };
    await axios.post(baseURL, { fields: newMenuItem }, config);
    props.setToggleFetch((toggleFetch)=>!toggleFetch);
  };

  return (
    <div id="new-item-form">
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div id="form-input">
        <label id="la-name" htmlFor="name">Name:</label>
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <label id="la-course" htmlFor="couse">Course:</label>
          <input
        required
        type="text"
        id="course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
        <label id="la-ingredients" htmlFor="ingredients">Ingredients:</label>
        <textarea
          required
          rows= {6}
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label id="la-gluten"htmlFor="gluten">Has Gluten?</label>
        <input
          required
          type="checkbox"
          id="gluten"
          value={gluten}
          onChange={(e) => setGluten(e.target.checked)}
        >
        </input>
        <button id="button" type="submit">Add new menu item</button>
      </div>
      </form>
    </div>
  );
}

export default AddItemForm;
