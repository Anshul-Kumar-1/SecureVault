import { FaStar, FaUserCircle } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Software Engineer",
    review:
      "SecureVault made secure file encryption incredibly simple. The interface is clean and easy to use.",
  },
  {
    name: "Full Stack Developer",
    review:
      "The project demonstrates strong frontend architecture and a great user experience.",
  },
  {
    name: "Cyber Security Student",
    review:
      "AES-256 encryption with a modern UI makes this an excellent learning project.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h2>What Developers Say</h2>

        <p>
          Feedback from developers who explored
          the SecureVault platform.
        </p>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((item, index) => (
          <div
            className="testimonial-card"
            key={index}
          >
            <div className="testimonial-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="testimonial-review">
              "{item.review}"
            </p>

            <div className="testimonial-user">
              <FaUserCircle />

              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;