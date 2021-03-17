// import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
// import axios from "axios";
// import { baseURL, config } from "../services"
import "./App.css";
import Course from "./components/Course";
import AddItemForm from "./components/AddItemForm"
// import Allergy from "./components/Allergy"
// import Button from "./components/Button"
import Home from "./components/Home";
import IngredientSearch from "./components/IngredientSearch";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ingredients">
          <IngredientSearch />
        </Route>
        <Route path="/course">
          <Course />
        </Route>
        <Route path="/add-item">
          <AddItemForm />
        </Route>
          
      </main>
    </div>
  );
}

export default App;
