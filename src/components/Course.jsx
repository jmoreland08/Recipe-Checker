import { useEffect, useState } from "react";
import React from "react";
import { baseURL, config } from "../services";
import axios from "axios";




function Course() {
  const [courseItems, setCourseItems] = useState();

  useEffect(() => {
    const courses = async () => {
      const resp = await axios.get(baseURL, config);
      setCourseItems(resp.data.records);
      
    };
    courses();
  }, []);

  if (!courseItems) {
    return <></>;
  }

  return (
    <div className="course-container">
      <form>
        <select name="course-items" id="selected-course">
          <option disabled selected>
            Choose Course
          </option>

          {courseItems.map((course) => (
            <option>{course.fields.course}</option>
          ))}
        </select>
        <button type="submit">Get Ingredients</button>
      </form>
      <h2>{ }</h2>
      <p>{}</p>
    </div>
  );
}

export default Course;