import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";
import Course from "./components/Course";
import AddItemForm from "./components/AddItemForm";
// import Allergy from "./components/Allergy"
import Home from "./components/Home";
import IngredientSearch from "./components/IngredientSearch";
import NavBar from "./components/NavBar";
import Details from  "./components/Details"

function App() {
  const [ingredientInfo, setIngredientInfo] = useState([]);
  const [courseItems, setCourseItems] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      const resp = await axios.get(baseURL, config);
      const resp2 = await axios.get(
        `${baseURL}?offset=${resp.data.offset}`,
        config
      );
      const ingredients = [...resp.data.records, ...resp2.data.records];
      ingredients.sort((a, b) => (a.fields.name < b.fields.name ? -1 : 1));
      setIngredientInfo(ingredients);

      const courseList = [...resp.data.records, ...resp2.data.records];
      courseList.sort((a, b) => (a.fields.name < b.fields.name ? -1 : 1));
      setCourseItems(courseList);
    };
    getRecipe();
  }, [toggleFetch]);
  return (
    <div id="App" className="App">
      <nav>
        <NavBar />
      </nav>
      <main className="main-container">
        <Route exact path="/">
          <Home />
        </Route>
        <div className="ingredient-render">
          <Route path="/ingredients">
            <IngredientSearch ingredientInfo={ingredientInfo} />
          </Route>
        </div>
        <Route path="/course">
          <Course courseItems={courseItems} />
        </Route>
        <Route path="/item/:id">
          <Details ingredientInfo={ingredientInfo} />
        </Route>
        <Route path="/add-item">
          <AddItemForm setToggleFetch={setToggleFetch} />
        </Route>
      </main>
    </div>
  );
}

export default App;
