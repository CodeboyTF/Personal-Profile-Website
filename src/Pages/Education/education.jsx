import React from "react";
import "./Education.css";

const educationData = [
  {
    title: "BSc IT",
    institution: "University of XYZ",
    year: "2020 - 2023",
    description: "Software development, cybersecurity, and data science.",
  },
  {
    title: "Cybersecurity Internship",
    institution: "CSIR",
    year: "2023",
    description: "Pentesting, digital forensics, ethical hacking.",
  },
  {
    title: "NLP + Deep Learning",
    institution: "Online",
    year: "2024",
    description: "TensorFlow chatbot, Flask, Docker, deployment.",
  },
];

export default function Education() {
  return (
    <section className="education-scroll-container">
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <div className="timeline-items">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
            >
              <h3>{item.title}</h3>
              <p>
                <strong>{item.institution}</strong> • {item.year}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
