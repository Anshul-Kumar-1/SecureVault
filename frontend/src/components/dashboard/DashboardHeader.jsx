import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import useTheme from "../../hooks/useTheme";

import "./DashboardHeader.css";

function DashboardHeader() {
  const { theme, toggleTheme } = useTheme();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <header className="dashboard-header">

      <div className="dashboard-header-left">

        <h2>{greeting} 👋</h2>

        <p>
          Welcome back to <strong>SecureVault</strong>.
          Protect and manage your files securely.
        </p>

      </div>

      <div className="dashboard-actions">

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button className="icon-btn">
          <FaBell />
        </button>

        <button className="icon-btn">
          <FaUserCircle />
        </button>

      </div>

    </header>
  );
}

export default DashboardHeader;