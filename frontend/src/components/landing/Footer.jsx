import { useEffect, useState } from "react";

import {
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
  FaArrowUp
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShowButton(window.scrollY > 500);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <footer className="footer">

      <div className="footer__container">

        {/* Column 1 */}

        <div className="footer__brand">

          <div className="footer__logo">

            <FaShieldAlt />

            <span>SecureVault</span>

          </div>

          <p>

            Secure your files with enterprise-grade
            AES-256 encryption and modern cloud
            technology.

          </p>

        </div>

        {/* Column 2 */}

        <div>

          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="#features">Features</a>

          <a href="#technology">Technology</a>

          <a href="#contact">Contact</a>

        </div>

        {/* Column 3 */}

        <div>

          <h3>Resources</h3>

          <a href="/">Privacy Policy</a>

          <a href="/">Terms & Conditions</a>

          <a href="/">Documentation</a>

        </div>

        {/* Column 4 */}

        <div>

          <h3>Connect</h3>

          <a
            href="https://github.com/Anshul-Kumar-1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anshul-kumar-25577b2aa"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />

            LinkedIn
          </a>

          <p>

            support@securevault.com

          </p>

        </div>

      </div>

      <div className="footer__bottom">

        <p>

          © 2026 SecureVault. All Rights Reserved.

        </p>

      </div>

      {showButton && (

        <button
          className="scroll-top"
          onClick={scrollTop}
        >

          <FaArrowUp />

        </button>

      )}

    </footer>

  );

}

export default Footer;