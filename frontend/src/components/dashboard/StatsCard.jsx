import "./StatsCard.css";

function StatsCard({
  icon,
  title,
  value,
  color = "#4F46E5",
}) {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="stats-info">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default StatsCard;