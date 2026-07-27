import {
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

import "./About.css";

function DeveloperCard() {
  return (
    <div className="developer-card">
        <h1 className="developer-title">About the Developer</h1>
      <div className="developer-header">
        <div className="developer-avatar">
          AK
        </div>

        <div>
          <h2>Anshul Kumar</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>

      <div className="developer-info">

        <div className="developer-item">
          <FaGraduationCap />
          <span>B.Tech Computer Science Engineering</span>
        </div>

        <div className="developer-item">
          <FaCode />
          <span>
            Passionate about building secure, scalable and
            user-friendly web applications.
          </span>
        </div>

      </div>

      <div className="developer-buttons">

        <a
          href="https://github.com/Anshul-Kumar-1"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/anshul-kumar-25577b2aa"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>

    </div>
  );
}

export default DeveloperCard;