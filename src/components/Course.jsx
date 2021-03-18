import { useState } from "react";
import React from "react";
// import { baseURL, config } from "../services";
// import axios from "axios";

function Course(props) {
  const { courseItems } = props;
  console.log(courseItems);
  const [selectedCourse, setSelectedCourse] = useState("")

  if (!courseItems) {
    return <></>;
  }
  
    const foundCourses = courseItems.filter((course) => course.fields.course === selectedCourse);
      
    
  return (
    <div className="course-container">
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
        <h2>{courseItem.fields.name}
          <br/>
          {courseItem.fields.ingredients}</h2>
        
      ))}
      
    </div>
  );
}

export default Course;
