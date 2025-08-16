import React, { useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaStar,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaPhp,
} from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import { Eye } from "lucide-react";

const techIcons = {
  Python: <FaPython />,
  Flask: <SiFlask />,
  Django: <SiDjango/>,
  React: <FaReact />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  PHP: <FaPhp/>,
  PostgreSQL: <FaDatabase />,
  "Scikit-learn": <FaPython />,
  Pandas: <FaPython />,
  Matplotlib: <FaPython />,
};

const projectData = [
  // This is Software Development Category
   {
    id: 1,
    title: "Live Currency Calculator",
    category: "Software Dev",
    description:
      "This project is a Currency Exchange Application built using Django and Html, Css. The goal is to provide both a web interface for users and a RESTful API or frontend apps to fetch live currency exchange rates.",
    image: "/images/Currencycal.png",
    github: "https://github.com/CodeboyTF/Currency-Application",
    live: "https://codeboytf.pythonanywhere.com/",
    date: "Semptember 2024",
    technologies: ["Python", "Django", "HTML", "CSS"],
    features: [
      "Currency Calculation",
      "Live Currency Rates",
    ],
  },
  {
    id: 2,
    title: "Internal Chatbot Assistant",
    category: "Software Dev",
    description:
      "An Internal Chatbot using Flask and Html,Css and Js, integrated with PostgreSQL and Nltk to try solve for response time for frequent questions.",
    image: "/images/CHATBOT.png",
    github: "https://github.com/CodeboyTF/Internal-Virtual-Assistant",
    live: null,
    date: "November 2024",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript","PostgreSQL"],
    features: [
      "Natural Language Processing",
      "Enquiries Csv - Training Data",
      "Encryption",
      "Socketio"
    ],
  },

  // This is Data Analysis Category


   // This is Web Development Category
  {
    id: 4,
    title: "2nd year-E-Commerce Website",
    category: "Web Dev",
    description:
      "In my 2nd year at university, I built a fully functional e-commerce website using HTML, CSS, JavaScript, and PHP. The website allows users to browse products, add items to a shopping cart, and place orders online. It demonstrates core web development skills including frontend design, dynamic content, and backend integration.",
    image: "/images/E-Commerce.png",
    github: "https://github.com/CodeboyTF/Web-Uni-project",
    live: null,
    date: "July 2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    features: ["CRUD products to/off cart", "Responsive design", "Payment Feature" ],
  },

    {
    id: 5,
    title: "Portfolio Website",
    category: "Web Dev",
    description:
      "A personal portfolio website showcasing my projects, experience, and contact information.",
    image: "/images/pro6.jpg",
    github: "https://github.com/username/portfolio",
    live: "https://myportfolio.com",
    date: "Jan 2025",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    features: ["Responsive design", "Animated sections", "Optimized SEO"],
  },
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
            {["All", "Data Analysis", "Software Dev", "Web Dev"].map((cat) => (
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedProject(project);
                }}
              >
                <img src={project.image} alt={project.title} />
                <div className="eye-icon-card">
                  <Eye size={16} />
                </div>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description.slice(0, 80)}...</p>
                  <span className="date">{project.date}</span>
                  <div className="project-links">
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                    >
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
