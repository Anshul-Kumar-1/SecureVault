import {
  FaShieldAlt,
  FaLock,
  FaCloudUploadAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "./About.css";

function AboutCard() {
  return (
    <div className="about-card">
      <div className="about-card-header">
        <FaShieldAlt className="about-icon" />
        <div>
          <h2>About SecureVault</h2>
          <p>
            SecureVault is a secure file encryption platform designed to protect
            your sensitive files using modern encryption and authentication
            technologies.
          </p>
        </div>
      </div>

      <div className="about-features">

        <div className="about-feature">
          <FaLock />
          <div>
            <h4>AES-256 Encryption</h4>
            <span>Industry-standard file encryption</span>
          </div>
        </div>

        <div className="about-feature">
          <FaShieldAlt />
          <div>
            <h4>JWT Authentication</h4>
            <span>Secure login & protected routes</span>
          </div>
        </div>

        <div className="about-feature">
          <FaCloudUploadAlt />
          <div>
            <h4>Secure File Management</h4>
            <span>Upload, download & manage encrypted files</span>
          </div>
        </div>

        <div className="about-feature">
          <FaCheckCircle />
          <div>
            <h4>Modern Dashboard</h4>
            <span>Fast, responsive and user-friendly interface</span>
          </div>
        </div>

      </div>

      <div className="about-version">
        <span>Version</span>
        <strong>1.0.0</strong>
      </div>
    </div>
  );
}

export default AboutCard;