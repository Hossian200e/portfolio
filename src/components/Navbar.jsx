import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          transition: background 0.3s ease;
        }

        body.dark-mode {
          background: #121212;
          color: #fff;
        }

        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          z-index: 1000;
        }

        .navbar.dark {
          background: #121212;
        }

        .navbar-container {
          max-width: 1200px;
          margin: auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 22px;
          font-weight: 600;
          color: #333;
        }

        .navbar.dark .logo {
          color: #fff;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #444;
          font-size: 15px;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: #007bff;
        }

        .navbar.dark .nav-links a {
          color: #ddd;
        }

        .dark-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 4px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #333;
          display: block;
        }

        .navbar.dark .hamburger span {
          background: #fff;
        }

        /* Mobile Menu */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 60px;
            right: 0;
            width: 100%;
            background: inherit;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 20px 0;
            transform: translateY(-200%);
            transition: 0.3s ease;
          }

          .nav-links.active {
            transform: translateY(0);
          }
        }
      `}</style>

      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-container">

          <h2 className="logo">Hossain</h2>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

            <li>
              <button onClick={toggleDarkMode} className="dark-toggle">
                {darkMode ? (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3"/>
                  </svg>
                )}
              </button>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;