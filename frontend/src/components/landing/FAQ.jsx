import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  {
    question: "How secure is SecureVault?",
    answer:
      "SecureVault uses AES-256 encryption to protect files before they are stored."
  },
  {
    question: "Can I upload any file type?",
    answer:
      "Yes. Images, PDFs, documents and many other file types are supported."
  },
  {
    question: "Do you store my encryption key?",
    answer:
      "No. Encryption keys are securely managed to protect your data."
  },
  {
    question: "Is SecureVault mobile friendly?",
    answer:
      "Yes. The application is fully responsive across desktop, tablet and mobile devices."
  }
];

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="faq__header">

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about SecureVault.
        </p>

      </div>

      <div className="faq__container">

        {faqs.map((item, index) => (

          <div
            key={index}
            className={
              activeIndex === index
                ? "faq__item active"
                : "faq__item"
            }
          >

            <button
              className="faq__question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <FaChevronDown />

            </button>

            <div className="faq__answer">

              <p>{item.answer}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;