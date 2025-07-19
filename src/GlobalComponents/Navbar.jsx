import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "../App.css";
import About from "./About.jsx";
// import Educaton from "../Pages/Education_Page/education.jsx";

export default function NavbarMenu() {
  const [activePage, setActivePage] = useState("About");

  const [theme, setTheme] = useState("#e9f8e7");

  useEffect(() => {
    if (theme === "#023337") {
      document.body.style.backgroundColor = "#023337";
      document.body.style.color = "#41737C";
    } else {
      document.body.style.backgroundColor = "#41737C";
      document.body.style.color = "#023337";
    }
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
                setTheme(theme === "#023337" ? "#41737C" : "#023337")
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
