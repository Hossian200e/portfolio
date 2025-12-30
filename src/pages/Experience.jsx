import React, { useState } from "react";
import "../assets/pages/Experience.css";
import { FaBriefcase, FaLightbulb } from "react-icons/fa";

const jobExperiences = [
  {
    title: "Frontend Developer",
    company: "TechReform BD",
    duration: "Jan 2025 - Present",
    description: [
      "Developed responsive web applications using React and Next.js.",
      "Implemented dynamic dashboards and reusable UI components.",
      "Collaborated with backend team to integrate APIs efficiently.",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "DevStudio AI",
    duration: "Jun 2024 - Dec 2024",
    description: [
      "Assisted in building AI-based web tools using React and Node.js.",
      "Optimized application performance and reduced load time by 25%.",
      "Participated in code reviews and agile sprints.",
    ],
  },
];

const entrepreneurExperiences = [
  {
    title: "Founder & CEO",
    company: "DevStudy AI Suite",
    duration: "2025 (Present)",
    description: [
      "Built AI-powered learning tools with Next.js & React.",
      "Managed a small team of developers and designers.",
      "Created solutions to simplify programming for students.",
    ],
  },
  {
    title: "Organizer",
    company: "UAP Programming Contest Club",
    duration: "2023 - 2025",
    description: [
      "Organized programming contests and workshops.",
      "Mentored junior students in competitive programming.",
      "Planned events with 50+ participants.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("job");

  const renderExperiences = (experiences, icon) => {
    return (
      <div className="experience-row">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">{icon}</div>
              <div className="experience-header-text">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
                <span className="experience-duration">{exp.duration}</span>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-tabs">
        <button
          className={`tab-btn ${activeTab === "job" ? "active" : ""}`}
          onClick={() => setActiveTab("job")}
        >
          Job Experience
        </button>
        <button
          className={`tab-btn ${activeTab === "entrepreneur" ? "active" : ""}`}
          onClick={() => setActiveTab("entrepreneur")}
        >
          Entrepreneur & Organizing
        </button>
      </div>

      <div className="experience-container">
        {activeTab === "job" &&
          renderExperiences(
            jobExperiences,
            <FaBriefcase className="icon" />
          )}
        {activeTab === "entrepreneur" &&
          renderExperiences(
            entrepreneurExperiences,
            <FaLightbulb className="icon" />
          )}
      </div>
    </section>
  );
};

export default Experience;
