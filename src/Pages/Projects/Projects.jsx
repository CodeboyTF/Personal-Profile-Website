import React, { useState } from "react";
import "../../App.css";
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
  FaKaggle,
  FaChartBar,
  FaChartPie,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { Eye } from "lucide-react";

const techIcons = {
  Python: <FaPython />,
  Pandas: <SiPandas />,
  Numpy: <SiNumpy />,
  Matplotlib: <FaChartBar />,
  Seaborn: <FaChartPie />,
  Flask: <SiFlask />,
  Django: <SiDjango />,
  React: <FaReact />,
  Express: <SiExpress />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Tailwind: <SiTailwindcss />,
  Typescript: <SiTypescript />,
  JavaScript: <FaJsSquare />,
  PHP: <FaPhp />,
  Mongodb: <SiMongodb />,
  PostgreSQL: <FaDatabase />,
  "Scikit-learn": <FaPython />,
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
    features: ["Currency Calculation", "Live Currency Rates"],
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
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
    ],
    features: [
      "Natural Language Processing",
      "Enquiries Csv - Training Data",
      "Encryption",
      "Socketio",
    ],
  },

  {
    id: 3,
    title: "Medical Health System",
    category: "Software Dev",
    description:
      "A full-featured healthcare management application built with TypeScript, TailwindCSS, Express.js, and MongoDB. The system includes an admin dashboard to manage doctors’ availability, track patient appointments, and monitor the number of patients helped or not helped. Patients can easily book appointments, while administrators gain real-time insights into healthcare operations, ensuring efficient scheduling and improved patient care.",
    image: "/images/medic.png",
    github: "#",
    live: null,
    date: "September 2025",
    technologies: [
      "Typescript",
      "React",
      "HTML",
      "Tailwind",
      "Mongodb",
      "Express",
    ],
    features: [
      "Admin Dashboard",
      "Patient Appointment Booking",
      "Real-time Insights",
      "Responsive UI",
    ],
  },

  // This is Data Analysis Category
  {
    id: 4,
    title: "Violence against Women_Turkey.csv",
    category: "Data Analysis",
    description:
      "In my 3rd year at university, I built a fully functional e-commerce website using HTML, CSS, JavaScript, and PHP. The website allows users to browse products, add items to a shopping cart, and place orders online. It demonstrates core web development skills including frontend design, dynamic content, and backend integration.",
    image: "/images/turkey_csv.png",
    Kaggle:
      "https://www.kaggle.com/code/codeboytf/violence-against-women-turkey-csv",
    github: null,
    live: null,
    date: "May 2024",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    features: [
      "CRUD products to/off cart",
      "Responsive design",
      "Payment Feature",
    ],
  },

  // This is Web Development Category
  {
    id: 5,
    title: "3rd year-E-Commerce Website",
    category: "Web Dev",
    description:
      "In my 3rd year at university, I built a fully functional e-commerce website using HTML, CSS, JavaScript, and PHP. The website allows users to browse products, add items to a shopping cart, and place orders online. It demonstrates core web development skills including frontend design, dynamic content, and backend integration.",
    image: "/images/E-Commerce (1).png",
    github: "https://github.com/CodeboyTF/Web-Uni-project",
    live: null,
    date: "July 2023",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    features: [
      "CRUD products to/off cart",
      "Responsive design",
      "Payment Feature",
    ],
  },

  {
    id: 6,
    title: "Portfolio Website",
    category: "Web Dev",
    description:
      "A responsive personal portfolio created with React, featuring projects, experience, and contact information.",
    image: "/images/Portfolio.png",
    github: "https://github.com/CodeboyTF/Personal-Profile-Website",
    live: "https://fhatuwanitsoftwaredev.netlify.app/",
    date: "August 2025",
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
            {["All", "Software Dev", "Data Analysis", "Web Dev"].map((cat) => (
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
                    {(project.category === "Software Dev" ||
                      project.category === "Web Dev") &&
                      project.github && (
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}

                    {(project.category === "Software Dev" ||
                      project.category === "Web Dev") &&
                      project.live && (
                        <a
                          href={project.live}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}

                    {project.category === "Data Analysis" && project.Kaggle && (
                      <a
                        href={project.Kaggle}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaKaggle /> Kaggle
                      </a>
                    )}
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
            {(selectedProject.category === "Software Dev" ||
              selectedProject.category === "Web Dev") &&
              selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> View GitHub
                </a>
              )}

            {(selectedProject.category === "Software Dev" ||
              selectedProject.category === "Web Dev") &&
              selectedProject.live && (
                <a href={selectedProject.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}

            {selectedProject.category === "Data Analysis" &&
              selectedProject.Kaggle && (
                <a
                  href={selectedProject.Kaggle}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaKaggle /> Kaggle
                </a>
              )}
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
