import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "../App.css";
import About from "./About.jsx";
// import Educaton from "../Pages/Education_Page/education.jsx";

export default function NavbarMenu() {
  const [activePage, setActivePage] = useState("About");

  // ✅ Load theme from localStorage or default to "#e9f8e7"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "#e9f8e7";
  });

  // ✅ Update theme styling and store in localStorage
  useEffect(() => {
    if (theme === "#023337") {
      document.body.style.backgroundColor = "#023337";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#023337";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const renderContent = () => {
    switch (activePage) {
      case "About":
        return <About />;
      case "Education":
        return <About />;
      case "Experience":
        return <About />;
      case "Projects":
        return <About />;
      case "Certificates":
        return <About />;
      case "Gallery":
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => setActivePage("About")}>About</li>
          <li onClick={() => setActivePage("Education")}>Education</li>
          <li onClick={() => setActivePage("Experience")}>Experience</li>
          <li onClick={() => setActivePage("Projects")}>Projects</li>
          <li onClick={() => setActivePage("Certificates")}>Certificates</li>
          <li onClick={() => setActivePage("Gallery")}>Gallery</li>
          <li>
            <button
              onClick={() =>
                setTheme(theme === "#023337" ? "white" : "#023337")
              }
              className="theme-toggle-icon"
              title="Toggle theme"
            >
              {theme === "#023337" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
        </ul>
      </nav>

      <main className="content">{renderContent()}</main>
    </div>
  );
}
