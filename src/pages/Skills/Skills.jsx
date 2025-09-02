import React from "react";
import "./Skills.css";

function Habilidades() {
  return (
    <section id="skills" class="section skills-section">
      <h2>Minhas Habilidades</h2>
      <div class="skills-grid-v2">
        <div class="skill-item">
          <i class="fab fa-react"></i>
          <p>React & Next.js</p>
        </div>
        <div class="skill-item">
          <i class="fab fa-js-square"></i>
          <p>JavaScript & TypeScript</p>
        </div>
        <div class="skill-item">
          <i class="fab fa-node-js"></i>
          <p>Node.js & Express</p>
        </div>
        <div class="skill-item">
          <i class="fas fa-database"></i>
          <p>SQL & NoSQL</p>
        </div>
        <div class="skill-item">
          <i class="fas fa-magic"></i>
          <p>Tailwind CSS & Material UI</p>
        </div>
        <div class="skill-item">
          <i class="fas fa-cloud-upload-alt"></i>
          <p>Firebase</p>
        </div>
        <div class="skill-item">
          <i class="fab fa-git-alt"></i>
          <p>Git & GitHub</p>
        </div>
        <div class="skill-item">
          <i class="fas fa-vial"></i>
          <p>Cypress</p>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
