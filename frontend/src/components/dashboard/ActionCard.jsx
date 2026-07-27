import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./ActionCard.css";

function ActionCard({
  icon,
  title,
  description,
  to = "#",
}) {
  return (
    <Link
      to={to}
      className="action-card"
    >
      <div className="action-card__icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="action-card__arrow">
        <FaArrowRight />
      </div>
    </Link>
  );
}

export default ActionCard;