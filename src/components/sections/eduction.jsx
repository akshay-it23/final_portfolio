// src/sections/Education.jsx
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
 // optional if you want custom styling
// import './index.css'
const Education = () => {
  return (
    <section id="education" className="education-section">
      <RevealOnScroll>
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>GL BAJAJ INSTITUTE OF TECHNOLOGY</h3>
            <p>Bachelor of Technology in INFORMATION TECHNOLOGY</p>
            <span>2023 - 2027</span>
          </div>
          <div className="education-item">
            <h3>IIT MADRAS BS DEGREE</h3>
            <p>Diploma in Data Science</p>
            <span>2023-27</span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Education;
