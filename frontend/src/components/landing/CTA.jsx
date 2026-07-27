import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">

        <div className="cta__content">

          <span className="cta__badge">
            🚀 Start Today
          </span>

          <h2>
            Ready to Protect Your Files?
          </h2>

          <p>
            SecureVault provides enterprise-grade AES-256 encryption,
            secure cloud storage, and an intuitive interface to keep
            your important files safe.
          </p>

          <div className="cta__buttons">

            <Link
              to="/register"
              className="cta__primary"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="cta__secondary"
            >
              <FaEnvelope />
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;