import React from "react";
import "../assets/pages/Achievements.css";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

const achievementsList = [
  {
    title: "Competitive Programming",
    description: "Participated in multiple coding contests on Codeforces, CodeChef, and university competitions, achieving high rankings.",
    icon: <FaTrophy />,
  },
  {
    title: "Academic Excellence",
    description: "Maintained top CGPA throughout the semesters and received Dean's and VC's Awards for consistent performance.",
    icon: <FaMedal />,
  },
  {
    title: "Project-Based Achievements",
    description: "Built multiple innovative projects including AI-powered apps, web platforms, and interactive games.",
    icon: <FaStar />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>
      <p className="achievements-intro">
        Highlights of my accomplishments in academics, programming, and project work.
      </p>

      <div className="achievements-grid">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
