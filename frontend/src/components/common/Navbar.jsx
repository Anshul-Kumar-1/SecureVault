import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import useTheme from "../../hooks/useTheme";
import toast from "react-hot-toast";
import Button from "./Button";

import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sidebarRef = useRef(null);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();

     toast.success("Logged out successfully.");

    navigate("/login", { replace: true });
  };

  // Close with ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="navbar">
        <Link to="/" className="navbar__logo">
          <FaShieldAlt className="navbar__logo-icon" />
          <span>SecureVault</span>
        </Link>

        <nav className="navbar__nav">
          <NavLink to="/">Home</NavLink>
          <a href="#features">Features</a>
          <a href="#technology">Technology</a>
          <a href="#contact">Contact</a>
          
        </nav>

        <div className="navbar__actions">
          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <button className="menu-btn" onClick={openMenu}>
          <FaBars />
        </button>
      </header>

      {/* Overlay */}

      <div className={isMenuOpen ? "overlay active" : "overlay"} />

      {/* Sidebar */}

      <aside
        ref={sidebarRef}
        className={isMenuOpen ? "mobile-sidebar active" : "mobile-sidebar"}
      >
        <button className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </button>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#technology" onClick={closeMenu}>
          Technology
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
       <Link to="/login" id="login-link" className="login-link">
                Login
              </Link>
        <Link to="/register" id="register-btn" className="register-btn">
                Register
              </Link>

        <div className="navbar__actions">
          {isAuthenticated ? (
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login" className="login-link">
                Login
              </Link>

              <Link to="/register" className="register-btn">
                Register
              </Link>
            </>
          )}

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
