import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

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
          font-family: 'Inter', sans-serif;
          transition: 0.3s;
        }

        body.dark-mode {
          background: #0f172a;
          color: #fff;
        }

        /* NAVBAR */
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.7);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          z-index: 1000;
        }

        .navbar.dark {
          background: rgba(15,23,42,0.7);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: auto;
          padding: 14px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          list-style: none;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: inherit;
          font-size: 15px;
          position: relative;
          transition: 0.3s;
        }

        /* Active link underline animation */
        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: #3b82f6;
          transition: 0.3s;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .dark-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          transition: 0.3s;
        }

        .dark-toggle:hover {
          background: rgba(0,0,0,0.1);
        }

        .navbar.dark .dark-toggle:hover {
          background: rgba(255,255,255,0.1);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: currentColor;
          transition: 0.3s;
        }

        /* Animate to X */
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: inherit;
            backdrop-filter: blur(15px);
            padding: 20px 0;
            gap: 20px;

            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
            transition: 0.3s;
          }

          .nav-links.active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        }
      `}</style>

      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-container">
          
          <h2 className="logo">Hossain</h2>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["home","about","experience","skills","projects","achievements","contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={active === item ? "active" : ""}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

            <li>
              <button onClick={toggleDarkMode} className="dark-toggle">
                {darkMode ? (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
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