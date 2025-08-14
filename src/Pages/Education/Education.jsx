import React from "react";
import "./Education.css";
const EDUCATION = [
  {
    school: "Lamula Jubilee Secondary School",
    logo: "/Logos/Lamulalogo.jpg",
    qualification: "National Senior Certificate",
    course: "Matric",
    major: "",
    duration: "2015 – 2020",
  },
  {
    school: "Vaal University of Technology",
    logo: "/Logos/Vutlogo.jpg",
    qualification: "National Diploma",
    course: "Information Technology",
    major: "Software Development / Business Analysis",
    duration: "2021 – 2023",
  },
  {
    school: "CSIR",
    logo: "/Logos/Csirlogo1.jpg",
    qualification: "Software Developer / CyberAnalyst",
    course: "Internship",
    major: "ReactJs| Django| ExpressJs| DataBases",
    duration: "2024 – Present",
  },
    {
    school: "University of Johannesburg",
    logo: "/Logos/UJlogo.png",
    qualification: "Advanced Diploma",
    course: "Busines Information Technology",
    major: "(Aspiring)",
    duration: "2026 – 2026",
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
                  <p className="edu-course">{item.qualification}</p>
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