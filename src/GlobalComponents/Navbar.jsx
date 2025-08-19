import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "../App.css";

import About from "./About.jsx";
import Profile from "../Pages/About/Profile.jsx";
import Gallery from "../Pages/Gallery/Gallery.jsx";
import Gallery2 from "../Pages/Gallery/Gallery2.jsx";
import Certificates from "../Pages/Certificates/Certificates.jsx";
import Projects from "../Pages/Projects/Projects.jsx";
import Education from "../Pages/Education/education.jsx";

export default function NavbarMenu() {
  const [activePage, setActivePage] = useState("About");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "#e9f8e7";
  });

  useEffect(() => {
    if (theme === "black") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "#e9f8e7";
    } else {
      document.body.style.backgroundColor = "#e9f8e7";
      document.body.style.color = "black";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const renderContent = () => {
    switch (activePage) {
      case "About":
        return (
          <>
            <About />
            <Profile setActivePage={setActivePage} />
          </>
        );
      case "Journey":
        return (
          <>
            <About />
            <Education />
          </>
        );
      // case "Experience":
      //   return <About />;
      case "Projects":
        return (
          <>
          <About/>
          <Projects />
          </>
        );
      case "Certificates":
        return (
          <>
            <About />
            <Certificates/>
          </>
        );
      case "Gallery":
        return (<>
        <About />
        <Gallery2/>
        <Gallery />
        </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => setActivePage("About")} className={activePage === "About" ? "active" : ""}>About</li>
          <li onClick={() => setActivePage("Journey")} className={activePage === "Journey" ? "active" : ""}>Edu & Exp</li>
          {/* <li onClick={() => setActivePage("Experience")} className={activePage === "Experience" ? "active" : ""}>Experience</li> */}
          <li onClick={() => setActivePage("Projects")} className={activePage === "Projects" ? "active" : ""}>Projects</li>
          <li onClick={() => setActivePage("Certificates")} className={activePage === "Certificates" ? "active" : ""}>Certificates</li>
          <li onClick={() => setActivePage("Gallery")} className={activePage === "Gallery" ? "active" : ""}>Gallery</li>
          <li>
            <button
              onClick={() =>
                setTheme(theme === "black" ? "#e9f8e7" : "black")
              }
              className="theme-toggle-icon"
              title="Toggle theme"
            >
              {theme === "black" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
        </ul>
      </nav>

      <main className="content">{renderContent()}</main>
    </div>
  );
}
