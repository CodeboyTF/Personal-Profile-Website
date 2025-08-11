import React, { useState } from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaStar, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

const techIcons = {
  Python: <FaPython />,
  React: <FaReact />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  PostgreSQL: <FaDatabase />,
  Flask: <FaPython />,
  "Scikit-learn": <FaPython />,
  Pandas: <FaPython />,
  Matplotlib: <FaPython />
};

const projectData = [
  {
    id: 1,
    title: "AI Chatbot Assistant",
    category: "Software Dev",
    description: "An NLP-powered chatbot using Flask and React, integrated with machine learning for intelligent responses.",
    image: "/images/chatbot.jpg",
    github: "https://github.com/username/chatbot",
    live: "https://chatbot-demo.com",
    date: "March 2025",
    technologies: ["Python", "Flask", "React", "PostgreSQL"],
    features: [
      "Natural Language Processing",
      "Real-time communication",
      "Secure authentication"
    ]
  },
    {
    id: 1,
    title: "AI Chatbot Assistant",
    category: "Software Dev",
    description: "An NLP-powered chatbot using Flask and React, integrated with machine learning for intelligent responses.",
    image: "/images/chatbot.jpg",
    github: "https://github.com/username/chatbot",
    live: "https://chatbot-demo.com",
    date: "March 2025",
    technologies: ["Python", "Flask", "React", "PostgreSQL"],
    features: [
      "Natural Language Processing",
      "Real-time communication",
      "Secure authentication"
    ]
  },
    {
    id: 1,
    title: "AI Chatbot Assistant",
    category: "Software Dev",
    description: "An NLP-powered chatbot using Flask and React, integrated with machine learning for intelligent responses.",
    image: "/images/chatbot.jpg",
    github: "https://github.com/username/chatbot",
    live: "https://chatbot-demo.com",
    date: "March 2025",
    technologies: ["Python", "Flask", "React", "PostgreSQL"],
    features: [
      "Natural Language Processing",
      "Real-time communication",
      "Secure authentication"
    ]
  },
  {
    id: 2,
    title: "Obesity Data Clustering",
    category: "Data Science",
    description: "Machine learning clustering model to identify patterns in obesity datasets for health insights.",
    image: "/images/data-cluster.jpg",
    github: "https://github.com/username/obesity-clustering",
    live: "https://data-cluster-demo.com",
    date: "Feb 2025",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    features: [
      "K-Means clustering",
      "Data visualization dashboard",
      "CSV data ingestion"
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Dev",
    description: "A personal portfolio website showcasing my projects, experience, and contact information.",
    image: "/images/portfolio.jpg",
    github: "https://github.com/username/portfolio",
    live: "https://myportfolio.com",
    date: "Jan 2025",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Responsive design",
      "Animated sections",
      "Optimized SEO"
    ]
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <div className="projects-page">
      {!selectedProject && (
        <>
          <h1 className="projects-title">My Projects</h1>
          <div className="projects-filter">
            {["All", "Data Science", "Software Dev", "Web Dev"].map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                onKeyDown={(e) => { if(e.key === 'Enter') setSelectedProject(project) }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description.slice(0, 80)}...</p>
                  <span className="date">{project.date}</span>
                  <div className="project-links">
                    <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href={project.live} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedProject && (
        <section className="project-detail">
          <button className="back-btn" onClick={() => setSelectedProject(null)}>
            <FaArrowLeft /> Back
          </button>
          <h1>{selectedProject.title}</h1>
          <img src={selectedProject.image} alt={selectedProject.title} />
          <p className="full-description">{selectedProject.description}</p>

          <div className="project-buttons">
            <a href={selectedProject.github} target="_blank" rel="noreferrer">
              <FaGithub /> View GitHub
            </a>
            <a href={selectedProject.live} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>

          <h3>Technologies Used</h3>
          <div className="tech-icons">
            {selectedProject.technologies.map((tech, idx) => (
              <span key={idx} className="tech-item">
                {techIcons[tech] || null} {tech}
              </span>
            ))}
          </div>

          <h3>Key Features</h3>
          <ul className="features-list">
            {selectedProject.features.map((feat, idx) => (
              <li key={idx}>
                <FaStar className="star-icon" /> {feat}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
