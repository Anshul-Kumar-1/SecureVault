import {
  FaUpload,
  FaLock,
  FaDatabase,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import "./Workflow.css";

const workflow = [
  {
    id: "01",
    icon: <FaUpload />,
    title: "Upload File",
    description:
      "Select any supported file and upload it securely.",
  },
  {
    id: "02",
    icon: <FaLock />,
    title: "AES-256 Encryption",
    description:
      "Your file is encrypted before it is stored.",
  },
  {
    id: "03",
    icon: <FaDatabase />,
    title: "Secure Storage",
    description:
      "Encrypted files are stored safely in the cloud.",
  },
  {
    id: "04",
    icon: <FaDownload />,
    title: "Decrypt & Download",
    description:
      "Download and decrypt files whenever you need them.",
  },
];

function Workflow() {
  return (
    <section className="workflow">

      <div className="workflow__header">

        <h2>How SecureVault Works</h2>

        <p>
          Protect your files with enterprise-grade encryption
          in four simple steps.
        </p>

      </div>

      <div className="workflow__timeline">

        {workflow.map((step, index) => (
          <div key={step.id} className="workflow__item">

            <div className="workflow__card">

              <span className="workflow__number">
                {step.id}
              </span>

              <div className="workflow__icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

            {index !== workflow.length - 1 && (
              <div className="workflow__arrow">
                <FaArrowDown />
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Workflow;