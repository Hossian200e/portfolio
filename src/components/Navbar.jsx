import { useState } from "react";
import "../assets/pages/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <h2 className="logo">Hossain</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={toggleDarkMode} className="dark-toggle">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
