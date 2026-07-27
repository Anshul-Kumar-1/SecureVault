import { NavLink, useNavigate } from "react-router-dom";

import { FaLock, FaLockOpen } from "react-icons/fa";

import {
  FaShieldAlt,
  FaChartPie,
  FaFolderOpen,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { FaInfoCircle } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

import "./Sidebar.css";

function Sidebar() {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <FaShieldAlt />

        <span>SecureVault</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard">
          <FaChartPie />

          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/encrypt">
          <FaLock />
          <span>Encrypt</span>
        </NavLink>

        <NavLink to="/decrypt">
          <FaLockOpen />
          <span>Decrypt</span>
        </NavLink>

        <NavLink to="/files">
          <FaFolderOpen />

          <span>My Files</span>
        </NavLink>

        <NavLink to="/profile">
          <FaUser />

          <span>Profile</span>
        </NavLink>

        <NavLink to="/settings">
          <FaCog />

          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaInfoCircle />
          <span>About</span>
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
