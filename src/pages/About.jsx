import React from "react";
import "../assets/pages/About.css";
import { FaGraduationCap, FaMedal, FaStar, FaProjectDiagram, FaLightbulb, FaBriefcase } from "react-icons/fa";

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    icon: <FaGraduationCap />,
    description: [
      "Started my Computer Science journey at University of Asia Pacific.",
      "Fell in love with competitive programming on Codeforces.",
      "Enrolled in BSc (Eng.) CSE at UAP.",
      "Discovered the beauty of problem-solving.",
      "Solved my first 200 problems.",
      "Realized programming can change lives."
    ],
  },
  {
    year: "2023",
    title: "Growth & Leadership",
    icon: <FaMedal />,
    description: [
      "Technical Lead @ UAP Programming Contest Club.",
      "Junior Representative @ Math Club, CSE-UAP.",
      "Started mentoring 1st-year students in competitive programming.",
      "Champion of Ekushey Intra Department Programming Contest 2023."
    ],
  },
  {
    year: "2023-2024",
    title: "Recognition & Excellence",
    icon: <FaStar />,
    description: [
      "ICPC Jamilur Reza Chowdhury Scholarship recipient (3 semesters).",
      "Codeforces Specialist (Max Rating: 1438).",
      "CodeChef 3 Stars (Max Rating: 1635).",
      "Permanent trainer at UAP Programming Contest Club.",
      "Received VC's Awards & Dean's Awards regularly.",
      "ICPC Regionalist."
    ],
  },
  {
    year: "2024",
    title: "ICPC & Projects",
    icon: <FaProjectDiagram />,
    description: [
      "ICPC Dhaka Regionalist 2024.",
      "Competed against best programmers in Bangladesh.",
      "Developed TechReform BD 2 e-commerce platform.",
      "Created Catppuccin Dark Pro VSCode theme (3,300+ downloads)."
    ],
  },
  {
    year: "2025 (Present)",
    title: "Always Learning",
    icon: <FaLightbulb />,
    description: [
      "Maintaining CGPA 3.81/4.00 (after 7 semesters).",
      "Built DevStudy AI Suite with Next.js 15 & React 19.",
      "Exploring AI/ML and modern web technologies.",
      "Making programming easy for everyone.",
      "Building solutions with meaningful ideas."
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-intro">
        My journey from a curious student to a passionate developer and mentor.
      </p>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Big Title with Professional Icon */}
            <div className="timeline-main-title">
              <FaBriefcase className="professional-icon" />
              <h2>{milestone.title}</h2>
            </div>

            {/* Small Year heading */}
            <div className="timeline-year-small">
              <span>{milestone.year}</span>
            </div>

            {/* Original milestone icon */}
            <div className="timeline-marker">{milestone.icon}</div>

            {/* Description List */}
            <ul className="timeline-list">
              {milestone.description.map((point, idx) => (
                <li key={idx} className="timeline-point">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
