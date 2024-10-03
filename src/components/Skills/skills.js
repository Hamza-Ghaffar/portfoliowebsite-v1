import React from "react";
import "./skills.css";
import sqa from "../../assets/sqa.png";
import frontEnd from "../../assets/Frontend.png";
import backendEnd from "../../assets/backend.png";

function Skills() {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          As a DevOps Junior Engineer, I streamline development pipelines and
          optimize deployment processes while also contributing as a backend
          developer, building scalable server-side applications.
        </span>

        <div className="skillBars">
          <div className="skilBar">
            <img src={frontEnd} alt="Frontend Stack" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Frontend Development</h2>
              <p>Experience with React, HTML, CSS, and JavaScript frameworks</p>
            </div>
          </div>

          <div className="skilBar">
            <img src={backendEnd} alt="Backend Stack" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Backend Development</h2>
              <p>Proficient in Node.js, Python, and building RESTful APIs</p>
            </div>
          </div>

          <div className="skilBar">
            <img src={sqa} alt="SQA" className="skillBarImg" />
            <div className="skillBarText">
              <h2>SQA Automation</h2>
              <p>
                Expertise in CI/CD pipelines, Docker, Jenkins, and cloud
                services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
