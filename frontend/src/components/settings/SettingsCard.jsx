import {
  FaMoon,
  FaLock,
  FaBell,
  FaInfoCircle,
  FaSignOutAlt,
  FaTrash,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";


function SettingsCard({ onChangePassword }) {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    setDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";

    setDarkMode(!darkMode);

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="settings-card">

      <h2>Appearance</h2>

      <div className="setting-item">
        <div className="setting-left">
          <FaMoon />
          <span>Dark Mode</span>
        </div>

         <input
      type="checkbox"
      checked={darkMode}
      onChange={toggleTheme}
    />
      </div>

      <h2>Security</h2>

      <div
        className="setting-item clickable"
        onClick={onChangePassword}
      >
        <div className="setting-left">
          <FaLock />
          <span>Change Password</span>
        </div>

        <FaChevronRight />
      </div>

      <h2>Notifications</h2>

      <div className="setting-item">
        <div className="setting-left">
          <FaBell />
          <span>Email Notifications</span>
        </div>

        <input type="checkbox" />
      </div>

      <h2>Application</h2>

      <div className="setting-item">
        <div className="setting-left">
          <FaInfoCircle />
          <span>Version</span>
        </div>

        <strong>1.0.0</strong>
      </div>

      <div className="setting-item">
        <div className="setting-left">
          <FaLock />
          <span>Encryption</span>
        </div>

        <strong>AES-256 CBC</strong>
      </div>

      <h2>Account</h2>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

      <button className="delete-btn">
        <FaTrash />
        Delete Account
      </button>

    </div>
  );
}

export default SettingsCard;