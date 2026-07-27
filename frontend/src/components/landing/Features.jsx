import {
  FaLock,
  FaCloud,
  FaBolt,
  FaFolderOpen,
  FaUserShield,
  FaMobileAlt,
} from "react-icons/fa";

import "./Features.css";

const features = [
  {
    icon: <FaLock />,
    title: "AES-256 Encryption",
    description:
      "Military-grade encryption keeps every uploaded file secure.",
  },
  {
    icon: <FaCloud />,
    title: "Secure Cloud Storage",
    description:
      "Store encrypted files safely with cloud-ready architecture.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Processing",
    description:
      "Encrypt and decrypt files in seconds with optimized performance.",
  },
  {
    icon: <FaFolderOpen />,
    title: "Easy File Management",
    description:
      "Upload, organize, download, and delete files effortlessly.",
  },
  {
    icon: <FaUserShield />,
    title: "User Authentication",
    description:
      "JWT-based authentication keeps your account protected.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Works beautifully across desktop, tablet, and mobile devices.",
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="features__header">
        <h2>Why Choose SecureVault?</h2>
        <p>
          SecureVault combines strong encryption, modern technologies,
          and an intuitive interface to keep your files safe.
        </p>
      </div>

      <div className="features__grid">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card"
          >
            <div className="feature-card__icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;