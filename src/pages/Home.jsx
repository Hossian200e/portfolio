import React from "react";
import profile from "../assets/profile.jpg";
import bdFlag from "../assets/Flag.png"; // top of Home.jsx

import "../assets/pages/Home.css"; // your CSS file

// Import icons
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Home = () => {
  // Function to download PDF
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // path to your resume in public folder
    link.download = "Mohammad_Hossain_Resume.pdf";
    link.click();
  };

  return (
    <section className="hero" id="home">
      {/* Left Side - Text */}
      <div className="hero-left">
        <span className="hello">Hello, I'm</span>

        <h1>
          <span className="name-highlight">Mohammad</span>
          <br />
          Hossain
        </h1>

<p className="location">
  <img src={bdFlag} alt="Bangladesh Flag" className="flag-icon" />
  Dhaka, Bangladesh
</p>


<p className="desc">
  I'm a Computer Science student... <br /> 
  I build web applications and enjoy learning new technologies.
</p>


        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <button className="btn-outline" onClick={downloadResume}>
            ⬇ Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side - Profile */}
      <div className="hero-right">
        <div className="image-ring">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
