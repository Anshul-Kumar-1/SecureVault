import {
  FaCloudUploadAlt,
  FaLock,
  FaDownload,
  FaFolderOpen,
} from "react-icons/fa";

import "./FeatureShowcase.css";

const features = [
  {
    icon: <FaCloudUploadAlt />,
    title: "Upload Files",
    description:
      "Upload documents securely with drag-and-drop support.",
  },
  {
    icon: <FaLock />,
    title: "Encrypt Files",
    description:
      "AES-256 encryption keeps every file protected.",
  },
  {
    icon: <FaDownload />,
    title: "Download Securely",
    description:
      "Decrypt and download your files instantly.",
  },
  {
    icon: <FaFolderOpen />,
    title: "Manage Files",
    description:
      "View, organize, search and delete files easily.",
  },
];

function FeatureShowcase() {
  return (
    <section className="showcase">

      <div className="showcase__header">

        <h2>Everything You Need</h2>

        <p>
          SecureVault provides everything required to
          securely manage confidential files.
        </p>

      </div>

      <div className="showcase__grid">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="showcase__card"
          >

            <div className="showcase__icon">

              {feature.icon}

            </div>

            <div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeatureShowcase;