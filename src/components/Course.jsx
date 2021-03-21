import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom"
// import { baseURL, config } from "../services";
// import axios from "axios";

function Course(props) {
  const { courseItems } = props;
  console.log(courseItems);
  const [selectedCourse, setSelectedCourse] = useState("")

  if (!courseItems) {
    return <h1>Loading...</h1>;
  }
  
    const foundCourses = courseItems.filter((course) => course.fields.course === selectedCourse);
      
    
  return (
    <div id="course-container" className="course-container">
      <select name="course-items"
        id="selected-course"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}>
        <option disabled selected>
          Choose Course
        </option>
        <option value="Appetizer">Appetizer</option>
        <option value="Sushi">Sushi</option>
        <option value="Salad-Soup">Salad-Soup</option>
        <option value="Steaks & Chops">Steaks and Chops</option>
        <option value="Fish">Fish</option>
        <option value="Sides">Sides</option>
        <option value="Desserts">Desserts</option>
        <option value="Sauce">Sauces</option>
        <option value="Dressings">Dressings</option>
      </select>
      
      {foundCourses.map((courseItem) => (
        <Link to={`/item/${courseItem.id}`}>
          <h2 id="rendered-names">{courseItem.fields.name}</h2>
        </Link>
        
      ))}
      
    </div>
  );
}

export default Course;
