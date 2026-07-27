import "./Hero.css";
import Button from "../common/Button";
import {
  FaArrowRight,
  FaPlayCircle,
  FaShieldAlt,
  FaFolderOpen,
  FaBolt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero__content">
        <span className="hero__badge">🔒 Military Grade Security</span>

        <h1 className="hero__title">
          Secure Your Files
          <br />
          with AES-256 Encryption
        </h1>

        <p className="hero__description">
          Protect your confidential files using enterprise-level encryption.
          Upload, encrypt, decrypt, and download files securely from anywhere.
        </p>

        <div className="hero__buttons">
          <Button onClick={() => {navigate('/register')}}>
            Get Started
            <FaArrowRight />
          </Button>

          <Button variant="secondary">
            <FaPlayCircle />
            Learn More
          </Button>
        </div>

        <div className="hero__features">
          <div>✅ AES-256 Encryption</div>

          <div>✅ Secure Cloud Storage</div>

          <div>✅ Fast File Processing</div>
        </div>
      </div>

      {/* Right Content */}
      <div className="hero__image">
        <div className="hero__dashboard">
          <div className="dashboard__header">
            <div className="dashboard__dot red"></div>

            <div className="dashboard__dot yellow"></div>

            <div className="dashboard__dot green"></div>
          </div>

          <div className="dashboard__lock">🔒</div>

          <h3>SecureVault</h3>

          <p>AES-256 Encryption</p>

          <div className="dashboard__status">
            <span className="status-dot"></span>
            Protected
          </div>
        </div>

        <div className="floating-circle circle1"></div>

        <div className="floating-circle circle2"></div>

        <div className="floating-circle circle3"></div>
      </div>
      <div className="hero__stats">
        <div className="hero__stat-card">
          <FaShieldAlt className="hero__stat-icon" />

          <h3>AES-256</h3>

          <p>Military Grade</p>
        </div>

        <div className="hero__stat-card">
          <FaFolderOpen className="hero__stat-icon" />

          <h3>10K+</h3>

          <p>Files Protected</p>
        </div>

        <div className="hero__stat-card">
          <FaBolt className="hero__stat-icon" />

          <h3>&lt;1s</h3>

          <p>Encryption Speed</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
