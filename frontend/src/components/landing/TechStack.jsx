import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMysql,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";

import "./TechStack.css";

const technologies = [
  {
    icon: <FaReact />,
    title: "React",
    description: "Modern frontend library",
  },
  {
    icon: <SiVite />,
    title: "Vite",
    description: "Fast development build tool",
  },
  {
    icon: <FaPython />,
    title: "Flask",
    description: "Python backend framework",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    description: "Relational database",
  },
  {
    icon: <SiJsonwebtokens />,
    title: "JWT",
    description: "Authentication system",
  },
  {
    icon: <FaDatabase />,
    title: "AES-256",
    description: "Military-grade encryption",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    description: "Containerization platform",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    description: "Version control system",
  },
];

function TechStack() {
  return (
    <section id="technology" className="tech">
      <div className="tech__header">
        <h2>Technology Stack</h2>

        <p>
          SecureVault is built using modern technologies
          focused on performance, security and scalability.
        </p>
      </div>

      <div className="tech__grid">
        {technologies.map((tech) => (
          <div
            className="tech-card"
            key={tech.title}
          >
            <div className="tech-card__icon">
              {tech.icon}
            </div>

            <h3>{tech.title}</h3>

            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;