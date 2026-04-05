import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

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
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .navbar.dark {
          background: #121212;
          box-shadow: 0 2px 10px rgba(0,0,0,0.5);
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
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #007bff;
        }

        .navbar.dark .nav-links a {
          color: #ddd;
        }

        .navbar.dark .nav-links a:hover {
          color: #4dabf7;
        }

        .dark-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          color: #333;
          transition: 0.3s;
        }

        .dark-toggle:hover {
          background: rgba(0,0,0,0.1);
        }

        .navbar.dark .dark-toggle {
          color: #fff;
        }

        .navbar.dark .dark-toggle:hover {
          background: rgba(255,255,255,0.1);
        }

        /* Mobile (basic) */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>

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
                {darkMode ? (
                  // Sun Icon
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                  </svg>
                ) : (
                  // Moon Icon
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
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