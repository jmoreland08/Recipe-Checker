import { useState } from "react";
import React from "react";
// import { baseURL, config } from "../services";
// import axios from "axios";

function Course(props) {
  const { courseItems } = props;
  console.log(courseItems[]);
  const [selectedCourse, setSelectedCourse] = useState()

  if (!courseItems) {
    return <></>;
  }
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const course = e.target.value;
  //   const foundCourse = courseItems.find(
  //     (item) => item.fields.name === course);
  //   console.log(e.target)
  //   // console.log(foundCourse.fields);
  //   setSelectedCourse(foundCourse.fields);
  // };
  return (
    <div className="course-container">
      {/* <select name="course-items"
        id="selected-course"
        value={selectedCourse && selectedCourse.name}
        onChange={handleChange}>
        <option disabled selected>
          Choose Course
        </option>
        <option value="appetizer">Appetizer</option>
        <option value="sushi">Sushi</option>
        <option value="salad-soup">Salad-Soup</option>
        <option value="steaks-chops">Steaks and Chops</option>
        <option value="fish">Fish</option>
        <option value="sides">Sides</option>
        <option value="desserts">Desserts</option>
        <option value="sauce">Sauces</option>
        <option value="dressings">Dressings</option>
      </select>
      <p>{selectedCourse && selectedCourse.name}</p> */}
    </div>
  );
}

export default Course;
