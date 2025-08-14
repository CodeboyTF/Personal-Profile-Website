import React from "react";
import "./Education.css";
const EDUCATION = [
  {
    school: "University of Example",
    logo: "/Logos/UJlogo.png",
    course: "Bachelor of Science",
    major: "Computer Science",
    duration: "2018 – 2021",
  },
  {
    school: "Example Institute of Technology",
    logo: "/Logos/Vutlogo.jpg",
    course: "Diploma",
    major: "Information Systems",
    duration: "2016 – 2018",
  },
  {
    school: "Sample High School",
    logo: "/logos/sample-high.png",
    course: "National Senior Certificate",
    major: "Science Stream",
    duration: "2011 – 2015",
  },
];
const Education = () => {
  return (
    <section className="edu-wrapper">
      <div className="edu-spine">
        <span className="edu-start"></span>
      </div>
      <div className="edu-list">
        {EDUCATION.map((item, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <article className={`edu-item ${side}`} key={i}>
              <div className="edu-dot" />
              <div className="edu-card">
                <img
                  className="edu-logo"
                  src={item.logo}
                  alt={`${item.school} logo`}
                />
                <div className="edu-text">
                  <h3 className="edu-school">{item.school}</h3>
                  <p className="edu-course">{item.course}</p>
                  <p className="edu-major">{item.major}</p>
                  <p className="edu-duration">{item.duration}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Education;