import React, { useState } from "react";
import "../assets/pages/Skills.css";
import { FaReact, FaPython, FaLaptopCode, FaDatabase, FaCuttlefish } from "react-icons/fa";

const skillsList = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaLaptopCode /> },
  { name: "HTML & CSS", icon: <FaLaptopCode /> },
  { name: "C / C++", icon: <FaCuttlefish /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Machine Learning", icon: <FaDatabase /> },
];

const files = [
  {
    name: "languages.cpp",
    content: `#include <bits/stdc++.h>
using namespace std;

vector<string> languages = { "C", "C++", "Python", "JavaScript", "TypeScript", "C#" };
vector<string> fundamentals = { "OOP", "Data Structures", "Algorithms", "System Design" };

void solve() {
    for(auto& lang : languages) {
        cout << "Mastered: " << lang << endl;
    }
    cout << "Total Skills: " << languages.size() << endl;
}

int main() {
    Programmer sharif;
    sharif.solve();
    return 0;
}`
  },
  {
    name: "package.json",
    content: `{
  "name": "devstudy-ai",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^19.0.0",
    "next": "^15.0.0"
  }
}`
  },
  {
    name: "setup.sh",
    content: `#!/bin/bash
echo "Setting up DevStudy AI environment..."
npm install
echo "Dependencies installed"
echo "Starting development server..."
npm run dev`
  },
];

const Skills = () => {
  const [activeFile, setActiveFile] = useState(files[0]);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-intro">
        Technologies and tools I use to build modern web applications and explore AI.
      </p>

      {/* MARQUEE SKILLS */}
      <div className="skills-marquee">
        <div className="skills-track">
          {skillsList.concat(skillsList).map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* VS CODE STYLE CODE WINDOW */}
      <div className="vs-code-window">
        {/* MAC CIRCLES */}
        <div className="vs-code-toolbar">
          <div className="toolbar-circles">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
          </div>

          {/* FILE TABS */}
          <div className="file-tabs">
            {files.map((file) => (
              <button
                key={file.name}
                className={`tab-btn ${activeFile.name === file.name ? "active" : ""}`}
                onClick={() => setActiveFile(file)}
              >
                {file.name}
              </button>
            ))}
          </div>
        </div>

        {/* CODE CONTENT */}
        <pre className="code-content">{activeFile.content}</pre>

        {/* FOOTER */}
        <div className="code-footer">
          <span>{activeFile.name.includes(".cpp") ? "C++ · UTF-8" : "Shell / JSON · UTF-8"}</span>
          <span>
            {activeFile.name === "languages.cpp"
              ? 22 + " Skills Loaded"
              : activeFile.name === "package.json"
              ? Object.keys(JSON.parse(activeFile.content.replace(/\n/g, ""))).length + " Packages"
              : "Setup Script"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
