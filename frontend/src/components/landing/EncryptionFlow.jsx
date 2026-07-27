import {
  FaFileAlt,
  FaLock,
  FaCloud,
  FaDownload,
} from "react-icons/fa";

import "./EncryptionFlow.css";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Upload File",
    description: "Choose any supported document.",
  },
  {
    icon: <FaLock />,
    title: "AES-256 Encryption",
    description: "Your file is encrypted instantly.",
  },
  {
    icon: <FaCloud />,
    title: "Secure Cloud",
    description: "Encrypted data is stored safely.",
  },
  {
    icon: <FaDownload />,
    title: "Decrypt & Download",
    description: "Access your file whenever you need it.",
  },
];

function EncryptionFlow() {
  return (
    <section className="flow">
      <div className="flow__header">
        <h2>How Encryption Works</h2>

        <p>
          Every uploaded file follows a secure encrypted
          workflow before reaching cloud storage.
        </p>
      </div>

      <div className="flow__timeline">
        {steps.map((step, index) => (
          <div className="flow__item" key={step.title}>
            <div className="flow__card">

              <div className="flow__icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

            {index !== steps.length - 1 && (
              <div className="flow__line">
                <span className="flow__pulse"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default EncryptionFlow;